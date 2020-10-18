// menambahkan while untuk terus berlanjut : looping
var tanya = true;
while (tanya) {

    // menangkapp pilihan player
    var p = prompt('pilih : gajah, semut, orang');

    //menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    // menentukan rules
    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        /* if (comp = 'orang') {
            hasil = 'KALAH!';
        } else {
            hasil = 'MENANG!'
        } */

        // bisa make ini
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';

    } else if (p == 'orang') {
        /* if (comp = 'gajah') {
            hasil = 'KALAH!';
        } else {
            hasil = 'MENANG!';
        } */

        // bisa make ini
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';

    } else if (p == 'semut') {
        hasil = (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'MEMASUKKAN PILIHAN YANG SALAH!';
    }

    // tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

    // ini variabel tanya yg diatas
    tanya = confirm('lagi?');

}

alert('Terima Kasih!');