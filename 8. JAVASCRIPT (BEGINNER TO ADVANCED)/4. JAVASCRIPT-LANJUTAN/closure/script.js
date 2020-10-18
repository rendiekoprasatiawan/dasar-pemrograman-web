// closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut. ~ MDN
// closure adalah sebuah function ketika memiliki akses ke parent scopenya, meskipun parent scopenya sudah selesai di eksekusi.~ W3SCHOOL
// closure adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan. ~ Code Fellow
// Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain. ~ Techsith

/* --------------------------------------------------- */
// contoh yang meliputi semuanya
// function init() {
//     let nama = `Rendi`; /* lexical scope */
//     /* kenapa closure function dibawah? */
//     /* karena dia ngambil nama di lexical scope / dia membutuhkan lexical/ data dari luar hingga dia bisa dikatakan closure */

//     function tampilNama() {
//         console.log(nama); /* closure */
//     }
//     tampilNama();
// }
// init();

/* --------------------------------------------------- */

// jadi ini bisa untuk demo penggunaannya
// bisa bermacam2 penggunaanya yang memungkinkan untuk digunakan
/* function init() {
    // let nama = `Rendi`;
    function tampilNama(nama) {
        console.log(nama);
    }
    return tampilNama;
}
let panggilNama = init();
panggilNama('Rendi'); */

/* -------------------------------------------------- */

// kode diatas pun bisa kita ringkas lagi
// menjadi
/* function init() {
    // let nama = 'Rendi';
    return function (nama) {
        console.log(nama);
    }
}
let panggilNama = init();
panggilNama(`Rendi`); */

/* -------------------------------------------------- */
// nih kita punya contoh kasus seperti tadi
// tapi kita sekarang punya outer function juga (waktu)
function ucapkanSalam(waktu) {
    // nah function ini mengembalikan function lagi:
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}
// nah dengan itu kita bisa membuat pesannya sesuai dengan waktu
// misal kita punya sebauh variabel
// nah berarti kita membuat function hasil dari function yang lain
/* let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

// kalau mau dijalankan kita tinggal butuh parameter nama
selamatPagi('Rendi');
selamatMalam('Raka');
selamatSiang('Rika'); */

// JADI KESIMPULANNYA KITA ITU MEMBUAT FACTORY FUNCTION
// YANG MANA KITA BIKIN SEBUAH FUNCTION SESUAI DENGAN FUNCTION YANG LAIN

// NAH INI AGAR KITA BISA BUAT PRIVATE METHOD LAH

/* --------------------------------------------------- */
// nah ini contoh kasus lagi
// kita bikin sebuah program sederhana untuk menghitung sudah berapa kali sebuah tombol itu diklik
/* let counter = 0;
// nah ini kita bikin pake function expression saja
let add = function () {
    return ++counter;
} */

/* counter = 10; */
// nah karena hoisting counter yang di dalam function pun jadi terpengaruh
// dari awal sebelum kita tambah counter = 10;, masih awalnya 1
// setelah disisipkan counter = 10;, malah ngerubah semuanya
// coba deh komentarin counter = 10; kalau ingin liat awal coding kita

/* console.log(add());
console.log(add());
console.log(add()); */
// tidak ada masalah kan ya ?
// tapi kalau misal kode kita sudahh panjang terus ada baris yang mengubah counternya
// misalkan dibaris berapa kalian mengisi ulang si counternya
// coba diatas console.log nya disisipkan counter = 10;


/* NAH KITA GAK MAU ADA KEJADIAN SEPERTI ITU KAN */
// SOLUSINYA GINI

// supaya counter tidak terganggu 
// ya kita pake closure dongse
// tanda kurung didepan function dan diakhiri di kurung kurawal akhir tutup kurung, itu kita mau buat immediately invoke function
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

/* terus kita mau sisipkan counter = 100; misalnya, gaakan ngaruh */
// nih
counter = 100;
// gak ngaruh kann hehehe

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());