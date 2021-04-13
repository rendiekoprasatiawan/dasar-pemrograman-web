var JmlAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 6;
var angkotLembur = 8;

for (noAngkot; noAngkot <= JmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi && noAngkot !== angkotBeroperasi - 1) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    } else if (noAngkot === angkotLembur || noAngkot === angkotLembur + 2 || noAngkot === angkotLembur - 3) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
    }
}