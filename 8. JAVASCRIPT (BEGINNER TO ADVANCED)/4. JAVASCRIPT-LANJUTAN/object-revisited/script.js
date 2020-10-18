// cara untuk membuat Object pada javascript
// 1. object Literal
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
/* function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    mahasiswa.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    }

    return mahasiswa;
} 

let Rendi = mahasiswa('Rendi', 10);
let Raka = mahasiswa('Raka', 20);
*/

// disarankan banget
// simple tidak usah mendeklarasikan lagi variabelnya
// cukup diganti dengan this
// WAJIB PAKE NEW UNTUK MANGGILNYA, KARENA KALAU TIDAK PAKAI NEW MAKA JAVASCRIPTNYA NYANGKANYA KITA MAU INSTANSIASI FUNCTION DECLARATION
// 3. constructor Function
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    }
}

let Rendi = new Mahasiswa('Rendi', 10);
let Raka = new Mahasiswa('Raka', 20);


// 4. Object.create 