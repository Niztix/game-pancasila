export function calculateScore(pancasilaData) {
  let correct = 0;

  pancasilaData.forEach((item) => {
    const dropzone = document.querySelector(`.dropzone[data-id="${item.id}"]`);
    const cards = Array.from(dropzone.children);

    cards.forEach((card) => {
      if (card.dataset.id === item.id.toString()) {
        correct++;
      }
    });
  });

  const total = pancasilaData.reduce((sum, item) => sum + item.perilaku.length, 0);
  return Math.round((correct / total) * 100);
}
