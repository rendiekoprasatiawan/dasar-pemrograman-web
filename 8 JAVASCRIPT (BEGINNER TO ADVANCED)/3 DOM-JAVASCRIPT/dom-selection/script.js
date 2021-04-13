// DOM Selection Method
/* 
1. getElementById()
   kita memilih element yang ada di dalam DOM kita berdasarkan idnya.
   kita ingat bahwa kita hanya bisa memiliki 1 id saja di halaman web kita
   method ini menghasilkan sebuah elemen
2. getElementsByTagName()
   javascript tolong carikan saya elemen-elemen yang memiliki nama tag tertentu
   method ini menghasilkan HTMLCollection
3. getElementsByClassName()
   javascript tolong carikan saya class-class yang memiliki nama class tertentu
   method ini menghasilkan HTMLCollection
4. querySelector()
   untuk mencari elemen berdasarkan selector
   method ini menghasilkan elemen
5. querySelectorAll()
   untuk mencari elemen berdasarkan selector
   method ini menghasilkan nodeList
*/


// getElementById() -> mengembalikan elemen
// penulisannya harus ada node root diawal methodnya
// nood rootnya kan document
// maka : document.getElementById()
// contoh 
/* const judul = document.getElementById('judul'); */
// kita bisa melakukan apa saja terhadap element judul ini
// asal kita sudah menangkap elemennya
// misal kita merubah  tulisan warnanya merah
/* judul.style.color = 'red'; */
// misal ubah backgroundcolornya
// cara penulisannya harus camel casing
/* judul.style.backgroundColor = '#ccc'; */
// kita bisa mengubah tulisan tanpa menyentuh htmlnya
/* judul.innerHTML = 'RENDI EKO PRASATIAWAN' */


// Kita bisa menggunakan
// getElementsByTagName() -> dia mengembalikan HTMLCollection
/* const p = document.getElementsByTagName('p'); */
// ini harus diberi index
// karena sama seperti array meskipun bukan array
// nih contohnya
// kalau mau ngubah satu
/* p[0].style.backgroundColor = 'lightblue'; */
// kalau mau semuanya (ini tergantung kalo elemennya lebih dari satu apa nggaknya)
// kita bisa make looping
/* for (let i = 0; i < p.length; i++) {
   p[i].style.backgroundColor = 'lightblue';
} */
// dan ini ngereplace yang ini : p[0].style.backgroundColor = 'lightblue';
// dan semuanya langsung berubah
/* 
catatan : meskipun elemennya hanya ada 1 dia akan tetap menjadi HTMLCollection
-kalau kita ingin mengubahnya karena tidak enak kalau cuma 1 elemen tapi dia jadi HTMLCollection
MAKA:
*/
// kita bisa mngubahnya dari :
// const h1 = document.getElementsByTagName('h1');
// ini masih HTMLCollection

// menjadi :
/* const h1 = document.getElementsByTagName('h1')[0]; */
// karena kita menambahkan indeks (ingat karena dia cuma 1 bukan berarti indeksnya 1, tapi ingat bahwa indeks dimulai dari 0)
// maka kita bisa mengubah h1nya menggunakan
/* h1.style.fontSize = '50px'; */



// selannjutnya kita juga bisa menggunakan
// getElementsByClassName() -> mengembalikan HTMLCollection
// maka codingnya seperti ini
/* const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah melalui javascript'; */
// kalau mau ngubah semuanya
// sama make perulangan


// selanjutnya kita bisa menggunakan
// querySelector() -> mengembalikan elemen
// maka codingnya seperti ini
/* const p4 = document.querySelector('section#b p');
p4.style.color = 'red';
// p4.style.backgroundColor = 'green';
p4.innerHTML = 'paragraf ini diubah'

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'green';
 */

// selanjutnya kita juga bisa menggunakan
// querySelectorAll() -> mengembalikan nodeList
// maka codingnya seperti ini
/* const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
   p[i].style.backgroundColor = '#ccc';
}
 */



// ini mengubah noderoot
// mudah banget loh
// kita akan mentarget paragraf4
// dia tidak punya id
// dia tidak punya class
// tapi dia punya tag
// nah bagaimana?

// cara pertama kita bisa gunakan TagName
/* const p4 = document.getElementsByTagName('p'); */
// nah ke indeks berapa dia?
// indeks dimulai dari 0, sedangkan p jumlahnya ada 4
// maka ada ['0', '1', '2', '3']
// jadi
/* p4[3].style.backgroundColor = '#ccc'; */


// cara yang lain
// kita bisa ubah noderoot
// kita persempit scope pencariannya
// jadinya
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = '#ccc';