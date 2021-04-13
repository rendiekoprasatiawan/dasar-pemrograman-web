// array : kumpulan nilai, yang memiliki index
// object ituu apa : kumpulan nilai, yang memiliki nama

// array adalah sebuah variable yang lebih sakti
// object adalah array, yang lebih sakti

/* in javascript, Object are king.
if you understand Object, you understand javascript */
//karena di dalam javascript itu di dalamnya berisi object2

// kenapa harus object?
/* 
1. gak complex
2. useable
*/

// KODINGAN LITERAL
// membuat object
var mhs = {
    nama: 'rendi eko prasatiawan',
    umur: 21,
    ips: [2.00, 2.10, 2.60, 2.80, 3.00, 3.10, 3.00],
    alamat: {
        jalan: 'Jl Bumi Manti IV',
        kota: 'Bandar Lampung',
        provinsi: 'Lampung'
    }
};

console.log(mhs);
console.log(mhs.nama);
console.log(mhs.alamat.provinsi);