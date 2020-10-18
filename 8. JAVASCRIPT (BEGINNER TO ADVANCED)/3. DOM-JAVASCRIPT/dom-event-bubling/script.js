// DOM Traversal -> Penulusaran DOM
// macam-macam DOM Traversal
/*
1. parentNode : belum tentu elemen HTML saja yang diambil
                - dan parentNode mengembalikan node
2. parentElement : pasti elemen HTML yang diambil
                - parent element mengembalikan elemen
3. nextSibling : saudara kandung dari elemen yang kita pilih
                - nextSibling mengembalikan node
4. nextElementSibling : saudara kandung juga tp elemen
                - nextElementSibling mengembalikan element
5. previousSibling : saudara kandung sebelum
                - previousSibling mengembalikan node
6. previousElementSibling : saudara kandung sebelum juga
                - previousElementSibling mengembalikan element
*/


/* const close = document.querySelectorAll('.close'); */

// bisa pake for biasa
/* for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function (e) {
        // close[i].parentElement.style.display = 'none';

        e.target.parentElement.style.display = 'none';
    });
} */


// kalo pake forEach kita tidak usah menentukan iteratornya
// bisa pake forEach
/* close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        // mencegah penggunaan default dari elemenya
        e.preventDefault();
        e.stopPropagation();
    });
});
 */

// event bubling itu ketika kita punya sebuah event (dalam kasus ini pada tombol close ini)
// dan ketika kita punya event baru
// misalnya saya buat lagi sebuah kejadiannya
/* const cards = document.querySelectorAll('.card');
cards.forEach(function(card){
    card.addEventListener('click', function(e){
        alert('ok');
    });
}); */
// nah ketika kita jalankan event yang pertama (event close yang ada pada kasus ini), event cardnya nanti juga dijalankan
// begitu juga disetiap event yang akan dibuat nantinya

// nah kalo diatas yang buat event cards itu dibuka komentarnya maka akan terlihat seblum kita hilangkan gelembung atau event bubling itu, dia akan menjalankan event card dan juga menjalankan event close setelahnya

// nah ini cara untuk menghentikan si bublingnya 
// caranya adalah kita akan menambahkan method pada event close
// methodnya yaitu : stopPropagation()

/* const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
        alert('ok');
    });
}); */
/* nah kita bisa liat yang jalan adalah event card dan sedangkan yang tombol closenya, dia hanya akan mengerjakan tombol closenya saja tidak ikut event cardnya */


// nah ini kita mau buat dia bisa ditambahkan card tapi di dalam browsernya
// ini berguna nantinya ketika kita mau nambahkan secara real time di browser, bukan di scriptnya

// nah caranya kita ambil dari parent dari parent(kakek)
// kakeknya kan container tuh
// nah kita simpen aja di containernya(pembungkus terluarnya)
// yaudah kita buat dari awal

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    // console.log(e.target);
    // nah javascript tau kita lagi ngeklik elemen atau apa saja deh

    // nah kita manfaatkan saja
    // kita melalui cek
    if (e.target.className = 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
}); /* nah dengan ini javascript ga peduli perubahan di dalam htmlnya. kalau tidak percaya, inspect terus ke element, terus edit as html, terus copy class card beserta bagiannya, nah muncul 5 kan jadinya. coba pencet close masih bisa ketutup semua  */