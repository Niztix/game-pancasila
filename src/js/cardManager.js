let currentCards = [];

/**
 * Menyiapkan kartu berdasarkan data nilai Pancasila.
 * @param {Array} pancasilaData - Data nilai Pancasila dan perilaku.
 */
export function setupCards(pancasilaData) {
  currentCards = [];

  // Siapkan kartu dari data
  pancasilaData.forEach((item) => {
    item.perilaku.forEach((perilaku) => {
      currentCards.push({
        id: item.id,
        text: perilaku.text,
        image: perilaku.image, // Path gambar
      });
    });
  });

  // Acak kartu
  shuffleCards(currentCards);
}

/**
 * Mengacak urutan kartu.
 * @param {Array} cards - Array kartu.
 */
function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

/**
 * Menampilkan kartu berikutnya.
 */
export function renderNextCard() {
  const cardContainer = document.getElementById("card-container");

  // Cek apakah sudah ada kartu yang belum diproses
  if (cardContainer.querySelector(".card")) return;

  if (currentCards.length > 0) {
    const nextCard = currentCards.shift();

    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = nextCard.id;
    card.draggable = true; // Properti draggable untuk seluruh kartu

    // Event drag pada seluruh kartu
    card.addEventListener("dragstart", (event) => {
      card.classList.add("dragging");
      event.dataTransfer.setData("text/plain", card.dataset.id); // Kirim data ID kartu
    });

    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
    });

    // Gambar kartu
    const img = document.createElement("img");
    img.src = nextCard.image; // Pastikan ini berisi path gambar yang benar
    img.alt = nextCard.text;

    // Teks kartu
    const text = document.createElement("span");
    text.textContent = nextCard.text;

    card.appendChild(img);
    card.appendChild(text);

    cardContainer.appendChild(card);
  }
}
