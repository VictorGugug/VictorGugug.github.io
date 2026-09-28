const DISCORD_USER_ID = "882834052804124723";
const LASTFM_USER = "zellyszar";
const LASTFM_API_KEY = "cfea372047efa76c979924d131ab62ac";
const PRESENCE_REFRESH_MS = 30000;
const RECENT_TRACK_COUNT = 8;

function t(key) {
  return window.siteStrings()[key];
}

function trackRow({ art, title, artist, url, badge }) {
  const row = document.createElement("li");
  row.className = "track";
  if (art) {
    const img = document.createElement("img");
    img.src = art;
    img.alt = "";
    img.width = 48;
    img.height = 48;
    row.append(img);
  }
  const text = document.createElement("div");
  const safeUrl = url?.startsWith("https://") ? url : "";
  const name = document.createElement(safeUrl ? "a" : "span");
  name.className = "track-title";
  name.textContent = title;
  if (safeUrl) name.href = safeUrl;
  const by = document.createElement("span");
  by.className = "track-artist";
  by.textContent = artist;
  text.append(name, by);
  if (badge) {
    const tag = document.createElement("span");
    tag.className = "track-badge";
    tag.dataset.i18n = badge;
    tag.textContent = t(badge);
    text.append(tag);
  }
  row.append(text);
  return row;
}

function showMessage(list, key) {
  const item = document.createElement("li");
  item.className = "track-empty";
  item.dataset.i18n = key;
  item.textContent = t(key);
  list.replaceChildren(item);
}

async function loadPresence(list) {
  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`);
    if (!response.ok) throw new Error(`Presence request failed with status ${response.status}`);
    const { data } = await response.json();
    if (!data.listening_to_spotify || !data.spotify) {
      showMessage(list, "presenceIdle");
      return;
    }
    const { song, artist, album_art_url: art, track_id: id } = data.spotify;
    if (!song) {
      showMessage(list, "presenceIdle");
      return;
    }
    const url = id ? `https://open.spotify.com/track/${id}` : "";
    list.replaceChildren(trackRow({ art, title: song, artist, url, badge: "presenceLive" }));
  } catch (error) {
    showMessage(list, "presenceError");
    console.error(error);
  }
}

function pickArt(track) {
  const images = Array.isArray(track.image) ? track.image : [];
  return (
    images.find((image) => image.size === "medium")?.["#text"] ||
    images.find((image) => image.size === "large")?.["#text"] ||
    images.find((image) => image["#text"])?.["#text"] ||
    ""
  );
}

function pickArtist(track) {
  if (typeof track.artist === "string") return track.artist;
  return track.artist?.["#text"] || track.artist?.name || "";
}

async function loadRecent(list) {
  const params = new URLSearchParams({
    method: "user.getrecenttracks",
    user: LASTFM_USER,
    api_key: LASTFM_API_KEY,
    format: "json",
    limit: String(RECENT_TRACK_COUNT)
  });
  try {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?${params}`);
    if (!response.ok) throw new Error(`Recent tracks request failed with status ${response.status}`);
    const { recenttracks } = await response.json();
    if (recenttracks?.error) throw new Error(`Last.fm error ${recenttracks.error}: ${recenttracks.message}`);
    const items = [].concat(recenttracks?.track || []).filter(Boolean).slice(0, RECENT_TRACK_COUNT);
    const rows = items.map((track) =>
      trackRow({
        art: pickArt(track),
        title: track.name || track.title || "?",
        artist: pickArtist(track),
        url: track.url,
        badge: track["@attr"]?.nowplaying ? "presenceLive" : ""
      })
    );
    if (rows.length) list.replaceChildren(...rows);
    else showMessage(list, "recentEmpty");
  } catch (error) {
    showMessage(list, "presenceError");
    console.error(error);
  }
}

function initPresence() {
  const section = document.getElementById("spotify");
  const presence = document.getElementById("presence-list");
  const recent = document.getElementById("recent-list");
  const hasDiscord = DISCORD_USER_ID !== "";
  const hasLastfm = LASTFM_USER !== "" && LASTFM_API_KEY !== "";
  if (!hasDiscord && !hasLastfm) return;
  section.hidden = false;
  document.getElementById("presence-panel").hidden = !hasDiscord;
  document.getElementById("recent-panel").hidden = !hasLastfm;
  const refresh = () => {
    if (hasDiscord) loadPresence(presence);
    if (hasLastfm) loadRecent(recent);
  };
  refresh();
  setInterval(refresh, PRESENCE_REFRESH_MS);
}

initPresence();
