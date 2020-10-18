/* membuat function */
// kita memiliki sebuah input : masukkan bahan/material kedalam function
// kita memiliki sebuah function : lakukan sesuatu terhadap bahan/material tadi
// nah stelahnya akan menghasilkan sebuah nilai baru yang dinamakan output : mengasilkan sesuatu

/* function yang baik hanya mengerjakan 1 hal saja*/
/* pernah gak kalian menemukan sebuah alat yang bisa menerima inputan padi dan menghasilkan nasi goreng yang siiap dimakan?
Harusnya nggak ya, karena butuh proses yang panjang untuk menghasilkan nasi goreng tidak ada yang instan.
*/

/* 
function : 
- blok kode yang dibuuat untuk melakukan tugas spesifik
- dapat dipanggil berulang kali
- Memudahkan penelusuran
- Reusability
 */

//  contoh kasus
/*
- kita mempunyai 2 buah kubus (kubus a dan b) dan tiap tiap kubus mempunyai sisi yang sama.
- kita membuat program untuk menjumlahkan volume dari 2 buah kubus 
*/

/* answeer algoritmanya */
// menjumlahkan volume 2 kubus
// algoritmanya:
// 1. ketahui sisi masing-masing kubus
// 2. hitung volume masing-masing kubus
// 3. jumlahkan hasilnya
// 4. kembalikan nilai jawabannya

// 1. misal, kubus a : 8 dan kubus b : 3
// 2.8^3 : 512 dan 3^3 : 27
// 3. 512 + 27
// 4. 539 

/* jawaban dalam bentuk coding */
function JumlahVolumeDuaBuahKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;

}

alert(JumlahVolumeDuaBuahKubus(18, 9));
alert(JumlahVolumeDuaBuahKubus(8, 5));