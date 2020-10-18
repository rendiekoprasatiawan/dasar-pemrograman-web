// block scope digunakan c dan java
// program dalm bahasa c
/* int i = 2;                 
if (i%2 == 0) {               |
    bool genap == true;       | block scope = kurung
}                             |kurawal buka dan tutup
------------------------------> 

if (genap) {
    printf("genap");
} 

hasilnya error : 'genap' is undeclared
kenapa?
karena blok yang berlaku menentukan juga
*/

// tapi kalau dalam javascript akan tampil, karena javascript tidak menganut block scope.
// contoh:
/* var i = 2;

if (i % 2 == 0) {
    var genap = true;
}

if (genap) {
    alert('genap!');
} */


// oke kita coba

var a = 1; /* ini variabel global, bisa digunakan diluar */

/* ini variabel lokal */
function tes() {
    var b = 2;

}
/* ini variabel yang dibuat hanya untuk dia sendiri, dan digunakan dalam function scope saja.
didalam function kita dapat variabel global sedangkan,
diluar function kita tidak dapat mengakses variabell lokal
*/