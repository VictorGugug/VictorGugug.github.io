const STRINGS = {
  en: {
    skip: "Skip to content",
    taglineCredit: "from Spring and a Storm by Tally Hall",
    splashTitle: "This page plays music",
    splashText: "Ruler of Everything plays in the background with its early edit video.",
    enterSound: "Enter with sound",
    enterSilent: "Enter without sound",
    navRuler: "Ruler of Everything",
    navSpotify: "Spotify",
    navArt: "Art",
    rulerText: "I love Ruler of Everything way too much. Press play and the page turns into its music video, with the lyrics floating around it.",
    versionHint: "Click the GIF to switch versions",
    trackInstrumental: "instrumental",
    trackAlt: "alternate version",
    play: "Play",
    pause: "Pause",
    seekLabel: "Song position",
    lyricsError: "The lyrics could not be loaded.",
    spotifyTitle: "On my headphones",
    presenceTitle: "Now playing",
    recentTitle: "History",
    presenceIdle: "Not listening to anything right now.",
    presenceLive: "listening now",
    presenceError: "Could not reach the music service.",
    recentEmpty: "Play something on Spotify and it will show up here.",
    status_online: "online",
    status_idle: "away",
    status_dnd: "do not disturb",
    status_offline: "offline",
    artTitle: "Art I like",
    artText: "Cyber and brutalist posters, dithered bitmaps, wireframe 3D and retro-futurism. I collect it on Pinterest.",
    artLink: "Open my board on Pinterest",
    welcomeSrc: "assets/logo/welcome.png",
    welcomeAlt: "welcome to my homepage",
    tagline: "create until nothing is left to create",
    nowPlaying: "now playing",
    navTitle: "Navigate",
    navAbout: "About me",
    navProjects: "Projects",
    navTech: "Tech",
    navLove: "Things I love",
    navLinks: "Links",
    langTitle: "Language",
    aboutText: "I build Minecraft server plugins in Java and small web worlds in TypeScript and plain HTML. Old operating systems, pixel buttons, starfields and Murder Drones live rent free in my head, so they end up in my projects too.",
    idName: "Serial designation",
    idOrbit: "Online since",
    idBuilds: "Builds",
    idBuildsValue: "Minecraft plugins, web toys, desktop apps",
    idFuel: "Fuel",
    idFuelValue: "oil and a very long playlist",
    projectsTitle: "My projects",
    pBlockProt: "Protection plugin for chests, furnaces and more, with a modern GUI. Published on Modrinth, CurseForge and Hangar.",
    pNexus: "All-in-one plugin for Minecraft Java Edition 26.x built around dialog menus: auth, antibot, essentials, clans and chat under one command. Early development.",
    pZarXP: "Windows XP recreated in the browser with the Luna style: boot screen, Start menu, Internet Explorer 6, Media Player, Paint, Minesweeper and Solitaire.",
    pRamosi: "A generative watercolor bouquet of yellow flowers with a white butterfly and a hidden letter. Runs in the browser and as a Windows desktop app.",
    pMiracle: "Fan site about Tally Hall, Miracle Musical and Cojum Dip: history, members, discography and an analysis of Hawaii: Part II.",
    pHNP: "School project about Hiroshima, Nagasaki and Chernobyl, and the role of the imaginary number i in quantum physics. Written in Spanish.",
    live: "Open it",
    code: "Code",
    techTitle: "Tech I use",
    loveTitle: "Things I love",
    shelfSpace: "Space",
    linksTitle: "Links",
    linkGithub: "all my repositories",
    linkModrinth: "BlockProt Reloaded downloads",
    linkForks: "Spicetify forks I tinker with",
    credits: "Graphics by",
    creditsMD: "Murder Drones belongs to Glitch Productions."
  },
  es: {
    skip: "Saltar al contenido",
    taglineCredit: "de Spring and a Storm, de Tally Hall",
    splashTitle: "Esta página tiene música",
    splashText: "Ruler of Everything suena de fondo con el video de su early edit.",
    enterSound: "Entrar con sonido",
    enterSilent: "Entrar sin sonido",
    navRuler: "Ruler of Everything",
    navSpotify: "Spotify",
    navArt: "Arte",
    rulerText: "Me gusta demasiado Ruler of Everything. Dale play y la página se convierte en su video, con la letra flotando a su alrededor.",
    versionHint: "Haz clic en el GIF para cambiar de versión",
    trackInstrumental: "instrumental",
    trackAlt: "versión alternativa",
    play: "Reproducir",
    pause: "Pausa",
    seekLabel: "Posición de la canción",
    lyricsError: "No se pudo cargar la letra.",
    spotifyTitle: "En mis audífonos",
    presenceTitle: "Sonando ahora",
    recentTitle: "Historial",
    presenceIdle: "No estoy escuchando nada ahora mismo.",
    presenceLive: "sonando ahora",
    presenceError: "No se pudo conectar con el servicio de música.",
    recentEmpty: "Pon algo en Spotify y saldrá aquí.",
    status_online: "en línea",
    status_idle: "ausente",
    status_dnd: "no molestar",
    status_offline: "desconectado",
    artTitle: "Arte que me gusta",
    artText: "Pósters cyber y brutalistas, bitmaps con tramado, wireframes 3D y retrofuturismo. Lo guardo en Pinterest.",
    artLink: "Abrir mi tablero en Pinterest",
    welcomeSrc: "assets/logo/welcome-es.png",
    welcomeAlt: "bienvenidos a mi web",
    tagline: "crear hasta que no quede nada por crear",
    nowPlaying: "sonando",
    navTitle: "Navegar",
    navAbout: "Sobre mí",
    navProjects: "Proyectos",
    navTech: "Tecnologías",
    navLove: "Cosas que me gustan",
    navLinks: "Enlaces",
    langTitle: "Idioma",
    aboutText: "Hago plugins para servidores de Minecraft en Java y pequeños mundos web en TypeScript y HTML puro. Los sistemas operativos viejos, los botones pixelados, los cielos estrellados y Murder Drones viven en mi cabeza sin pagar alquiler, así que terminan en mis proyectos.",
    idName: "Designación de serie",
    idOrbit: "En línea desde",
    idBuilds: "Construye",
    idBuildsValue: "plugins de Minecraft, juguetes web, apps de escritorio",
    idFuel: "Combustible",
    idFuelValue: "aceite y una playlist muy larga",
    projectsTitle: "Mis proyectos",
    pBlockProt: "Plugin de protección para cofres, hornos y más, con una interfaz moderna. Publicado en Modrinth, CurseForge y Hangar.",
    pNexus: "Plugin todo en uno para Minecraft Java Edition 26.x basado en menús de diálogo: autenticación, antibot, esenciales, clanes y chat bajo un solo comando. En desarrollo temprano.",
    pZarXP: "Windows XP recreado en el navegador con el estilo Luna: pantalla de arranque, menú Inicio, Internet Explorer 6, Media Player, Paint, Buscaminas y Solitario.",
    pRamosi: "Un ramo generativo de flores amarillas en acuarela con una mariposa blanca y una carta escondida. Funciona en el navegador y como app de escritorio para Windows.",
    pMiracle: "Página de fans sobre Tally Hall, Miracle Musical y Cojum Dip: historia, miembros, discografía y un análisis de Hawaii: Part II.",
    pHNP: "Trabajo escolar sobre Hiroshima, Nagasaki y Chernóbil, y el papel del número imaginario i en la física cuántica.",
    live: "Abrir",
    code: "Código",
    techTitle: "Tecnologías que uso",
    loveTitle: "Cosas que me gustan",
    shelfSpace: "Espacio",
    linksTitle: "Enlaces",
    linkGithub: "todos mis repositorios",
    linkModrinth: "descargas de BlockProt Reloaded",
    linkForks: "forks de Spicetify con los que experimento",
    credits: "Gráficos de",
    creditsMD: "Murder Drones pertenece a Glitch Productions."
  }
};

const STORAGE_KEY = "lang";
const TRACKS = [
  { src: "assets/media/ruler-of-everything-instrumental.m4a", label: "trackInstrumental" },
  { src: "assets/media/ruler-of-everything-alt.m4a", label: "trackAlt" }
];
const VIDEO_OFFSET_SECONDS = 3.75;
const VIDEO_DRIFT_SECONDS = 0.3;
const SPARKLE_INTERVAL_MS = 45;
const SPARKLE_LIFETIME_MS = 900;

let currentLang = "en";
window.siteStrings = () => STRINGS[currentLang];

function readSavedLang() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    console.warn("Language preference was not saved:", error);
  }
}

function applyLang(lang) {
  const strings = STRINGS[lang];
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = strings[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-src]").forEach((el) => {
    el.src = strings[el.dataset.i18nSrc];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.alt = strings[el.dataset.i18nAlt];
  });
  document.querySelectorAll("[data-i18n-label]").forEach((el) => {
    el.setAttribute("aria-label", strings[el.dataset.i18nLabel]);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
}

function initialLang() {
  const saved = readSavedLang();
  if (Object.hasOwn(STRINGS, saved)) return saved;
  const browser = (navigator.language || "").slice(0, 2);
  return Object.hasOwn(STRINGS, browser) ? browser : "en";
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLang(button.dataset.lang);
    saveLang(button.dataset.lang);
  });
});

function playSong(audio) {
  audio.play().catch((error) => console.warn("Playback did not start:", error));
}

function formatTime(seconds) {
  const whole = Math.floor(seconds || 0);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
}

function initPlayer() {
  const audio = document.getElementById("song");
  const video = document.getElementById("bg-video");
  const toggle = document.getElementById("play-toggle");
  const seek = document.getElementById("seek");
  const clock = document.getElementById("clock");

  const syncVideo = (force) => {
    if (!video.duration) return;
    const target = Math.min(audio.currentTime + VIDEO_OFFSET_SECONDS, video.duration - 0.05);
    if (force || Math.abs(video.currentTime - target) > VIDEO_DRIFT_SECONDS) video.currentTime = target;
  };

  const setLabel = (key) => {
    toggle.dataset.i18n = key;
    toggle.textContent = STRINGS[currentLang][key];
  };

  audio.addEventListener("play", () => {
    document.body.classList.add("is-playing");
    setLabel("pause");
    syncVideo(true);
    video.play().catch((error) => console.warn("Background video did not start:", error));
  });
  audio.addEventListener("pause", () => {
    document.body.classList.remove("is-playing");
    setLabel("play");
    video.pause();
  });
  audio.addEventListener("seeked", () => syncVideo(true));
  audio.addEventListener("loadedmetadata", () => {
    seek.max = String(audio.duration);
  });
  audio.addEventListener("timeupdate", () => {
    seek.value = String(audio.currentTime);
    clock.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    syncVideo(false);
  });
  seek.addEventListener("input", () => {
    audio.currentTime = Number(seek.value);
  });
  toggle.addEventListener("click", () => {
    if (audio.paused) playSong(audio);
    else audio.pause();
  });
  initVersionSwitch(audio);
  return audio;
}

function initVersionSwitch(audio) {
  const button = document.getElementById("version-switch");
  const name = document.getElementById("version-name");
  let current = 0;
  button.addEventListener("click", () => {
    current = (current + 1) % TRACKS.length;
    const track = TRACKS[current];
    const time = audio.currentTime;
    audio.addEventListener(
      "loadedmetadata",
      () => {
        audio.currentTime = Math.min(time, audio.duration - 0.1);
        playSong(audio);
      },
      { once: true }
    );
    audio.src = track.src;
    name.dataset.i18n = track.label;
    name.textContent = STRINGS[currentLang][track.label];
    button.setAttribute("aria-pressed", String(current !== 0));
  });
}

function initSplash(audio) {
  const splash = document.getElementById("splash");
  splash.hidden = false;
  const close = (withSound) => {
    splash.hidden = true;
    document.getElementById("main").focus();
    if (withSound) playSong(audio);
  };
  document.getElementById("enter-sound").addEventListener("click", () => close(true));
  document.getElementById("enter-silent").addEventListener("click", () => close(false));
  splash.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close(false);
  });
  document.getElementById("enter-sound").focus();
}

function initSparkles() {
  const fine = window.matchMedia("(pointer: fine)").matches;
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || calm) return;
  let last = 0;
  document.addEventListener("pointermove", (event) => {
    if (event.timeStamp - last < SPARKLE_INTERVAL_MS) return;
    last = event.timeStamp;
    const star = document.createElement("span");
    star.className = "sparkle";
    star.style.left = `${event.clientX}px`;
    star.style.top = `${event.clientY}px`;
    document.body.append(star);
    setTimeout(() => star.remove(), SPARKLE_LIFETIME_MS);
  });
}

applyLang(initialLang());
initSplash(initPlayer());
initSparkles();
