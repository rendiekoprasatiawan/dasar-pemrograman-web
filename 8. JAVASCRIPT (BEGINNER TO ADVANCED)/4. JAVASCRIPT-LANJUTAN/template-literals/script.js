// Template literal adalah string literal yang memungkinkan adanya expression di dalamnya ~ MDN Web Docs
// String literal adalah string biasa yang kita buat
// string literal bisa menggunakan beberapa cara:
/* 
1. kutip 1 ('')
2. kutip 2 (" ") -> sedikit lebih sakti karena dia bisa melakukan interpolasi
3. back tick (` `) -> dengan menggunakan ini memungkinkan kita membuat template literal, kita juga bisa melakukan hal ini ketika menggunaakn back tick :
  - 1. template literal hanya bisa dibuat menggunakan back tick
  - 2. kita juga bisa melakukan multi-line string, tidak bisa dilakukan ketika kita menggnakan kutip 1/2
  - 3. kita juga bisa membuat Embedded Expression
  - 4. kita juga bisa membuat HTML Fragments : ini saat ini sangat sering digunakan, misalkan kita menggunakan front end framework 
  - 5. template literal ini juga memunngkinkan kita untuk bisa melakukan expression interpolation (ini sama seperti tanda kutip 2 pada bahasa php)
  - 6. terakhir kita bisa juga melakukan suatu yang dinamakan tagged template
*/

/* 
- contoh penggunaan template literal

`string text` -> penulisan string biasa

`string text baris 1
 string text baris 2
 string text baris 3` -> kita bisa melakukan multi-line string/ menambahkan baris baru dengan enter tanpa harus melakukan concatination

`string text ${expression} string text` -> penulisan yang menggunakan embedded expression

tag `string text ${expression} string text` -> penulisan dengan membuat tagged template dengan membuat tag di depan template literalnya
*/

/* --------------------------------------------------- */

/* contoh multi-line string */

// menggunakan kutip 2
/* console.log("string1\nstring2"); */

// menggunakan back tick -> cukup enter kelar
/* console.log(`string1
string2`); */

/* --------------------------------------------------- */

/* Multi-line String dengan (HTML Fragments) */

// contoh sebelum menggunakan back tick/ concatination

// pertama kita buat dulu variabelnya
/* const mhs = {
  nama: "Rendi Eko Prasatiawan",
  umur: 21,
  npm: "1657051005",
  email: "rendieko123@rendi.com",
}; */

// terus kita rangkai elemennya
/* let el = "";
el += '<div class="mhs"></div>';
el += "<h2>" + mhs.nama + "</h2>";
el += '<span class="npm">' + mhs.npm + "</span>";
el += "</div>";

console.log(el); */

// lalu kita bisa simpan dalam DOM menggunakan innerHTML

// agak ribet kan

/* CARA SIMPLENYA MENGGUNAKAN BACK TICK */
/* let el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="npm">${mhs.npm}</span>
</div>`;

console.log(el); */

// IT'S MODA FFCKN SIMPLE

/* --------------------------------------------------- */

/* INI UNTUK EMBEDDED EXPRESSION */
/* const nama = "Rendi Eko Prasatiawan";
let umur = 21;
console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur} tahun.`); */

// expresi dengan embedded ini sebenarnya bisa langsungg kita interpolasi
// contoh
// mengguanakan kutip 1
let a = 10;
let b = 15;
console.log('jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ' + (a + b) + ', bukan ' + (2 * a + b));
// ribet sekali bukan?

// simplenya nih, menggunakan template literal, cukup menggunakan back tick
console.log(`jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a + b}, bukan ${2 * a + b}`);

/* --------------------------------------------------- */
/* LET'S CODE */
// Template literals / Template string
// contoh bikin variable
const nama = 'Rendi';
const umur = 21;
console.log(`Halo nama saya ${nama}, dan umur saya ${umur} tahun.`);

/* -------------------------------------------------- */
// kita juga bisa menggunakan Embedded Expression
// bisa se simple langsung penjumlahan gitu
console.log(`${1 % 6}`);

// bisa juga manggil function
// karena function merupakan expression juga
console.log(`${alert('Halo!')}`);

// bahkan kita bisa menyimpan ternary operator
// kita buat variabel
const x = 10;
// misalkan kita mau mencetak bilangan 10 itu genap atau ganjil
// kita bisa simpan ternary expression, karena ternary pun juga expression
console.log(`${(x % 2 == 0) ? 'GENAP' : 'GANJIL'}`);


/* --------------------------------------------------- */
/* HTML FRAGMENT */

// buat variabel nih
const mhs = {
  nama: 'Rendi Eko Prasatiawan',
  umur: 21,
  npm: '1657051005',
  email: 'rendieko123@rendi.com'
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="npm">${mhs.npm}</span>
</div>`

console.log(el);

/* --------------------------------------------------------- */

let sKosong = ''
for (let i = 0; i < 5; i++) {
  console.log(sKosong);
  sKosong += '*';

  sKosong += ''
}
console.log(sKosong);