// sort
// menyusun untuk menjadi teratur
// bisa untuk sebelum pengurutan sort, tapi harus sebelum kita menuliskan sort.
/* var angka = [3, 5, 6, 8, 7, 4, 3, 6, 10];
console.log(angka.join(' - '));
angka.sort();
console.log(angka.join(' - ')); */

// tapi hati2 kalau kita punya 20 sama 10, dia mengurutkan kata pertamanya dulu, yang mana hasilnya adalah 10 dahuluan dan 20 juga mengikut, karena angka pertama yang dilihhat
// kalau kita mau mengurutkannya dengan benar llgi
// maka:
/* var angka = [3, 5, 6, 8, 7, 4, 3, 6, 10];
console.log(angka.join(' - '));
angka.sort(function (a, b) {
    return a - b;
});
console.log(angka.join(' - ')); */


// method filter dann find
// metthod ini untuk mencri elemen pada array
// tapi ingat ada bedanya
// kalau find hanya bisa mengembalikan 1 nilai (dan find bukan mengembalikann array tp menghsilkan 1 nilai), tapi filter bisa mengembalikan banyak nilai (dan dia mengembalikan array).

// filter
/* var angka = [1, 2, 6, 5, 6, 7, 8, 9, 10, 20, 30, 40];
var angka2 = angka.filter(function (x) {
    return x > 5;
});
console.log(angka2.join(' - ')); */

// find
// find juga akan mencari nilai dari awal, apabila diawal telah menemukan yang lebih dari yang ditanyakan pada return ya ditampilkan langsung
// find tidak bisa memakai join untuk menggabungkan array, sedangkan find bukan mengembalikan array
var angka = [1, 2, 6, 5, 6, 7, 8, 9, 10, 20, 30, 40];
var angka2 = angka.find(function (x) {
    return x > 5;
});
console.log(angka2.join(' - '));

// masih banyak method
// kalau masi mau lihat ada di link diabawah
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array