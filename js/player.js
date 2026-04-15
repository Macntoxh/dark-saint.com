const audio = document.getElementById("audioPlayer");
const nowPlaying = document.getElementById("nowPlaying");

let currentTrack = 0;

function loadTrack(index) {
  currentTrack = index;
  audio.src = tracks[index].file;
  nowPlaying.innerText = tracks[index].title;
  audio.play();
}

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
}

const audio = document.getElementById("audioPlayer");
const nowPlaying = document.getElementById("nowPlaying");

let currentTrack = 0;

// LOAD TRACK
function loadTrack(index) {
  currentTrack = index;
  audio.src = tracks[index].file;
  nowPlaying.innerText = tracks[index].title;
  audio.play();
}

// PLAY / PAUSE
function playPause() {
  if (!audio.src) return;

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// NEXT
function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
}

// PREVIOUS
function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
}