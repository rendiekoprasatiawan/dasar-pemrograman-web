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


const close = document.querySelectorAll('.close');

// bisa pake for biasa
/* for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function (e) {
        // close[i].parentElement.style.display = 'none';

        e.target.parentElement.style.display = 'none';
    });
} */


// kalo pake forEach kita tidak usah menentukan iteratornya
// bisa pake forEach
close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        // mencegah penggunaan default dari elemenya
        e.preventDefault();
    });
});