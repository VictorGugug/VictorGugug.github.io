const LYRICS_OFFSET_SECONDS = 0;
const EMPHASIS_MIN_SECONDS = 1;
const EMPHASIS_MAX_LETTERS = 12;
const EXIT_MS = 700;
const MIN_GUTTER_PX = 230;
const GUTTER_PADDING_PX = 20;
const GUTTER_SLOTS = [
  { side: "left", top: 0.16 },
  { side: "right", top: 0.4 },
  { side: "left", top: 0.62 },
  { side: "right", top: 0.14 },
  { side: "left", top: 0.4 },
  { side: "right", top: 0.66 }
];
const CAPTION_SLOTS = [
  { side: "left", bottom: 96 },
  { side: "right", bottom: 24 }
];
const TTML_METADATA_NS = "http://www.w3.org/ns/ttml#metadata";

function parseTime(value) {
  return value.split(":").reduce((total, part) => total * 60 + Number(part), 0);
}

function readWords(container) {
  const words = [];
  for (const node of container.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (/\s/.test(node.textContent) && words.length) words[words.length - 1].space = true;
      continue;
    }
    if (node.nodeType !== Node.ELEMENT_NODE || node.getAttributeNS(TTML_METADATA_NS, "role")) continue;
    words.push({
      text: node.textContent,
      begin: parseTime(node.getAttribute("begin")),
      end: parseTime(node.getAttribute("end")),
      space: false
    });
  }
  return words;
}

function parseTtml(source) {
  const doc = new DOMParser().parseFromString(source, "application/xml");
  if (doc.querySelector("parsererror")) throw new Error("Lyrics file is not valid TTML");
  return [...doc.getElementsByTagName("p")].map((p) => {
    const background = [...p.children].find((child) => child.getAttributeNS(TTML_METADATA_NS, "role") === "x-bg");
    const words = readWords(p);
    const backgroundWords = background ? readWords(background) : [];
    const lastWordEnd = Math.max(0, ...[...words, ...backgroundWords].map((word) => word.end));
    return {
      begin: parseTime(p.getAttribute("begin")),
      end: Math.max(parseTime(p.getAttribute("end")), lastWordEnd),
      words,
      background: backgroundWords,
      state: "not-sung",
      el: null
    };
  });
}

function renderWord(word) {
  const el = document.createElement("span");
  el.className = "lyric-word";
  const letters = [...word.text];
  const emphasized = word.end - word.begin >= EMPHASIS_MIN_SECONDS && letters.length <= EMPHASIS_MAX_LETTERS;
  word.letters = [];
  if (emphasized) {
    el.classList.add("emphasis");
    const step = (word.end - word.begin) / letters.length;
    letters.forEach((char, index) => {
      const letter = document.createElement("span");
      letter.className = "lyric-letter";
      letter.textContent = char;
      el.append(letter);
      word.letters.push({ el: letter, begin: word.begin + index * step, end: word.begin + (index + 1) * step });
    });
  } else {
    el.textContent = word.text;
  }
  word.el = el;
  return word.space ? [el, document.createTextNode(" ")] : [el];
}

function renderLine(line) {
  const el = document.createElement("p");
  el.className = "float-line";
  if (line.words.length) {
    const main = document.createElement("span");
    main.className = "lyric-main";
    line.words.forEach((word) => main.append(...renderWord(word)));
    el.append(main);
  }
  if (line.background.length) {
    const bg = document.createElement("span");
    bg.className = "lyric-bg";
    line.background.forEach((word) => bg.append(...renderWord(word)));
    el.append(bg);
  }
  return el;
}

function progress(time, begin, end) {
  if (time <= begin) return 0;
  if (time >= end) return 1;
  return (time - begin) / (end - begin);
}

function paintWords(words, time) {
  for (const word of words) {
    word.el.style.setProperty("--p", progress(time, word.begin, word.end).toFixed(3));
    for (const letter of word.letters) {
      const p = progress(time, letter.begin, letter.end);
      letter.el.style.setProperty("--p", p.toFixed(3));
      letter.el.style.setProperty("--glow", Math.sin(p * Math.PI).toFixed(3));
    }
  }
}

function placeLine(el, slotIndex) {
  const page = document.querySelector(".page").getBoundingClientRect();
  const gutter = Math.min(page.left, window.innerWidth - page.right);
  const style = el.style;
  if (gutter >= MIN_GUTTER_PX) {
    const slot = GUTTER_SLOTS[slotIndex % GUTTER_SLOTS.length];
    el.classList.add("in-gutter", slot.side);
    style.width = `${gutter - GUTTER_PADDING_PX * 2}px`;
    style.top = `${Math.round(window.innerHeight * slot.top)}px`;
    style[slot.side] = `${GUTTER_PADDING_PX}px`;
  } else {
    const slot = CAPTION_SLOTS[slotIndex % CAPTION_SLOTS.length];
    el.classList.add("caption", slot.side);
    style.bottom = `${slot.bottom}px`;
    style[slot.side] = "12px";
  }
}

function startLyrics(audio, stage, lines) {
  let slotIndex = 0;

  const show = (line) => {
    line.el = renderLine(line);
    placeLine(line.el, slotIndex);
    slotIndex += 1;
    stage.append(line.el);
    const overflow = line.el.getBoundingClientRect().bottom - (window.innerHeight - GUTTER_PADDING_PX);
    if (overflow > 0 && line.el.classList.contains("in-gutter")) line.el.style.top = `${line.el.offsetTop - overflow}px`;
    line.el.classList.add("visible");
  };

  const hide = (line) => {
    const el = line.el;
    line.el = null;
    if (!el) return;
    el.classList.add("leaving");
    setTimeout(() => el.remove(), EXIT_MS);
  };

  const update = () => {
    const time = audio.currentTime + LYRICS_OFFSET_SECONDS;
    for (const line of lines) {
      const state = time >= line.end ? "sung" : time >= line.begin ? "active" : "not-sung";
      if (state !== line.state) {
        if (state === "active") show(line);
        else hide(line);
        line.state = state;
      }
      if (state === "active") paintWords([...line.words, ...line.background], time);
    }
  };

  const reset = () => {
    stage.replaceChildren();
    lines.forEach((line) => {
      line.el = null;
      line.state = "not-sung";
    });
    update();
  };

  const loop = () => {
    update();
    if (!audio.paused) requestAnimationFrame(loop);
  };

  audio.addEventListener("play", () => requestAnimationFrame(loop));
  audio.addEventListener("seeked", reset);
  window.addEventListener("resize", reset);
}

function initLyrics() {
  const audio = document.getElementById("song");
  const stage = document.getElementById("lyrics-stage");
  try {
    startLyrics(audio, stage, parseTtml(window.RULER_OF_EVERYTHING_TTML));
  } catch (error) {
    document.getElementById("lyrics-error").hidden = false;
    console.error(error);
  }
}

initLyrics();
