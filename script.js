const button = document.getElementById("listenBtn");

button.addEventListener("click", () => {
  alert("🎵 Bem-vindo ao BeatFlow Music!");
});<div class="player">
  <h3>Player</h3>

  <select id="playlist">
    <option value="musicas/musica1.mp3">Neon Night</option>
    <option value="musicas/musica2.mp3">Electric Dreams</option>
    <option value="musicas/musica3.mp3">Midnight Waves</option>
  </select>

  <br><br>

  <button id="play">▶ Play</button>
  <button id="pause">⏸ Pause</button>

  <audio id="audio"></audio>
</div>const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");

playlist.addEventListener("change", () => {
  audio.src = playlist.value;
  audio.play();
});

document.getElementById("play").onclick = () => {
  if (!audio.src) {
    audio.src = playlist.value;
  }
  audio.play();
};

document.getElementById("pause").onclick = () => {
  audio.pause();
};