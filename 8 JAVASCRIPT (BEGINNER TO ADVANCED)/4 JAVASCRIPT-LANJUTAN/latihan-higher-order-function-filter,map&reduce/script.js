// Menerapkan higher order function dari ketiga fungsi diatas
// Studi Kasus : Kita punya my videos dan banyak list, pada akhirnya kita ingin tahu list yang hanya javascript ada berapa video dan total durasinya berapa

// Langkah-langkah

// Ambil seluruh elemen video
// Array.from() -> mengubah bentuk menjadi array
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yang 'JAVASCRIPT LANJUTAN'
// Caranya make method includes : artinya terdapat apa?
// kita chaining (kalo chaining jangan dikasih (;))
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // Ambil durasi masing-masing video
    // dataset : untuk mengambil data yang ada di duration
    .map(item => item.dataset.duration)

    // ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        // pecah 10:30 -> [10, 30] : split ini namanya
        // cara mecahnya gunakan split dan pecah menggunakan delimiternya (dalam hal ini :)
        const parts = waktu.split(':')

            // ini untuk mengubah ke float biar gak jadi string
            // biar ga menjumlahkan string
            // kita kan mau menjumlahkan secara matematik
            .map(part => parseFloat(part));

        // kalikan parts ke 0 dengan 60, terus ditambah parts ke 1
        return (parts[0] * 60) + parts[1];
    })

    // jumlahkan satu2 semua detiknya
    .reduce((total, detik) => total + detik, 0);

// ubah formatnya menjadi jam, menit, dan detik
// gampangnya gini, kita kan udah punya detik 7564, yaudah bagi aja dengan 3600
const jam = Math.floor(jsLanjut / 3600);

// kita akan hitung menit
// kita akan ambil sisa menit dari 7564 td

// kita timpa jsLanjutnya agar supaya kita dapat sisanya td
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// Simpan di DOM
// kita ambil durasi
const pDurasi = document.querySelector('.total-durasi');

// kita manipulasi dengan text content agar tampil ke kelas total-durasi
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`

// selanjutnya kita gunakan kodingan dibaris 13 untuk kita tahu ada berapa banyak video yang ada tulisan JAVASCRIPT LANJUTAN nya
// setelah itu kan kita tahu untuk mengetahui ada berapa jumlah karakter menggunakan length
// maka 
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
// terus kita ambil kelas jumlah-video untuk kita masukan text-content nantinya
const pJmlVideo = document.querySelector('.jumlah-video');

// terus kita manipulasi dengan text content agar tampil ke kelas jumlah-video
pJmlVideo.textContent = `${jmlVideo} Video.`