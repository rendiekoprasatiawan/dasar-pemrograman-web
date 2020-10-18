// parameter adalah variabel yang ditulis didalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang nanti dikirimkan saat function dipanggil.
// argument adalah nilai yang dikirimkan ke parameter saat fungsi dipanggil

/* beda parameter dengan argument */
// parameter itu ketika fungsinya dibuat dan
// argument itu ketika fungsinya dipanggil

// contoh
/* function tambah(a, b) {
    return a + b;
}

nah (a, b) itu parameter yang dibuat

 */
/* var coba = tambah(5, 10); 
sedangkan (5, 10) ini argument yang dipanggil
*/

// contoh sederhana
/* function tambah(a, b) {
    return a + b;
}

var a = parseInt(prompt('Masukkan nilai 1 : '));
var b = parseInt(prompt('Masukkan Nilai 2 : '));

var hasil = tambah(a, b);

alert(hasil); */

// contoh lagi
/* function tambah(a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b;
}

var hasil = kali(tambah(1, 2), tambah(3, 4));

alert(hasil); */


// beda juga dengan arguments yang lain, kalau tadi istilah maka ini arguments yang berbentuk variabel

// misal tambah(5,10,20,"hi", false);

// nah
// arguments = [5, 10, 20, "hi", false]; bentuk array begini

// nih contohnya nih
function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1, 2, 3, 4);
alert(coba);