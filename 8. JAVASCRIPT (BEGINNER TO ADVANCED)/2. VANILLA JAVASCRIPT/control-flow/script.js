// untuk menggunakan control flow ada dua cara dengan pengulangan dan pengkondisian

// pengulangan atau loop/iteration
//ada 3 : for, while, do while

// alert('Mulai');
// for (var i = 0; i < 5; i++) {
//     alert('Hello World');
// }
// alert('selesai');

// pengkondisian / percabangan
// sebuah keadaan dimana program memilih statement yang dipilih sesuai kondisi
// true or false
// if, if else, else if, else switch
var angka = prompt('Masukkan angka: ');
if (angka % 2 === 0) {
    alert(angka + ' adalah bilangan GENAP');
} else {
    alert(angka + ' adalah bilangan GANJIL');
}