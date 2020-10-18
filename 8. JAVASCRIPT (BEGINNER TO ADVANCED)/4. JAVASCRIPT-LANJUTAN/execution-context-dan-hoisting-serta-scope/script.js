// Execution context, Hoisting, dan Scope

// pertama2 javascript itu unik dan kadang terbilang aneh
// nih gini

// coba deh tulis ini:
/* console.log(nama); */
// hasilnya kan error nih ya? sepakat oke?

// tapi coba dibawahnya kita tulis:
/* var nama = 'Rendi'; */
// hayo?? ternyata tampilnya undefined, padahal kita udah definisikan dan isi variabelnya 'Rendi'
// tapi gak error juga dia? hayoo??

/* --------------------------------------------------- */

// oke coba kita taruh console.log(nama); dibawah var nama = 'Rendi';
/* var nama = 'Rendi';
console.log(nama); */
// nah sekarang tampil Rendi

// nah tapi kenapa agak aneh ketika console.log diatas dia tampilnya undefined

/* --------------------------------------------------- */

// oke kita bedah
// nah yang terjadi begini, saat program dijalankan misalnya ini:
/* console.log(nama);
var nama = 'Rendi'; */

// nah ketika program dijalankan, yang terjadi adalah ada sesuatu yang dinamakan:
// creation phase/ fase pembentukan
// nah fase creation ini terjadi di conteks global
// dalam hal kode diatas, karena disana kita langsung dalam file javascriptnya bukan di dalam function
// nah kalau function nanti beda lagi dia local
// yang pasti pada kode diatas itu creation phase pada global context
// nah pada global context ini, javascript akan mengecek apakah ada variable atau function di dalam kodingannya, itu dulu yang akan dia cek, dia akan tidak akan pedulikan dulu perintah console.log diatas
// nah dia akan nyari dulu misalkan ada 10 baris, dia akan nyari dulu ada keyword var gak? ada keyword function gak? itu dulu yang dicari
// nah kalau ada dia akan memnbuat nama variable (apapun nama variablenya yaa), kebetulan diatas nama variabelnya nama. nah itu akan diisi dengan : UNDEFINED
// jadi, semua variable akan di set dulu semuanya menjadi UNDEFINED
// makanya ketika kita tulis console.lognya diatas, variabelnya udah ada tapi isinya UNDEFINED
// lalu kalo ada function, itu akan diisi kode functionnya
// NAH KONSEP INI DISEBUT DENGAN KONSEP HOISTING
// ARTI HOISTING DALAM BAHASA INDONESIA ANGGAP AJA KITA LAGI MENGGEREK BENDERA, DINAIKKAN KE ATAS

// NAH SEBETULNYA SELAIN DIA MENGESET VARIABEL KE UNDEFINED DAN FUNCTION AKAN DIISI DENGAN KODE FUNCTION YANG KITA BUAT

// ADA LAGI YANG DIJALANKAN
// NAH YANG DIDEFINISIKAN ADALAH
// JAVASCRIPT MENDEFINISIKAN OBJECT WINDOW SEBAGAI GLOBAL OBJECT
// DAN JAVASCRIPT MENDEFINISIKAN THIS SEBAGAI WINDOW

// JADI MAKSUDNYA JAVASCRIPT MENDEFINISIKAN
// WINDOW = GLOBAL OBJECT
// DAN
// THIS = WINDOW
// INI MESKIPUN KITA TIDAK MENULISKAN APAPUN DAN MESKIPUN KOSONG YA TETAP DI DEFINISIKAN

/* --------------------------------------------------- */

// NAH SETELAH INI YAITU EXECUTION PHASE
// JADI MENGEKSEKUSI PROGRAMNYA BARIS PER BARIS DARI ATAS KEBAWAH
// NAH BARU DIJALANKAN CONSOLE.LOGNYA
// SETELAH DIA JALANIN CONSOLE.LOGNYA
// NAH NAMA ISINYA APA?
// DI DALAM MEMORI NAMA ISINYA UNDEFINED
// MAKANYA KALAU KODE DIJALANKAN DAN CONSOLE.LOG DIATAS VAR
// HASILNYA UNDEFINED

// NAH SETELAH ITU DI MEMORI NAMANYA MUNCUL RENDI
// TAPI DIA UDAH TERLANJUR DICONSOLE.LOG JADINYA UNDEFINED
// KECUALI CONSOLE.LOGNYA DIPINDAHKAN KEBAWAH UNDEFINED

/* --------------------------------------------------- */

// oke lanjut kita coba lagi
// coba tebak deh

// pake kurung buka dan kurung tutup itu menjalankan kode
// console.log(sayHello());
/* console.log(sayHello());

var nama = 'Rendi';
var umur = 21;

function sayHello() {
  return `Hello nama saya : ${this.nama}, umur saya : ${this.umur}`
}

console.log(sayHello()); */
// coba tebak, hayoooo

// jadi pertama dia ngehoisting fungsi terlebih dahulu
// jadi kalo udah ketemu function executionnya udah gak global lagi, tapi lokal dulu dalam functionnya (bisa disebut juga local execution context)
// yang didalamnya juga sama terdapat creation phase dan execution phase di dalam localnya

// JADI BEDANYA KALO LOCAL EXECUTION CONTEXT ITU SELAIN KITA BISA AKSES WINDOW, KITA JUGA PUNYA AKSES KE ARGUMENTS
// ARGUMENTS : ITU BISA BERISI APAPUN YANG KITA MASUKKAN KE DALAM PARAMETER DARI FUNCTIONNYA
// DAN DIDALAMNYA ADA HOISTING JUGA, JADI HOISTINGNYA LOKAL. JADI DIA AKAN NGECEK DI DALAM FUNCTION ADA VARIABEL GAK
// KALAU ADA NAIKIN KE ATAS / DI DALAM FUNCTION ADA FUNCTION LAGI GAK?
// KALAU ADA, DIA JUGA NANTI AKAN MELAKUKAN HOISTING
// OKE DAN HARUSNYA UDAH TAU KALAU ADA VARIABEL ISI DULU DENGAN UNDEFINED PADA CREATION PHASE, KALAU SUDAH EXECUTION BARU DIISI DENGAN NILAINYA

/* --------------------------------------------------- */

// OKE CONTOH KASUS LAGI DEH BIAR MAKIN NGERTI
/* var nama = 'Rendi Eko Prasatiawan';
var username = '@rendiekoprasatiawan';

function cetakURL(username) {
  var instagramURL = 'http://instagram.com/';
  return instagramURL + username;
}

console.log(cetakURL(username)); */

// hayo tebakk dengan baca aja jangan dijalankan dulu

/* // nih contoh lagi
function a() {
  console.log('ini a');

  function b() {
    console.log('ini b');

    function c() {
      console.log('ini c');
    }
    c();
  }
  b();
}
a(); */

// hayo tebakk dengan baca aja jangan dijalankan dulu

/* --------------------------------------------------- */

// masuk ke scope
// nih misal
/* var nama = 'Rendi Eko Prasatiawan';
var username = '@rendiekoprasatiawan';

function cetakURL(username) {
  var instagramURL = 'http://instagram.com/';
  return instagramURL + username;
}

console.log(cetakURL('@rakaakbarhartolo')); */

// coba liat padahal username yang di var itu @rendiekoprasatiawan
// tapi hasilnya malah : http://instagram.com/@rakaakbarhartolo
// kenapa bisa ?

// NAH ITU KARENA SCOPE BEGITU KITA NULIS ARGUMENT PENGGANTI DI CONSOLE, LALU DATANYA DIKIRIMKAN KE PARAMETER, MAKA PARAMETER AKAN DIKIRIM KE LOCAL FUNCTION
// DAN USERNAMENYA AKAN DIPANGGIL DENGAN YANG SAMA PADA CONSOLE

// BEDA LAGI KALAU ARGUMENTNYA DIHAPUS PADA FUNCTIONNYA
/* var nama = 'Rendi Eko Prasatiawan';
var username = '@rendiekoprasatiawan';

function cetakURL() {
  var instagramURL = 'http://instagram.com/';
  return instagramURL + username;
}

console.log(cetakURL('@rakaakbarhartolo')); */
// TAMPILNYA TETAP KAN ?
// KARENA RAKA DIKIRIMKAN KE ARGUMENT TAPI GAK ADA YANG NANGKAP (KARENA KITA HAPUS TADI)
// NAH SI RAKA ITU AKAN MASUK KE OBJECT ARGUMENT
// RAKA TUH MASUK KESEBUAH OBJECT YANG NAMANYA ARGUMENTS

/* --------------------------------------------------- */

// UNTUK MEMASTIKAN EMANG BENER PAHAM
// KASUS NIH
function satu() {
  var nama = "Rendi";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "raka";
satu();
dua("doddy");
console.log(nama);
