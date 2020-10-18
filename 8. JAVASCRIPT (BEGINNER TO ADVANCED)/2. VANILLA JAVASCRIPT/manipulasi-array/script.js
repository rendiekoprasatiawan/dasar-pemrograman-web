/* 
manipulasi array :

1. menambah elemen pada array
2. menghapus elemen pada array
3. menampilkan seluruh isi array
*/

// 1. menambah isi array
/* var arr = [];
arr[0] = ['rendi'];
arr[1] = ['eri'];
arr[2] = ['hari'];
arr[6] = ['harot'];
console.log(arr);
 */

//  menghapus isi array
/* var arr = ['rendi', 'galih', 'hari'];
arr[1] = undefined;
console.log(arr); */

// menampilkan isi array
/* var arr = ['rendi', 'galih', 'hari'];
for (var i = 0; i < 3; i++) {
    console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr[i]);
}
 */
// biar javascript yang menghitung ada berapa sih element array di dalamnya
// caranya : i < arr.length;
/* var arr = ['rendi', 'galih', 'hari', 'kupra'];
for (var i = 0; i < arr.length; i++) {
    console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr[i]);
} */


// method join
// method yang menggabuungkan seluruh isi array dan mengubahnya menjadi sebuah string
var arr = ['rendi', 'galih', 'hari'];
// console.log(arr.join(' - '));


// method push, pop, shift, unshift
// push dan pop

// push untuk mendorong atau memasukkan elemen baru diakhir arraynya
// contoh:
arr.push('doddy', 'fitri'); /* push bisa langsung banyak dimasukkan */

// pop itu kebalikan dari push, menghiilangkan element terakhir di dalam sebuah array
arr.pop();
arr.pop(); /* pop harus satu persatu untuk menghilangkan element terakhirnya*/
// console.log(arr.join(' - '));

//  unshift dan shift
// sama persis seperti push dan pop, tp pd eleement pertama

// unshift : menambahkan elemen baru diawal arraynya
arr.unshift('doli', 'dori');

// sedannkan shift menghilangkan element pertamanya
arr.shift();
// console.log(arr.join(' - '));

// shift dan pop benar benar menghilangkan elemennya, bukan merubahnya menjadi undefined


/* splice */
// splice untuk menyisipkan ditengah tengah
// splice(indexawal), mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
arr.splice(2, 0, 'danu');
// bisa nambahkan lebih dari satu nilai
// dan kalo mau hapus tinggal isi aja angka 0 nya dari index yg mau dihapus. ex : (2, 2) ; menyisipkan danu di index setelah 2 dan memasukkannya terus menghapus index yang setelah 2 dan steruusnya
// console.log(arr.join(' - '));

// slice : ini mengiris sebuah array menjadi array yang baru dan array lama masih bisa diakses
// pokoknya harus buat variable baru
// nah diatas kan sudah buat variable arr dan klo mau mengggunkaan splice, kita harus buat arr2
var arr2 = arr.slice(1, 3);
console.log(arr2.join(' - ')); /* ini array baru */
console.log(arr.join(' - ')); /* ini array lama */