// DOM Manipulation
// ini manipulasi elemen-elemennya dan nodenya

// DOM Manipulation Method
/*
1. Manipulasi Element
   Elemen yang sudah kita tangkap/seleksi sebelumnya terus mau merubah warna dan isinya.
2. Manipulasi node
   Ketika kita ingin misalnya menyisipkan elemen baru pada halaman, jadi misalkan kita punya 3 buah paragraf terus kita mau menyisipkan paragraf ke-4, itu namanya manipulasi node
   menghilangkan sebuah elemen juga itu bisa disebut manipulasi nodenya
*/

/* 
1. Macam-macam manipulasi element
   - element.innerHTML
     untuk merubah isi dari sebuah teks HTML
   - element.style.<property>
     untuk merubah css dari elemen yang sudah kita seleksi
   - element.setAttribute()
     untuk memanipulasi atribut pada sebuah elemen yang melekat pada pada sebuah elemen yang sudah kita seleksi
   - element.classList
     class merupakan salah satu atribut juga, tapi karena class berperan penting pada suatu class.. makanya nanti class kita bisa ubah khusus nanti
   - ......

2. 
*/

// kita coba macam-macam manipulasi element
// 1. element.innerHTML
// ini merubah judul, terserah mau ganti apa
// dan bisa make tag html juga untuk manipulasi
/* const judul = document.getElementById('judul');
judul.innerHTML = '<em>Rendi Eko P</em>' */

// ini malah menghilangkan semua a
/* const sectionA = document.querySelector('section#a');
sectionA.innerHTML = 'Hello World!'; */


// 2. element.style.<property>
// ini mah umum
// jadi kita ngerubah style tp dengan javascript
/* const judul = document.querySelector('#judul');
judul.style.color = 'salmon';
judul.style.backgroundColor = '#ccc' */


// 3. element.attribute
// nah kita bisa mengelola attribute dengan method yang lain (element.getAttribute()[1]. element.setAttribute()[2]. element.removeAttribute()[3].)
// attribute itu sesuatu yang menempel pada sebuah elemen HTML. ex -> a : href(attribute)
/* const judul = document.getElementsByTagName('h1')[0];
// ini untuk menambahkan attribute baru
judul.setAttribute('name', 'rendi');
const a = document.querySelector('section#a a');
// ini juga untuk menambahkan attribute baru
a.setAttribute('id', 'link');

// ini untuk manggil attribute yang sudah ada
// panggil di console
judul.getAttribute('id');

// ini untuk menghapus attribute
a.removeAttribute('href');
// menjadikan href terhapus */


// kita bisa menambahkan attribute class
// tapi ini mengganti kelasnya/ menimpa kelasnya
// nah ini akan menimpa id dan diganti dengan label
/* const p2 = document.querySelector('.p2');
p2.setAttribute('class', 'label'); */


// nah kita punya method lain yang gunanya untuk mengelola kelas -> classList
/* 
1. element.classList.add()
   ini untuk menambahkan kelas baru
2. element.classList.remove()
   ini untuk menghapus kelas yang ada
3. element.classList.toggle()
   ini akan mencari sebuah elemen class yang telah dibuat user, ketika itu belum ada maka akan dibuat oleh toogle, tapi ketika elemen class itu sudah ada maka akan dihapus oleh si fungsi tooglenya
4. element.classList.item()
   ini untuk mengetahui kelas tertentu yang ada didalam sebuah elemen
5. element.classList.contains()
   ini kita ngecek dalam sebuah elemen punya gak kelas tertentu
6. element.classList.replace()
   ini untuk mengganti kelas yang ada dengan kelas yang baru
*/

// contoh penggunaannya bro
const p2 = document.querySelector('.p2');
// ini untuk menambahkan kelas baru
p2.classList.add('label');

// ini untuk menghapus kelas yang ada
p2.classList.remove('label');

// ini akan mencari sebuah elemen class yang telah dibuat user, ketika itu belum ada maka akan dibuat oleh toogle, tapi ketika elemen class itu sudah ada maka akan dihapus oleh si fungsi tooglenya
p2.classList.toggle('label');
// ini akan akses ke css untuk menghidupkan warna di body
// cssnya biru-muda
// tulis 1 kali dia akan hidup
document.body.classList.toggle('biru-muda');
// tulis yang kedua kali dia akan mati
// coba komentari yang pertama kalau tidak percaya
document.body.classList.toggle('biru-muda');

// ini untuk mengetahui kelas tertentu yang ada didalam sebuah elemen
// ini lebih baik akses di console
p2.classList.item('1');
// indeks dari 0

// ini kita ngecek dalam sebuah elemen punya gak kelas tertentu
// nanya ke p2 ada kelas label apa nggak
// ini lebih baik akses di console
p2.classList.contains('label');

// ini untuk mengganti kelas yang ada dengan kelas yang baru
// coba kita tambah dulu deh kelas
p2.classList.add('dua');
// nah kita replace nih
p2.classList.replace('dua', 'empat');
// maka akan keganti class 'dua' ke 'empat'