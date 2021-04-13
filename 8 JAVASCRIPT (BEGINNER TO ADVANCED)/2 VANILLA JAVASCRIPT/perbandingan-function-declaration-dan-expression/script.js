// function declaration rumusnya adalah :
// pertama kita ada function dulu, setelahnya ada identifier (nama fuungsi bisa dibilang), selanjutnya ada (parameterList opt) 'ini opsional tp kalau tidak ada parameternya harus ada kurung buka( dan kurung tutup )' , selanjutnya ada {functionBody} : ada kurung kurawal untuk membungkus functionbodynya.
// penggunaannya
/* function identifier (parameterList) {FunctionBody}*/

// function expression
/* ada function, terus ada identifier/nama fungsi : tp ini opsional, terus ada (parameterList) : opsional juga, fan diakhir ada kurung kurawal untuk menyimpan function bodynya. */
// penggunaannya :
// function identifier(parameterList) {functionBody}


// nah kita bedah lagi perbedaaannnya 

// function declaration
/* function identifier (parameterList) {FunctionBody}*/
function tampilPesan(nama) {
    alert('halo ' + nama);
}

// function expression
// function identifier(parameterList) {functionBody}
var tampilPesan = function (nama) {
    alert('halo ' + nama);
}

// perbedaan mendetailnya ?
/* 
function deklarasi lebih fleksibel (dapat ditulis dimanapun) kita bisa tulis deklarasi functionnya sebelum atau sesudah pemanggilan function. Kenapa bisa terjadi? karena ada konsep hoisting? dimana deklarasi sebuah function itu pasti tersimpan lebih dahulu di dalam memori.

lebih mudah dipahami, katanya..

nih contohnya deh:
tampilPesan('Rendi');
function tampilPesan (nama) {
    alert('halo' + nama);
}

ini bisa aja, kenappa ? karena ada konsep hoisting..dimana deklarasi sebuah function itu pasti tersimpan lebih dahulu di dalam memori.
*/

/* 
function Ekspresi ini harus didefinisikan terlebih dahulu sebelum dipanggil, beda sama fungsi deklarasi.

fungsi ini juga lebih powerfull :
- bisa membuat function expression ini sebagai closure
- bisa sebagai argumen untuk function yyang lain
- IIFE (immediately Invoked Function Expression)
3 hal ini untuk javascript yang sudah kompleks
*/


// pilih yang mana ? terggantungg masih pemula atau udah expert

// tapi fungsi ekpressi digunakan yang lebih lanjut dan lebbih modern. make framework juga digunakann function expression