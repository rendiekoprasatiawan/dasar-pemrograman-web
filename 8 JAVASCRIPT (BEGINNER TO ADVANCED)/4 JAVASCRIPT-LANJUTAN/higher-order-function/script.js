// Higher order function adalah function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai return value - https://eloquentjavascript.net

// karena dalam javascript sebuah function itu disebut dengan first class function
// inti dari javascript itu adalah sebuah function

// javascript memperlakukan function sebagai object - sitepoint.com

// nah kan object itu merupakan value sama seperti integer atau string misalnya, nah maka function juga bisa kita simpan sebagai argumen maupun return value dari sebuah function yang lain

// nah ini kan kita udah coba di closure

/* --------------------------------------------------- */
// nah ini contoh pendekatan supaya ngerti
// nama function kerjakanTugas yang menerima 2 arguments yaitu matakuliah dan selesai. matakuliah disimpan sebagai string, nah nanti kita sediakan sebagai parameter ketika functionnnya dipanggil. Lalu argumen kedua adalah selesai yang merupakan function, isi functionnya sesuai selera diconsole.log..... setelahh console.log dijalankan kita panggil function selesainya
function kerjakanTugas(matakuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
    selesai();
}
// nah jadi di luar function kerjakanTugas ini kita harusnya punya sebuah function lagi
// seperti ini
function selesai() {
    alert('Selesai mengerjakan tugas!');
}
// nah bisa dilihat, kita menggunakan function sebagai argument

// ini ketika kita memanggilnya:
kerjakanTugas(`Pemrograman Web`, selesai);

// nah ini hanya contoh saja bahwa ketika kita menggunakan function kita bisa meyimpan function lagi sebagai argumennya

/*
nah pada akhirnya kesimoulannya:
1. function kerjakan tugas ini disebut higher order function, karena

2. dan selesai function sebagai argumen itu disebut dengan callback

- function yang kita simpan sebagai argumen kita sebut callback, sedangkan
- function yang memiliki argumen callback sebagai argumennya disebut higher order function
*/

/* --------------------------------------------------- */
// nah contoh lain
// menggunakan set interval atau timeout
// nah set interval atau set timeout ini memiliki parameter, parameter pertama adalah function, parameter keduanya adalah integer untuk menyimpan milisecond
// nah function kita sebut dengan callback
// dan setTimeout kita sebut sebagai higher order function
setTimeout(function () {
    console.log(`Hello World!`);
}, 1000);

/* --------------------------------------------------- */
// contoh lain lagi
/* const tombol = document.querySelector('.submit');
// nah ini bisa kita anggap higher order function
tombol.addEventListener('click', function () {
    console.log('tombol ditekan!');
}); */

/* --------------------------------------------------- */
// contoh lainnya adalah ketika kita punya sebuah function yang return valuenya adalah function lagi
// function ucapkanSalam -> higher order function
// karena ucapkanSalam memiliki return value yang juga function
function ucapkanSalam(waktu) {
    return function (nama) {
        return `Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`;
    }
}

let selamatMalam = ucapkanSalam(`Malam!`);

console.dir(selamatMalam(`Rendi`));

/* --------------------------------------------------- */
// kenapa kita harus menggunakan higher order function
/* 
1. untuk abstraksi : agar kode yang kita buat itu bisa lebih sederhana, karena ketika kita mengguanakan function itu artinya kita menyembunyikan kerumitan
(- eloquuentjavascript.net mengatakan : "Semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan programmernya")
(- C.A.R. Hoare, 1980 ACM Turing Award Lecture mengatakan: "Ada dua cara untuk merancang sebuah software: cara pertama adalah untuk membuat programnya sesederhana mungkin sehingga jelas-jelas tidak ada kekurangannya, dan cara lainnya adalah untuk membuat programnya se-kompleks mungkin sehingga tidak ada kekurngan yang jelas")

*/

// nah ini kita punya program sederhana seperti ini
let total = 0,
    count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);


/* VS */

// function
// lebih enak menggunakan function

/* --------------------------------------------------- */

// nah ini misalnya kita punya looping :
for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}
// keliatannya simple, tapi gimana kalo kita ingin loopingnya gak 10x tapi 100x atau 1000x, nah berarti kita harus mengubah angka 10 itu ya.
// jadinya tidak dinamis

// nah enak menggunakan function jadinya
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i + 1);
    }
}
// nah jadi kita nulis fornya cuma sekali, kita ganti angka 10 dengan variabel n, yang menjadi argumen dari function repeatLog, sehingga ketika kita mau mengulang sebanyak apapun, kita tinggal panggil repeatLog dan kasih parameternya mau berapa.
repeatLog(10);

// nah ini kita bisa ubah menjadi lebih efektif lagi
// gimana kalau aksi yang dilakukan itu bukan console.log tapi kita punya aksi yang lain, misalnya kita mau kasih tampil mengggunakan alert

// kita bisa bikin jadi seperti ini
// jadi parameter keduanya merupakan sebuah function
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i + 1);
    }
}

repeat(12, console.log);
repeat(100, alert);

// jadi kasus ini bisa lebih efektif dengan menggunakan higher order function

// ALASAN YANG LAIN ADALAH KETIKA KITA MEMBUAT SESUATU SEMUANYA KE DALAM FUNCTION, MAKA ITU KITA MASUK KESEBUAH PENDEKATAN YANG NAMANYA : FUNCTIONAL PROGRAMMING

/* --------------------------------------------------- */

// CONTOH HIGHER ORDER FUNCTION YANG SERING DIGUNAKAN
// TERUTAMA UNTUK PENGELOLAAN ARRAY
// - Array.prototype.map()
// - Arrray.protype.filter()
// - Array.prototype.reduce()