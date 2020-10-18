// teknik event delegation
// ambil container
// (e) : untuk menandakan eventnya
const container = document.querySelector('.container');

// tangkap elemen yang besar agar bisa diubah
const jumbo = document.querySelector('.jumbo');

// ambil thumbnail
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function (e) {

    // cek apakah yang di-klik adalah thumb
    if (e.target.className = 'thumb') {

        // maka ini akan mengubah gambar jumbo sesuai  dengan yang di klik di thumb
        jumbo.src = e.target.src;

        // ketika elemen thumb di klik elemen jumbo di kasih kelas baru namanya fade
        // kita bisa tahu kalau fade itu animasi yang dibuat di css
        jumbo.classList.add('fade');
        // nah ada problem, problemnya animasi berjalan hanya sekali saja (pertama klik saja)

        // maka kita harus gunakan setTimeOut()
        setTimeout(function () {
            // nah tadi kita tambahkan
            // skrg kita hapus pada 0.5 detik atau 500ms
            jumbo.classList.remove('fade');
        }, 500);

        // nah sebelum ditambahkan fitur ini, ketika di klik thumbnya dia transparan, akan tetapi ketika cursornya di gerakkan transparannya tidak terkunci
        // maka dari itu kita buat biar ketika di klik transparannya bisa terkunci
        // buat animasi active terus
        /* e.target.classList.add('active'); */
        // nah tapi ada problem baru, ia dia dikunci tapi ketika kita pindah/klik thumb/gambar yang lain dia masih terkunci juga, gak ilang

        // nah solusinya kita harus melakukan looping terhadap semua thumbnail untuk menghilangkan kelas activenya kalau ada
        // pertama ambil thumbnail dengan cara const dkk diatas
        // nah ayok kita looping kalo dah diambil thumbnya
        thumbs.forEach(function (thumb) {
            // ada beberapa cara
            // 1. dicek dulu ada gak kelas activenya, kalau ada hapus
            if (thumb.classList.contains('active')) {
                thumb.classList.remove('active');
            }

            // 2. nah cara kedua ini lebih simple, cara ini memaksa semua kelasnya menjadi thumb
            // nah mau kelasnya apapun ubah jadi thumb
            /* thumb.className = 'thumb'; */
        });

        // lalu setelah hilang semua tambahkan active hanya untuk yang kita klik saja
        e.target.classList.add('active');
    }
});