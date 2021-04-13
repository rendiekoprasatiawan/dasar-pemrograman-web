// setInterval() : ketika kita ingin menjalankan sebuah block program atau kode kita secara berulang-ulang. Bisa kita lakukan terus menerus, atau sampai waktu tertentu juga.


// setTimeout() : ketika kita ingin menjalankan kode kita setelah kita menunggu sejumlah waktu tertentu


// event ini penting untuk kita ketahui ketika kita ingin membuat sebuah website yang lebih interaktif lagi, misalnya kita ingin membuat slideshow otomatis, yang dimana gambarnya itu berganti dengan interval waktu tertentu atau kita ingin memuat timer misalkan menghitung mundur waktu tertentu dan masih banyak lagi penggunaan yang bisa dipakai.


// kedua function ini merupakan bagian dari object window



// yuk coba yuk
// ini akan menghasilkan ok setelahh selama 5 detik
// 5000 itu 5 detik
/* const tes = setTimeout(function () {
    console.log('ok');
}, 5000); */

// nah ini untuk menghentikan log yang ada diatas
// dan akan tampil alert/log yang akan ditampilkan dibawah
/* const tombol = document.getElementById('tombol');
tombol.addEventListener('click', function () {
    clearTimeout(tes);
    alert('selesai');
});
 */

// nah kalo interval
// ini kita melakukan sesuatu berulang-ulang dengan interval waktu tertentu, kalau tadi kan timeout cuma sekali dan nunggu dulu kan berapa detik terus jalan sekali. nah kalo ini sesuatu dijalankan lalu nunggu berapa detik, dijalankan lagi, dijalankan lagi, nunggu berapa detik, dijalankan lagi begitu
// yok coba yok
/* const tes = setInterval(function () {
    console.log('ok');
}, 2000);

// nah ini sama aja bakal berhentiin juga
const tombol = document.getElementById('tombol');
tombol.addEventListener('click', function () {
    clearInterval(tes);
    alert('selesai');
}); */



// Program Hitung Mundur
// kita akan melakukan hitung mundur terhadap sebuah waktu, jadi yang pertama harus kita tentukan adalah kita harus tau dulu kapan waktu tersebut, misalnya sekarang kebetulan tanggal 12 september 2020 jam 13.04, nah misalnya kita punya waktu tujuan itu besok jam 16.00, nah kita harus tau dulu bagaimana cara kita mendapatkan waktu itu.
// nah gini kita variable

// nah kita mau tau tanggal tujuan
const tanggalTujuan = new Date('Sept 12, 2020 14:14:00').getTime();

// nah kita butuh set interval untuk membungkus supaya programnya dijalankan setiap detiknya
// kalo ga make set interval itu pasti kita cape harus refresh lagi dan lagi untuk ngetahuin berapa selisihnya
// tapi kalo ada interval kita ga usah cape2 karena ya udah dijalanin secara real time (ya meskipun kita sendiri yang ngasih mau berapa setIntervalnya)

// naah kita buat dulu nih setIntervalnya
const hitungMundur = setInterval(function () {

    // terus kan kita tau
    // ini waktu kita sekarang
    const sekarang = new Date().getTime();

    // nah kalo kita pengen tau berapa jam lagi, menit lagi, detik lagi?
    // kita buat variable baru deh, yang isinya kita masukkan tanggalTujuan dan kurangi dengan waktu sekarang
    const selisih = tanggalTujuan - sekarang;

    // nah kita ubah itu menjadi hari
    // kita buat.. 
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));

    // nah kita kan sudah dapat harinya
    // kita buat selisih jamnya
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

    // nah kita kan sudah dapat jamnya
    // kita buat selisih menitnya
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));

    // nah kita kan sudah dapat menitnya
    // kita buat selisih detiknya
    const detik = Math.floor(selisih % (1000 * 60) / 1000);

    // nah kita sudah punya selisih hari, jam, menit, detiknya 
    // sekarang tinggal kita masukkan ke <h1></h1>nya
    // kita ganti tulisan HELLO WORLD! nya

    // sekarng kita panggil dulu
    const teks = document.getElementById('teks');
    teks.innerHTML = 'Waktu anda tinggal : ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik lagi!';

    // nah ini kita buat berhentinya 
    // jadi ketika waktunya udah habis dia tidak minus, tapi dia akan muncul sebuah kalimat : waktunya sudah HABIS!
    // pertama kita kasih kondisi
    // nah kalau selisih udah 0, dia akan muncul kalimat : waktunya sudah HABIS!
    // kalau tanggalTujuan - sekarang == 0 maka panggil aja
    // jadinya gini 
    if (selisih <= 0) {
        clearInterval(hitungMundur);
        teks.innerHTML = ('Waktu anda HABIS!');
    }


}, 1000); /* nah 1000 setelah } ini tuh biar kita set interval waktu real timenya berapa. maksudnya program akan refresh dalam 1 detik gitu. atau kalau msiih bingung kodenya dijalankan setiap 1 detik. nah itu kan selaras dengan hitung mundurnya. */
// tapi ini juga tuh harus ada waktu berhentinya, setelah kita buat atau udah kita setIntervalnya buat kode dijalankan berapa detik sekali, kita juga harus mengeset waktu berhentinya kalau udah sesuai dengan gak ada lagi selisih. jangan sampe dia ngitung terus, misalnya malah -1 hari sekian jam sekian detik. jangan kayak gitu, jangan sampe minus