// ini alert akan memunculkan yg kita tuliskan didalam sistem
alert('Hello World');

// ini prompt tidak hanya simpel dengan ok sjaa tp dia memasukkan sebuah inputan
var nama = prompt('masukkan nama');
alert('halo ' + nama);

// ini confirm sama seperti alert dan prompt tp ini digunakan untuk mendelete data
// berupa cancel dan oke
// confirm('kamu yakin?')
// dicooba
var tes = confirm('kamu yakin?');
// alert(tes);
if (tes === true) {
    alert('user menekan ok');
} else {
    alert('user menekan cancel');
}

// penggabungan 3 buah popup
alert('selamat datang');
var lagi = true;

while (lagi) {
    var nama = prompt('masukkan nama: ');
    alert('hello ' + nama);

    lagi = confirm('coba lagi?');
}

alert('terima kasih');