// DOM events
// events tidak sama dengan even
// even = genap
// events = kejadian
// events pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM..
// kejadiannya itu dilakukan oleh user
// ketika kita mengklik pada mouse kita, mengetikkan pada keyboard, menginputkan sesuatu pada keyboard kita dll.
// semua kejadian yang dilakukan olehh user

// atau events juga bisa dilakukan otomatis oleh API
// ketika kita menjalankan animasi menggunakan css nah ketika animasi selesai dijalankan kita bisa menangkap events/kejadiannya.
// atau misalnya halaman kita selesai di load ke dalam memori
// -developer mozilla

// bagaimana penerapannya?
// nih caranya :
/* 
1. Event Handler
   - inline HTML attribute
   - element method
2. addEventListener()
*/

// Event Handler
// cara buat Event Handler
// kita memanggil sebuah keyword namanya on lalu diikuti dengan eventnya apa?
// atau gini nih : on<event>
// contoh
// jika user menekan tombol pada mouse atau pada trackpad event yang bisa kita dengarkan namanya onclick

// langsung coba aja deh
// kita akan menggunakan onclick tadi
// ketika kita mengclick paragraf 3 maka dia akan berubah
// bisa aja pake css, tapi ga permanen
// maka yaudah kita make event


// contoh nih
// kalau kita ingin menggunakan warna background tapi tidak menggunakan even tadi bisa aja
/* const p3 = document.querySelector('.p3');
p3.style.backgroundColor = '#ccc'; */
// tapi ini udah langsung diubah dari awal, bukan kita click terus dia berubah
// maka harus pake event aja


// nih kalo make event
// kalau event handler kan ada 2 : inline dan buat method
// cuma inline gausa deh
// nah kita gunain method aja deh, tanpa menyentuh html langsung
/* const p3 = document.querySelector('.p3');

function ubahWarna() {
    p3.style.backgroundColor = '#ccc';
}

p3.onclick = ubahWarna; */



// nah coba kita pake addEventListener()
// fungsi sama tapi ada bedanya
// yang akan kita lakukan adalah ketika paragraf 4 ini diklik maka kita akan menambahkan list 'item baru' dibawah 'item 3'
// jadi setiap kita klik sekali maka akan nambah sebuah item baru

// pertama kita tangkap dulu si paragraf yang akan kita klik
/* const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
    const ul = document.querySelector("section#b ul");
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Item baru');

    liBaru.appendChild(teksLiBaru);

    ul.appendChild(liBaru);
}); */


// nih, kita kan udah tau cara penggunaan keduanya
// lalu beda Event Handler dan addEventListener() apa?
// perbedaanya adalah ketika kita memberikan lebih dari satu perubahan pada sebuah event, jika kita menggunakan event handler maka perubahan terakhir yang dilakukan akan menimpa perubahan sebelumnya. Sedangkan menggunakan addEventListener() dia akan menambah perubahannya.

// nih contohnnya
// ubah background sepertti td
/* const p3 = document.querySelector('.p3');
p3.onclick = function () {
    p3.style.backgroundColor = '#ccc';
}
p3.onclick = function () {
    p3.style.color = 'salmon';
} */

// nah bisa dilihatkan yang terakhir dibuat yang akan menimpa yang terdahulu dibuat
// cara diatas itu kalo menggunakan event handler


// nah kalo make addEventListener()
const p3 = document.querySelector('.p3');
p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = '#ccc';
});
p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'white';
});
// nah kalo ini keduanya akan tampil/dilakukan


// nah setelah kita tahu perbedaanya kita pengen tau apa saja sih event yang ada dalam DOM ini
// nih, meskipun belum lengkap seenggaknya bisa lah
/* 
DAFTAR EVENTS
1. Mouse Event
   tiap kategprinya ada
   - click
   - dblclick
   - mouseover
   - mouseenter
   - mouseup
   - wheel
   - ...
2. Keyboard Event
3. Resources Event
4. Focus Event
5. View Event
6. Form Event
7. CSS Animation & Transition Event
8. Drag & Drop Event
dll.

daftar lengkapnya di : https://developer.mozilla.org/en-US/docs/Web/Events
*/