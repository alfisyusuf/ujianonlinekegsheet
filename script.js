// Data siswa
const siswaData = [
  { username: "siswa1", password: "password1", nama: "Siswa Pertama" },
  { username: "siswa2", password: "password2", nama: "Siswa Kedua" },
];

// Memperoleh elemen HTML yang diperlukan
const loginForm = document.getElementById("login-form");
const quizContainer = document.querySelector(".quiz-container");
const namaSiswa = document.getElementById("nama-siswa");
const mulaiUjianButton = document.getElementById("mulai-ujian");
const soalContainer = document.getElementById("soal-container");

// Sembunyikan elemen soal-soal setelah halaman dimuat
soalContainer.style.display = "none";

// Menangani login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  const siswa = siswaData.find(
    (siswa) =>
      siswa.username === usernameInput && siswa.password === passwordInput
  );

  if (siswa) {
    // Jika login berhasil, sembunyikan login-container
    const loginContainer = document.querySelector(".login-container");
    loginContainer.style.display = "none"; // Menyembunyikan elemen login-container
    
    // Tampilkan pesan selamat datang dan tombol "Mulai Ujian"
    quizContainer.style.display = "block";
    namaSiswa.textContent = `${siswa.nama}!`;

    // Set nilai input nama-siswa yang tersembunyi
    const inputNamaSiswa = document.getElementById("nama-siswa-input");
    inputNamaSiswa.value = siswa.nama;
    
    // Menambahkan event listener untuk tombol "Mulai Ujian"
    mulaiUjianButton.addEventListener("click", function () {
      // Menampilkan soal-soal
      soalContainer.style.display = "block";

      // Menghilangkan tombol "Mulai Ujian"
      mulaiUjianButton.style.display = "none";

      // Menghilangkan tulisan "Ujian Online" dan paragraf di bawahnya
      const judulUjian = document.querySelector(".quiz-container h1");
      const pesanSelamatDatang = document.querySelector(".quiz-container p");
      judulUjian.style.display = "none";
      pesanSelamatDatang.style.display = "none";
    });
  } else {
    alert("Username atau password salah.");
  }
});
