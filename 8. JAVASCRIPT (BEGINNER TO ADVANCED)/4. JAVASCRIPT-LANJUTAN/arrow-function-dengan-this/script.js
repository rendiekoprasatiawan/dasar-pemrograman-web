// konteks dari this jika kita menggunakan arrow function. kita tahu ketika menggunakan function entah itu function expression atau function declaration itu di dlam function memiliki  konteks this
// nah itu jika kita mengubah sebuah function expression menjadi arrow function maka konteks thisnya itu menjadi berbeda
// arrow function tidak memiliki konsep this

// langsung aja untuk lebih jelasnya
// jika kita membuat dengan constructor function
/* const Mahasiswa = function () {
    this.nama = 'Rendi';
    this.umur = 21;
    this.sayHello = function () {
        console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`);
    }
}

const rendi = new Mahasiswa(); */

/* --------------------------------------------------- */

// gimana kalau kita ubah menjadi arrow function
// tapi ingat kita tidak bisa kita begitu saja mengubah function menjadi arrow function, tapi kalau method bisa kita ubah menjadi arrow function
// ingat apa itu method bukan?

/* const Mahasiswa = function () {
    this.nama = 'Rendi';
    this.umur = 21;
    this.sayHello = function () {
        console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`);
    }
}

const rendi = new Mahasiswa(); */
// kelihatannya tidak ada masalah ya?
// tapi mesti diketahui arrow function tidak menyimpan konsep this, makanya dia akan cari keluar ke lexical scopenya

// nah itu sebenernya bisa kita manfaatkan
// menjadi
/* const Mahasiswa = function () {
    this.umur = `Rendi`;
    this.umur = 21;
    this.sayHello = () => {
        console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`);
    }

    setInterval(() => {
        console.log(this.umur++);
    }, 500);
}

const rendi = new Mahasiswa(); */

// jadi pada intinya kita tidak bisa semena-mena mengubah ke arrow function, agar pengen keren begitu
// tapi itu tergantung pada kebutuhan

/* --------------------------------------------------- */
// nih deh coba kita latihan untuk bisa bener2 paham
// ini dunia nyatanya

// ini sudah meliputi HTML, CSS, Javascript

// kita tangkap element box
/* const box = document.querySelector('.box'); */

// kita tidak bisa menggunakan arrow function
// karena kita masih membutuhkan this
// dan tentu saja pada arrow function tdk memiliki konsep this
// so kita ga bisa mengubah menjadi arrow function
/* box.addEventListener('click', function () {
    this.classList.toggle('size'); */

// nah dibawah ini bisa pake arrow function
// karena memang kita harus mengambil ke global
// makanya harus make arrow function jalan tercepatnya
/*     setTimeout(() => {
        this.classList.toggle('caption')
    }, 500); */

// nah tapi ada problem, pertama kita ngeklik toggle kan animasi size masuk tuh, terus 500 detik kemudian animasi caption masuk juga tuh
// tapi pas dia kita klik toggle sekali lagi kan dia hilang tuh, cuma hilangnya itu size duluan terus caption ngikut, kita maunya caption dulu baru size yang terhapus animasinya
/* caranya make : 

diawal kita harus buat ini, sebelum function
buat sebuah variabel semuanya
let satu = 'size';
let dua = 'caption';

nah ini dia akan nuker isinya tuh
if (this.classList.contains(satu)){
[satu, dua] = [dua, satu];
} */
/* }); */

/* --------------------------------------------------- */
// nah kodingannya jadi seperti ini
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    // diawal kita harus buat ini
    // buat variabel untuk semuanya
    let satu = 'size';
    let dua = 'caption';
    // kita cek dan maka:
    if (this.classList.contains(satu)) {
        // nah ini dia akan nuker isinya tuh
        [satu, dua] = [dua, satu];
    }
    // ini diubah ke variabel -> isinya (satu)
    this.classList.toggle(satu);
    setTimeout(() => {
        // ini diubah ke variabel -> isinya (dua)
        this.classList.toggle(dua)
    }, 500);
});