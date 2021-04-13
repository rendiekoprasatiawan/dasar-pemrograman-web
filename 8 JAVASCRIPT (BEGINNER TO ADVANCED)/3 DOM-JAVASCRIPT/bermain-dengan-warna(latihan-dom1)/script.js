// ini kita buat sebuah warna yang berubah-ubah
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.addEventListener('click', function () {
    document.body.classList.toggle('abu-abu');
});


// nah ini kita buat sebuah warna random ketika di klik
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 0);
    const g = Math.round(Math.random() * 255 + 0);
    const b = Math.round(Math.random() * 255 + 0);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


// nah ini kita buat random tapi slider make range
const sectionA = document.querySelector('section#a');

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sectionA.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ',' + b + ')';
});


// nah itu td gunain slider
// tapi kita akan mencoba mengubah warna ketika mouse digerakkan. Keren kan??
// ini tergantung pada lebar browsernya

// pertama
// kita nangkap body dulu agar kita tahu mouse ketika digerakkan nantinya
document.body.addEventListener('mousemove', function (e) {
    // posisi mouse nih
    // make : x dan y, x untuk horizontal dan y vertical
    // make : event : e.clientY atau e.clientX
    // nah ini baru kita tahu ukuran browser
    // codingnya kek gini
    // window.innerWidth : agar kita tahu lebar dari kotak yang putih lah atau document lah gitu || ini untuk X karena dia kan horizontal sama kayak lebar lah gitu
    // window.innerHeight : ini untuk Y lah gitu
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ', 100)';

    // nah tapi ada sedikit perbaikan. karena beda aja kita simpan listener di body dan body itu isi content, kalau mouse digerakkan dibawah content maka ya gabisa berubah warnanya
    // cara ngakalinnya lewat css juga bisa
    // berarti : html, body {height : 100%}

});