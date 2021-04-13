var JmlAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 6

for (noAngkot; noAngkot <= JmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
    }
}