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
methodMahasiswa = {
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
let Raka = Mahasiswa("Raka", 20);

// 3. constructor Function
// disarankan banget
// simple tidak usah mendeklarasikan lagi variabelnya
// cukup diganti dengan this
// WAJIB PAKE NEW UNTUK MANGGILNYA, KARENA KALAU TIDAK PAKAI NEW MAKA JAVASCRIPTNYA NYANGKANYA KITA MAU INSTANSIASI FUNCTION DECLARATION

/* function Mahasiswa(nama, energi) {
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
let Raka = new Mahasiswa('Raka', 20); */

// 4. Object.create
