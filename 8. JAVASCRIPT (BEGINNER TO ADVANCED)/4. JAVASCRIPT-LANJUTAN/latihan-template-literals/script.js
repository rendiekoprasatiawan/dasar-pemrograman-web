/* HAL YANG PERLU DIINGAT */
// 1. Harus menggunakan back tick
// 2. bisa melakukan Multi-line String
// 3. bisa melakukan Embedded Expression
// 4. bisa membuat HTML Fragments
// 5. bisa membuat Expression Interpolation
// 6. Bisa membuat tagged template

/* --------------------------------------------------- */

// dasar dulu aja deh
// menggunakan back tick
/* console.log(`Halo nama saya rendi eko prasatiawan!`);

// bisa melakukan Multi-line String
console.log(`Hai saya Rendi
Umur saya 21 tahun
saya kuliah di Universitas Lampung`);

// bisa melakukan embedded expression
// buat variable dulu
const bljr = {
  nama: `Rendi`,
  umur: 21,
  npm: `1657051005`,
};

console.log(`Halo nama saya ${bljr.nama}
Umur saya ${bljr.umur} tahun
NPM saya ${bljr.npm}`); */

// menggunakan HTML Fragments
// 1. general
/* const mhs = {
    nama: `Rendi Eko Prasatiawan`,
    umur: 21,
    npm: `1657051005`,
    email: `rendieko123@rendi.com`
}

const el = `<div class=`mhs`>
<h2>${mhs.nama}</h2>
<span class=`npm`>${mhs.npm}</span>
</div>` 

// tampil kedalam DOM
document.body.innerHTML = el;
*/

// 2. looping nih (Khusus)
/* const mhs = [{
    nama: `Rendi Eko Prasatiawan`,
    email: `rendieko123@rendi.com`,
  },
  {
    nama: `Raka Akbar Hartolo`,
    email: `rakaakbar123@raka.com`,
  },
  {
    nama: `Doddy`,
    email: `doddy123@doddy.com`,
  },
];
 */
// kita harus tahu bahwa itu map adalah expression juga
// itemnya dianggap sebagai (m)
// lalu returnnya template literals lagi (``)
// karena dia bentuknya array makanya sebelum dikasih .join dia akan ada tanda koma
// dan tentu saja .join disini untuk menggabungkan dan akhirnya komanya hilang
/* const el = `<div class=`
mhs `>${mhs
  .map(
    (m) => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
    </ul>`
  )
  .join(``)}
</div>`;

document.body.innerHTML = el; */

// 3. Conditionals
// ternary
/* const lagu = {
  judul: `Tetap Dalam Jiwa`,
  penyanyi: `Isyana Sarasvati`,
}; */

/* let jmlAngkot = 10;
let noAngkot = 1;
let angkotBeroperasi = 6;
let noAngkotLembur = 8;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && !(noAngkot == 5)) {
    console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  } else if (
    noAngkot == noAngkotLembur ||
    noAngkot == noAngkotLembur + 2 ||
    noAngkot == noAngkotLembur - 3
  ) {
    console.log(`Angkot No. ${noAngkot} sedang lembur.`);
  } else {
    console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
  }
} */

/* let play = true;
const kesempatan = 3;
alert(`Tebak Angka dari 1 - 10\nKamu punya ` + kesempatan + ` kali kesempatan`);

const com = Math.floor(Math.random() * 10) + 1;
while (play) {
  let i = kesempatan;
  for (i; i > 0; i--) {
    const p = prompt(`Kesempatan ke- ` + i);
    let j = i - 1;
    if (p == com) {
      alert(`Angka yg kamu masukkan : ` + p + `\nSelamat Kamu Benar`);
      break;
    } else if (p < com) {
      if (j == 0) {
        alert(`gagal`);
      } else {
        alert(`Terlalu Rendah...\nAyo kamu masih punya ` + j + ` Kesempatan!`);
      }
    } else if (p > com) {
      if (j == 0) {
        alert(`gagal`);
      } else {
        alert(`Terlalu Tinggi...\nAyo kamu masih punya ` + j + ` kesempatan!`);
      }
    }

  }

  play = confirm(`Main Lagi?`);
} */

/* let jmlKubus = function (a, b) {
  this.luasDuaKubus = a * a * a + b * b * b;
};

let hasil = new jmlKubus(8, 3);
console.log(hasil.luasDuaKubus);

console.table(hasil.luasDuaKubus);

function Obj() {
  let d = 10;
  console.log(this.d);
}
Obj(); */

const p = document.getElementsByTagName(`p`);
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "red";
}

window.addEventListener("online", (event) => {
  console.log("You are now connected to the network.");
});

const form = document.getElementById("form");

form.addEventListener("focusin", (event) => {
  event.target.style.background = "pink";
});

form.addEventListener("focusout", (event) => {
  event.target.style.background = "";
});
