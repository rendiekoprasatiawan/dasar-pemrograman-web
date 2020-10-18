// nah pada kali ini kita udah buat tampilannya menggunakan gambar yang dibantu oleh html dan css
// yang diatas warna biru itu pilihan komputer
// yang hijau dibawah itu pilihan player
// nah idenya ketika layar hijau dan gambarnya ditekan/klik (ya bisa apa aja dibawah itu, tp cuma 3 karena ya hanya 1. gambar yang merepresentasikan gajah, 2. gambar yang merepresentasikan orang, 3. gambar yang merepresentasikan semut) nanti computer (yang biru, dan direpresentasikan 1 buah gambar acak nntinya) akan memilih pilihan yang random, dan itu kan masih 1 gambar ya, nah dia akan mengubah gambar itu sesuai dengan yang dia pilih. Misalkan dia memilih random terus semut, maka berubah gambarnya menjadi semut(kelingking)
// hasilnya muncul di kolom informasi ditengah-tengah, maka akan muncul SERI, menang atau kalah?

// pertama yang akan kita lakukan akan menangkap gambar
// dan selanjutnya kita akan kasih event kegambar itu
// ketika gambarnya diklik apa yang akan kita lakukan
// lalu kita akan siapkan pilihan computernya apa dan kita siapkan juga aturan dari suwit jawanya
// siapa lawan apa, siapa yang menang

// yokk koding yok
// kita buat function terlebih dahulu supaya gampang manggilnya
function getPilihanKomputer() {
    // menangkap pilihan komputer
    // membangkitkan bilangan random
    const komp = Math.random();
    if (komp < 0.34) return 'gajah';
    if (komp >= 0.34 && komp < 0.67) return 'orang';
    return 'semut';
}


function getHasil(komp, pemain) {
    // menentukan rules
    if (pemain == komp) return 'SERI!'
    if (pemain == 'gajah') return (komp == 'semut') ? 'KALAH!' : 'MENANG!';
    if (pemain == 'orang') return (komp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (pemain == 'semut') return (komp == 'orang') ? 'KALAH!' : 'MENANG!';
};


// nah ini kita mau bikin dia muter dulu baru muncul orang, semut, atau gajah
// kita gunain setInterval
function putar() {

    // kita ambil dulu gambarnya
    const imgKomputer = document.querySelector('.img-komputer');

    // kita ambil gambar yang meliputi array
    // kita mau ganti-ganti gambarnya sesuai dengan array ini
    const gambar = ['gajah', 'semut', 'orang']

    // kita buat inya
    // pake let biar bisa diubah2 nantinya
    let i = 0;

    // nah kita buat sebuah const
    // kita kasih waktu awal
    // pada saat fungsi putar dijalankan kita ambil waktu saat itu, nanti satu detik kemudian berhenti 
    const waktuMulai = new Date().getTime();

    // selanjutnya kita buat setInterval
    // fungsi untuk melakukan sesuatu secara berulang-ulang, selama interval waktu tertentu 
    setInterval(function () {

        // nah kita cek kalau waktu pada saat pengulangannya sudah 1 detik berhentikan
        if (new Date().getTime() - waktuMulai > 1000) {

            // maka clear/berhentikan
            clearInterval;

            // kita return supaya keluar dari function
            return;
        }

        // sekarang kita ambil imageKomputernya
        // kita set attributnya
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');

        // nah kita lakukan perulangan
        // jika i sudah sesuai dengan jumlah gambar maka dia akan ngulang dari awal lagi
        if (i == gambar.length) return i = 0;


    }, 100); /* 100 : interval 100/0.1 detik dijalankan */

}



/* ------------------------------------------------------ */


// jadi kita akan menyeleksi ketiga gambar ini sekaligus
// kita seleksi gambar yang ada di dalam li
// caranya kita bikin aja
// querySelector untuk satu yang kita ambil saja
// kalau mau banyak, kita gunakan
// querySelectorAll -> menghasilkan nodeList bukan HTMLCollection
const pilihan = document.querySelectorAll('li img');

// nah selanjutnya kita akan looping tiap imagenya
// caranya kita panggil nodeListnya (pilihan) lalu kita gunakan forEach
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {

        // misal kita punya pilihan komputer, maka setelah itu panggil functionnya getPilihanKomputer, sehingga nanti random masuk ke dalam variable pilihanKomputernya
        const pilihanKomputer = getPilihanKomputer();

        // sekarang kita ambil pilihan pemain
        // nah kita menggunakan pil untuk menentukan gambar yang kita klik aja 
        // karena pil untuk setiap gambarnya
        const pilihanPemain = pil.className;

        // nah baru kita bikin variable hasil
        // hasilnya kita tinggal panggil nih
        // supaya kita tau hasilnya
        const hasil = getHasil(pilihanKomputer, pilihanPemain);

        // kita penggil fungsi putar
        putar();

        // kita nunggu dulu selama satu detik
        // agar selaras dengan set interval dan baru muncul infonya
        setTimeout(function () {

            // sekarang kita ganti gambarnya
            // kita butuh ngambil kelas img-komputer
            const imgKomputer = document.querySelector('.img-komputer');
            // kita menggunakan setAttribute
            // nah ini agar kita bisa memanipulasi attributenya
            imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

            // nah tinggal kita masukin hasilnya untuk dimasukin ke info
            const info = document.querySelector('.info');
            // dan manipulasi dengan innerHMTL
            info.innerHTML = hasil;
        }, 1000);


    });
});
// cara bacanya : untuk setiap image yang ada di dalam nodeList pilihan jalankan function berikut, lalu di dalam functionnya kita kasih parameter untuk ngambil masing2 imagenya. Bisa ditulis apapun namannya. saya disini menggunakan nama pil. nah nanti pil ini akan merepresentasikan 1 image saja/per imagenya.