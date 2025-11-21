// Data calon tetap
const candidates = [
  {
    id: "pair_1",
    number: 1,
    ketua: "Ahmad Rizki",
    wakil: "Siti Nurhaliza",
    visi: "Membangun OSIS yang aktif dan kreatif"
  },
  {
    id: "pair_2",
    number: 2,
    ketua: "Budi Santoso",
    wakil: "Dewi Lestari",
    visi: "OSIS peduli dan berprestasi"
  },
  {
    id: "pair_3",
    number: 3,
    ketua: "Rina Permata",
    wakil: "Andi Wijaya",
    visi: "Inovasi untuk kemajuan bersama"
  }
];

// Simpan hasil voting di localStorage
function saveVote(vote) {
  let votes = JSON.parse(localStorage.getItem("votes") || "[]");
  votes.push(vote);
  localStorage.setItem("votes", JSON.stringify(votes));
}

// Hitung suara per pasangan
function countVotes(pairId) {
  let votes = JSON.parse(localStorage.getItem("votes") || "[]");
  return votes.filter(v => v.pair === pairId).length;
}

// Total suara
function totalVotes() {
  let votes = JSON.parse(localStorage.getItem("votes") || "[]");
  return votes.length;
}

// Notifikasi Toast
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className =
    "toast " + (type === "success" ? "bg-green-500" : "bg-red-500");
  toast.style.color = "white";
  toast.textContent = message;

  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
