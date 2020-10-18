// ini else-if
/* var angka = prompt('masukkan angka');
if (angka == 1) {
    alert('anda memasukkan angka 1');
} else if (angka == 2) {
    alert('anda memasukkan angka 2');
} else {
    alert('angka yang anda masukkan salah');
} */

// ini switch
var angka = parseInt(prompt('masukkan angka: '));

switch (angka) {
    case 1:
        alert('anda memasukkan angka 1');
        break;

    case 2:
        alert('anda memasukkan angka 2');
        break;

    case 3:
        alert('anda memasukkan angka 3');
        break;

    default:
        alert('angka yang anda masukkan salah');
        break;
}