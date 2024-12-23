export function createDropzones(pancasilaData, onDropCallback, onGameComplete) {
  const gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = "";

  pancasilaData.forEach((item) => {
    const dropzone = document.createElement("div");
    dropzone.className = "dropzone";
    dropzone.dataset.id = item.id;
    dropzone.textContent = item.nilai;

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("over");
    });

    dropzone.addEventListener("dragleave", () => dropzone.classList.remove("over"));

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("over");

      const draggedCard = document.querySelector(".card.dragging");

      // Cek apakah dropzone sudah penuh
      if (draggedCard && dropzone.children.length < 2) {
        // Pindahkan kartu ke dropzone
        const img = draggedCard.querySelector("img");
        if (img) img.remove(); // Hanya tampilkan teks
        dropzone.appendChild(draggedCard);

        onDropCallback();

        // Periksa apakah game selesai
        const isComplete = Array.from(document.querySelectorAll(".dropzone")).every((zone) => zone.children.length === 2);
        if (isComplete) onGameComplete();
      }
    });

    gameBoard.appendChild(dropzone);
  });
}
