// DOM Manipulation
// ini manipulasi elemen-elemennya dan nodenya

// DOM Manipulation Method
/*
1. Manipulasi Element
   Elemen yang sudah kita tangkap/seleksi sebelumnya terus mau merubah warna dan isinya.
2. Manipulasi node
   Ketika kita ingin misalnya menyisipkan elemen baru pada halaman, jadi misalkan kita punya 3 buah paragraf terus kita mau menyisipkan paragraf ke-4, itu namanya manipulasi node
   menghilangkan sebuah elemen juga itu bisa disebut manipulasi nodenya
*/


// Macam-macam manipulasi Node
/* 
1. document.createElement()

2. document.createTextNode()

3. node.appendChild()

4. node.inserBefore()

5. parentNode.removeChild()

6. parentNode.replaceChild()
*/

// buat elemen baru
// ini lebih ke appendChild
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// cara menampilkan/simpan pBaru diakhir section A / dibawah paragraf 3
const sectionA = document.querySelector('section#a');
sectionA.appendChild(pBaru);


// nah ini lebih ke insertBefore
const liBaru = document.createElement('li')
const teksLibaru = document.createTextNode('Item Baru');
// simpan tulisan ke dalam li
liBaru.appendChild(teksLibaru);

// ketika kita ingin menyisipkan kita akan melakukan 2 hal
// kita cari tau elemen tersebut : dlmm kasus ini adalah ul
// kita harus tangkap elemen setelahnya : dalam hal ini <li>item 2</li>
// ayo kita coba
// nah ini kita ambil ul
const ul = document.querySelector('section#b ul');
// inget nth-child angkanya bukan dari 0
// bisa juga dipersempit scopenya -> document ganti jadi ul
const li2 = ul.querySelector('li:nth-child(2)');

// nah kita simpan
ul.insertBefore(liBaru, li2);



// nah ini ke parentNode.removeChild()
// nah ini fungsinya untuk menghapus
// kita tangkap a aja karena parentnnya sudah ditangkap : sectionA (parent)
const link = document.getElementsByTagName('a')[0];
// nah bagian eksekusi
sectionA.removeChild(link);



// nah ini kita coba replace
// parentNode.replaceChild()
// seperti biasa kita harus tangkap parentnya
// section#b parentnya
const sectionB = document.getElementById('b')
// kita batasi scopenya, bukan dari document tp dari sectionB
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);


// nah kita mau tau apa aja yang baru tadi
pBaru.style.backgroundColor = '#ccc';
liBaru.style.backgroundColor = '#ccc';
h2Baru.style.backgroundColor = '#ccc';

// perubahan pure menggunakan javascript tanpa mengganggu html

// nah seiring berjalannya waktu psti ada perubahan terhadap method, tapi biasanya hampir sama pattern penggunaannya