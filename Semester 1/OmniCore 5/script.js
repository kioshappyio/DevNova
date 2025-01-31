// Memanggil elemen body
let body = document.body;
// untuk membuat limit klik mode
// kita gunakan constanta untuk nilai default yang tidak dapat di manipulasi nilainya
let info = document.getElementById('info'); //memanggil id dalam html yang bernama info, dalam format paragraf <p>
let mode = document.getElementById('mode'); //memanggil id dalam html yang bernama mode, untuk memanipulasi button MODE
let home = document.getElementById('home'); //memanggil id dalam html yang bernama home, untuk memanipulasi button HOME


const darkLimit = 5; //nilai default const
// kita gunakan let untuk memanipulasi     data dalam darkLimit
let darkCounter = 0; //nilai yang bisa di manipulasi melalui function darkMode()
let darkRemainingLeft; //untuk memvalidasi sisa limit 

function darkMode() { //function
  if (darkRemainingLeft == 1) {
    info.textContent = "💥 FITUR DARK MODE TELAH HABIS 💥";//validasi untuk menghentikan function darkMode() ketika nilai dari darkLimit hanya tersisa 1
    mode.style.display = "none"; //memanipulasi button MODE pada html agar menghilang setelah limit habis
    home.textContent = "RELOAD"; //memanipulasi button HOME agar berubah menjadi RELOAD setelah limit habis
    return;
  }
  
  darkCounter += 1; //menambahkan nilai di darkCounter melalui klik user di web
  darkRemainingLeft = darkLimit - darkCounter; //validasi untuk mengurangi jumblah nilai default dari darkLimit
  
  //memanipulasi isi konten html dalam format paragraf
  info.textContent = `dark mode dipakai ${darkCounter}x, tersisa ${darkRemainingLeft}`;
 
  
  body.classList.toggle('dark'); //memanggil style class dark yang mengubah tampilan website manjadi dark mode
}

function reRender() {
  location.reload();// function yang di fungsikan untuk mereload website
}