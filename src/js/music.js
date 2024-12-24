// Mengimpor file audio
import music from "../assets/audio/bgm2.mp3";

// Membuat objek Audio dengan file yang diimpor
const audio = new Audio(music);

document.getElementById("toggle-audio").addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    document.getElementById("toggle-audio").textContent = "Hentikan Musik";
  } else {
    audio.pause();
    document.getElementById("toggle-audio").textContent = "Putar Musik";
  }
});

// Memulai pemutaran musik
audio.play();

export default music;
