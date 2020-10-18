// rekursif adalah sebuah fungsi yang memanggil dirinya sendiri

// yang terjadi pada rekursif
/* ada input
terus dia memanggil dirinya sendiri
terus menghasilkan output */
// pastikan pada oenggunaan rekursif ini fungsinya harus berakhir (hati-hati saja, takutnya sama seperti looping yang dimana loopn=ing bisa jadi inifinity loop)

// misalkan kita punya kode sederhana saja
// codenya sperti ini
/* function tes() {
    return tes();
}

tes(); */
/* hasilnya maximum call stack size exceeded */

// contoh lain deh
/* ini kalau kita menggunakan looping */
/* for (var i = 10; i >= 1; i--) {
    console.log(i);
} */


// ini kalo kita menggunakan rekursif
/* function tampilAngka(n) {
    console.log(n);
    return tampilAngka(n - 1);
}

tampilAngka(10);  */
/* nah ini kita gak berhenti karena kita tidak menghentikan tampilAngka ketika dia sudah mencapai 0, naanti ddia akan berhenti sendiri ketika dia sudah meencapai masksimum dia dan akan tampil hasilnya : maximum call stack size exceeded  */

// untuk menghentikan rekkrsif tadi kita memerlukan Base Case
// Base Case ini adalah kondisi akhir dari rekursif yang menghasilkan nilai.

// nihc contohnya:
/* function cetakAngka(n) {
    if (n === 0) {
        return
    }
    console.log(n);
    cetakAngka(n - 1);
}

cetakAngka(10); */

// rekursif ini juga biasanya digunakan untuk semcam faktorial 
// contohnya 
function faktorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * faktorial(n - 1);
}

console.log(faktorial(5));

/* implementasi rekursif */
// menggantikan looping
// fibonacci
// pencarian dan penelusuran pada struktur data list dan tree
// bahasa pemrograman yang tidak memiliki pengulangan : haskell, erlang, prolog, dll
// dll.