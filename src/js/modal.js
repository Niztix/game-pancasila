export function showModal(score) {
  const modal = document.createElement("div");
  modal.className = "modal";

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const content = document.createElement("div");
  content.className = "modal-content";
  content.innerHTML = `
      <h2>Game Selesai</h2>
      <p>Skor Anda: ${score}</p>
      <button id="restart-button">Main Lagi</button>
    `;

  overlay.addEventListener("click", () => {
    modal.remove();
  });

  const restartButton = content.querySelector("#restart-button");
  restartButton.addEventListener("click", () => {
    modal.remove();
    window.location.reload();
  });

  modal.appendChild(overlay);
  modal.appendChild(content);
  document.body.appendChild(modal);
}
