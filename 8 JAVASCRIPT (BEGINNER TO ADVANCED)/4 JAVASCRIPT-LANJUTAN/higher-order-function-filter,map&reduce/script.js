// Higher order function adalah function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai return value - https://eloquentjavascript.net

// karena dalam javascript sebuah function itu disebut dengan first class function
// inti dari javascript itu adalah sebuah function

// javascript memperlakukan function sebagai object - sitepoint.com

// nah kan object itu merupakan value sama seperti integer atau string misalnya, nah maka function juga bisa kita simpan sebagai argumen maupun return value dari sebuah function yang lain

// nah ini kan kita udah coba di closure

/* --------------------------------------------------- */
// nah ini contoh pendekatan supaya ngerti
// nama function kerjakanTugas yang menerima   arguments yaitu matakuliah dan selesai. matakuliah disimpan sebagai string, nah nanti kita sediakan sebagai parameter ketika functionnnya dipanggil. Lalu argumen kedua adalah selesai yang merupakan function, isi functionnya sesuai selera diconsole.log..... setelahh console.log dijalankan kita panggil function selesainya
/* function kerjakanTugas(matakuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
    selesai();
} */
// nah jadi di luar function kerjakanTugas ini kita harusnya punya sebuah function lagi
// seperti ini
/* function selesai() {
    alert('Selesai mengerjakan tugas!');
} */
// nah bisa dilihat, kita menggunakan function sebagai argument

// ini ketika kita memanggilnya:
/* kerjakanTugas(`Pemrograman Web`, selesai); */

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
/* setTimeout(function () {
    console.log(`Hello World!`);
}, 1000); */

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
/* function ucapkanSalam(waktu) {
    return function (nama) {
        return `Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`;
    }
}

let selamatMalam = ucapkanSalam(`Malam!`);

console.dir(selamatMalam(`Rendi`)); */

/* --------------------------------------------------- */
// kenapa kita harus menggunakan higher order function
/* 
1. untuk abstraksi : agar kode yang kita buat itu bisa lebih sederhana, karena ketika kita mengguanakan function itu artinya kita menyembunyikan kerumitan
(- eloquuentjavascript.net mengatakan : "Semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan programmernya")
(- C.A.R. Hoare, 1980 ACM Turing Award Lecture mengatakan: "Ada dua cara untuk merancang sebuah software: cara pertama adalah untuk membuat programnya sesederhana mungkin sehingga jelas-jelas tidak ada kekurangannya, dan cara lainnya adalah untuk membuat programnya se-kompleks mungkin sehingga tidak ada kekurngan yang jelas")

*/

// nah ini kita punya program sederhana seperti ini
/* let total = 0,
    count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total); */


/* VS */

// function
// lebih enak menggunakan function

/* --------------------------------------------------- */

// nah ini misalnya kita punya looping :
/* for (let i = 0; i < 10; i++) {
    console.log(i + 1);
} */
// keliatannya simple, tapi gimana kalo kita ingin loopingnya gak 10x tapi 100x atau 1000x, nah berarti kita harus mengubah angka 10 itu ya.
// jadinya tidak dinamis

// nah enak menggunakan function jadinya
/* function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i + 1);
    }
} */
// nah jadi kita nulis fornya cuma sekali, kita ganti angka 10 dengan variabel n, yang menjadi argumen dari function repeatLog, sehingga ketika kita mau mengulang sebanyak apapun, kita tinggal panggil repeatLog dan kasih parameternya mau berapa.
/* repeatLog(10); */

// nah ini kita bisa ubah menjadi lebih efektif lagi
// gimana kalau aksi yang dilakukan itu bukan console.log tapi kita punya aksi yang lain, misalnya kita mau kasih tampil mengggunakan alert

// kita bisa bikin jadi seperti ini
// jadi parameter keduanya merupakan sebuah function
/* function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i + 1);
    }
}
 */
/* repeat(12, console.log);
repeat(100, alert); */

// jadi kasus ini bisa lebih efektif dengan menggunakan higher order function

// ALASAN YANG LAIN ADALAH KETIKA KITA MEMBUAT SESUATU SEMUANYA KE DALAM FUNCTION, MAKA ITU KITA MASUK KESEBUAH PENDEKATAN YANG NAMANYA : FUNCTIONAL PROGRAMMING

/* --------------------------------------------------- */

// CONTOH HIGHER ORDER FUNCTION YANG SERING DIGUNAKAN
// TERUTAMA UNTUK PENGELOLAAN ARRAY
// - Array.prototype.map()
// - Arrray.prototype.filter()
// - Array.prototype.reduce()

// kita punya beberapa bahan makanan untuk membuat sandwich dan hotdog
// jika bahan makanan kita masukkan ke dalam array dan array ini kita masukkan ke dalam higher order function dengan Arrray.prototype.filter(), maka dia akan memfilter mana diantara bahan2 makanan ini yang merupakan sayur, maka array filter ini akan menghasilkan sebuah array baru, hasil dari filternya
// jadi di Array yang baru bahan makanan yang bukan sayur itu tidak akan masuk ke dalam filter sayurnya(ya karena dia bukan sayur)

// nah dengan bahan makanan yang sama kita akan menjalankan Array.prototype.map(), nah dengan kita menggunakan map itu artinya kita akan petakan setiap elemen arraynya kedalam sebuah function sendiri
// nah untuk kasus ini setiap elemen yang ada didalam bahan makanan akan kita lakukan potong, jadi dengan memberikan callback function di dalam mapnya nanti adalah potong maka semua elemennya ketika masuk ke dalam higher order function ini akan menghasilkan array baru berupa bahan makanan yang telah terpotong.
// sebetulnya ilustrasi di dunia nyatanya itu pada saat kita potong kan tidak menghasilkan bahan makanan baru kan ya. Bahan makanan sebelumnya itu jadi terpotong harusnya. Nah lebih tepatnay sebetulnya ini kita ilustrasikan sebagai forEach itu ya, karena map dan forEach itu mirip bedanya kalau forEach itu tidak menghasilkan array baru, TAPI KALAU MAP ITU MENGHASILKAN ARRAY BARU, NAH KALAU MAP ITU BAHAN MAKANAN SEBELUMNYA ITU MASIH ADA.

// NAH JADI BEGINI LAH YA, JADI KITA KASIH SETIAP ELEMEN PADA ARRAYNYA FUNCTION YANG SAMA, SEMUA DIPOTONG. NAH HASIL DARI FUNCTION MAP INI BISA KITA KASIH FUNCTION HIGHER ORDER BERIKUTNYA YAITU
// Array.prototype.reduce()
// NAH KALAU REDUCE KITA BISA MENGGABUNGKAN KE SEMUA BAHAN MAKANAN INI UNTUK MENJADI SATU SANDWICH/HOTDOG YANG UTUH

// NAH ITULAH ILUSTRASINYA DARI MAP DAN REDUCE
// REDUCE PUN SAMA DIA MENGHASILKAN ARRAY YANG BARU

// KERENNYA :
// KETIGA HIGHER ORDER FUNCTION INI KITA BISA GABUNGKAN MENGGUNAKAN METHOD CHAINING


/* -------------------------------------------------- */

// IMPLEMENTASINYA
// nah kita sudah punya sebuah array dengan 10 angka random
// mencari angka >= 3
/* const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// nah ini menggunakan looping
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) {
        newAngka.push(angka[i]);
    }
}

console.log(newAngka); */

// nah kita coba bandingkan dengan filter
// mencari angka >= 3
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = angka.filter((a) => a >= 3);

// console.log(newAngka);

/* -------------------------------------------------- */
// nah ini coba deh kita coba satu-satu

// pertama kita buat dulu array untuk akses filter dll
/* const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
 */
// menggunakan filter
// ini kasusnya kita mencari angka >= 5
/* const newAngka = angka.filter(a => a >= 5);
console.log(newAngka); */


// mengguankan map : artinya untuk memetakan tiap2 elemen yang ada di dalam arraynya menggunakan fungsi yang baru
// ini kasusnya misal kita mau kalikan semua angka dengan 2
/* const newAngka = angka.map(a => a * 2); */
// artinya diatas adalah telusuri semua elemen angka dan ketika sudah tiap-tiap elemennya kalikan 2
// fungsinya bisa macem2 bukan hanya kali
/* console.log(newAngka); */
// maka nanti akan ada array baru yang isinya 2 kali array angka

// dan ini tidak mengubah isi array angkanya
// kalau tidak percaya kita console.log 
/* console.log(angka); */
// tuh kan hahaha


// menggunakan reduce : untuk melakukan sesatu elemen pada array
// misal array diatas kita jumlahkan seluruh elemen pada array
// reduce berbeda, dia butuh 2 argumen
// jadi harus ada kurung dong untuk membungkusnya
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
/* HARUS DIPERHATIKAN */
// SECARA DEFAULT ADA SEBUAH NILAI 0
// JADI SEBENARNYA ADA NILAINYA :
// accumulator + currentValue, 0
// kalau tidak dituliskan dia akan default 0
// tapi kalau dituliskan dia akan menjumlahkan sesuai yang anda kasih (atau dia akan jumlahin lagi)
// coba aja kalau ga percaya ubahh angkanya
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(newAngka);

/* -------------------------------------------------- */

// NAH INI MENARIK NIH
// JADI KITA BISA MENGGABUNGKAN FUNGSI-FUNGSI PADA HIGHER ORDER FUNCTION INI DALAM SATU KALI EKSEKUSI, TIDAK PERLU DISIMPAN KEDALAM VARIABEL DULU

// NAH INI DIA METHOD CHAINING
// METHOD BERANTAI NIH

// oke, studi kasusnya gini
// jadi kita nyari angka > 5
// terus kita kalikan 3
// terus kita jumlahkan

// buat dulu array unntuk akses dan diapakan nantinya
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// lalu kita buat untuk langsung sekali 3
// chainingnya dengan titik (.)
const hasil = angka.filter(a => a > 5) // 8, 9, 9
    .map(a => a * 3) // 24, 27, 27
    .reduce((acc, curVal) => acc + curVal, 0);
//  hasilnya menambahkan 0 + 24 + 27 + 27
console.log(hasil);
// BISA DITULIS BERULANG-ULANG
// MAU DITAMBAH FILTER LAGI, MAP LAGI BISA AJA