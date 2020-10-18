// cara untuk membuat Object pada javascript
// 1. object Literal
// ini paling simple, tapi
// object ini disarankan dipakai jika objectnya hanya 1 saja
/* let mahasiswa = {
    nama: `Rendi`,
    energi: 10,
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`)
    }
} */

// 2. function Declaration
// disarankan jika lebih dari 2 dst..
// kita harus menuliskan let dan harus mengembalikan nilainya (return)
// method Object.create harus punya object yang diacu

// dalam hal ini kita akan membuat objectnya : Mahasiswa
/* methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  },
};

// dan disini kita buat Object.createnya
// otomatis kode diatas akan terpanggil
function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let Rendi = Mahasiswa("Rendi", 10);
let Raka = Mahasiswa("Raka", 20); */

// 3. constructor Function
// disarankan banget
// simple tidak usah mendeklarasikan lagi variabelnya
// cukup diganti dengan this
// WAJIB PAKE NEW UNTUK MANGGILNYA, KARENA KALAU TIDAK PAKAI NEW MAKA JAVASCRIPTNYA NYANGKANYA KITA MAU INSTANSIASI FUNCTION DECLARATION

// constructor ini secara default memiliki parent namanya prototype
// mudahnya, kita tidak perlu lagi bikin object baru atau object lain yang dijadikan sebagai parent
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

}

// nah dengan itu kita cukup memanfaatkan prototypenya tadi, jadi kalau misalkan kita mau bikin method
// kita cukup tulis gini
Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamat main!`;
}

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamat tidur!`;
}

let Rendi = new Mahasiswa('Rendi', 10);
let Raka = new Mahasiswa('Raka', 20);


// NAH INI MENGGUNAKAN CLASS
// diatas make prototype
// ini kita coba make kelas
// cuma kita harus bener2 paham yang prototype, meskipun kita bisa kelas dan lebih simple
// ya karena class pun dia itu make yang dibelakang layar yang dijalanin ya prototype
// jadi kelas disini ya sampul aja, yang dijalankan?
// ya tetap prototype bos
// sejatinya:
// disini kita menggunakan logika prototype
// jadi harus tahu prototype titik gapake koma

// oke lanjut aja
// nih yang versi class
/* class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;

  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat main!`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
  }
}

let Rendi = new Mahasiswa('Rendi', 10);
let Raka = new Mahasiswa('Raka', 20); */


// nah gini aja deh kenapa harus tahu prototype
// kita buat array deh
/* let angka = []; */
// nah ini kan kita buat array nih
// tapi sebetulnya dibelakang layar tuh ini yg dijalanin:
/* let angka = new Array(); */
// sehingga sebenernya kan ujung2nya constructor juga, nah array tuh sebuah object yang pasti membawa prototype

// jadi anggap aja gini, di dalam javascriptnya tuh ada function yang namanya array
/* function Array() {
  let this = Object.create(Array.prototype);
} */
// maka sebenernya dia merupakan prototype dari object array

// cek aja apa gitu
// misal array
// coba console.log aja, inspect terus tulis :
// Array.prototype
// atau object
// Object.prototype


// 4. Object.create