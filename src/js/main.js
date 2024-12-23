import "../css/styles.css";
import pancasilaData from "./data.js";
import { createDropzones } from "./gameBoard.js";
import { setupCards, renderNextCard } from "./cardManager.js";
import { calculateScore } from "./score.js";
import { showModal } from "./modal.js";

function initGame() {
  createDropzones(pancasilaData, renderNextCard, () => {
    const score = calculateScore(pancasilaData);
    showModal(score);
  });
  setupCards(pancasilaData);
  renderNextCard(); // Hanya panggil saat game dimulai
}

document.getElementById("app").innerHTML = `
  <h1>Game Pencocokan Nilai Pancasila</h1>
  <div id="card-container" class="card-container"></div>
  <div id="game-board" class="game-board"></div>
  <div id="score"></div>
`;

initGame();
