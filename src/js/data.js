import doaImage from "../assets/images/doa.png";
import bantuImage from "../assets/images/bantuteman.png";
import belajardaerahImage from "../assets/images/belajardaerah.png";
import bersihImage from "../assets/images/bersih.png";
import buatmainImage from "../assets/images/buatmain.png";
import cektugasImage from "../assets/images/cektugas.png";
import hormatImage from "../assets/images/hormat.png";
import mintamaafImage from "../assets/images/mintamaaf.png";
import siaptasImage from "../assets/images/siaptas.png";
import tanyaImage from "../assets/images/tanyaguru.png";
import tugasImage from "../assets/images/tugassendiri.png";
import tulisImage from "../assets/images/tuliscerita.png";

const pancasilaData = [
  {
    id: 1,
    nilai: "Ketuhanan Yang Maha Esa",
    perilaku: [
      { text: "Berdoa sebelum makan dan tidur", image: doaImage },
      { text: "Minta maaf jika berbuat salah", image: mintamaafImage },
    ],
  },
  {
    id: 2,
    nilai: "Berkebinekaan Global",
    perilaku: [
      { text: "Hormati teman yang berbeda agama", image: hormatImage },
      { text: "Senang belajar pakaian dan tarian daerah", image: belajardaerahImage },
    ],
  },
  {
    id: 3,
    nilai: "Gotong Royong",
    perilaku: [
      { text: "Membantu teman yang kesulitan barang", image: bantuImage },
      { text: "Bersihkan kelas bersama-sama teman lain", image: bersihImage },
    ],
  },
  {
    id: 4,
    nilai: "Mandiri",
    perilaku: [
      { text: "Kerjakan tugas tanpa menunggu bantuan", image: tugasImage },
      { text: "siapkan buku dan tas sekolah sendiri", image: siaptasImage },
    ],
  },
  {
    id: 5,
    nilai: "Bernalar Kritis",
    perilaku: [
      { text: "Bertanya guru jika tidak paham pelajaran", image: tanyaImage },
      { text: "Cek tugas sebelum dikumpulkan ke guru", image: cektugasImage },
    ],
  },
  {
    id: 6,
    nilai: "Kreatif",
    perilaku: [
      { text: "Buat mainan dari barang bekas rumah", image: buatmainImage },
      { text: "Tulis cerita pendek dari ide sendiri", image: tulisImage },
    ],
  },
];

export default pancasilaData;
