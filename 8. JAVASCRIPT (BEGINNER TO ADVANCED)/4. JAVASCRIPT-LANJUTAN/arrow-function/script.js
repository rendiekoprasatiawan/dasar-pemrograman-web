// Arrow function adalah bentuk lain yang lebih ringkas dari function expression -MDN

/* --------------------------------------------------- */
// misal kita tadinya kita make function expression seperti ini

/* const tampilNama = function (nama) {
    return `Halo ${nama}`
}

console.log(tampilNama(`Rendi`));
 */

// nah kalo mau kita ringkas, berubah menjadi seperti ini
// kalau parameternya satu (dalam hal ini nama), kalian bisa tidak dibungkus dengan kurung
// bahhkan kalau isinya hanya return saja, kalian tidak perlu tulis return
// dan bahkan jika cuma satu kalian juga tidak perlu kurung kurawalnya
/* const tampilNama = nama => `Halo ${nama}`;

console.log(tampilNama(`Rendi`)); */

// nah tapi kalau parameter arrow function ada dua, harus menggunakan kurung
// jadinya seperti ini
/* const tampilNama = (nama, waktu) => `Halo ${nama}, selamat ${waktu}`;

console.log(tampilNama(`Rendi`, `malam`)); */

// nah kalau tidak ada returnnya berarti namannya implicit return

// NAH KALAU INI
// KALAU KALIAN TIDAK ADA PARAMETERNYA KALIAN WAJIB MENULISKAN KURUNG BUKA DAN KURUNG TUTUPNYA
// TAPI INI LEBIH RINGKAS LAGI MALAH KELIHATANNYA
/* const tampilPesan = () => `Hello World!`
console.log(tampilPesan());
 */
// NAH ITULAH CARA BERAGAM MEMBUAT ARROW FUNCTION
// TAPI PADA KENYATAANYA KALIAN TIDAK AKAN MEMBUAT FUNGSI YANG SEDERHANA SEPERTI DIATAS

/* --------------------------------------------------- */

// NAH INI ADALAH CARA LAIN YANG MUNGKIN SERING DIGUNAKAN PADA KENYATAAN DALAM MEMBUAT ARROW FUNCTION

// nah ini kita ingin memetakan sebuah function kedalam array misalnya
let mahasiswa = [`Rendi Eko P`, `Raka Akbar H`, `Erik`];
// nah ceritanya kita ingin menghitung jumlah huruf dari masing-masing mahasiswa, lalu nanti jumlah hurufnya disimpan ke dalam array lagi baru ditampilkan kedalam console

// kalau kita lakukan dengan function biasa, akan menjadi
/* let jumlahHuruf = mahasiswa.map(function (nama) {
    return nama.length
});
console.log(jumlahHuruf); */

// nah sekarang ketika kita menggunakan arrow function
/* let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf); */

// nah kalau misalnya kita ingin mengembalikannya dalam bentuk object bukan array lagi
// maka untuk mereturn object kita bisa kasih kurung kurawal kan yaa, tapi kita harus bungkus dulu pakai kurung buka dan kurung tutup, lalu kurung kurawal akan dianggap object. lalu bisa dibuat objectnya
// biar tidak dianggap kita ingin melakukan return oleh javascript
// kodenya gini
let jumlahHuruf = mahasiswa.map(nama => ({
    nama: nama,
    jmlHuruf: nama.length
}));
console.table(jumlahHuruf); /* ini untuk lebih rapi */