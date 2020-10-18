// membuat object dengn literal
// buat objek mahasiswa
var mhs1 = {
    nama: 'rendi eko prasatiawan',
    nim: '1657051005',
    email: 'rendiekoprasatiawan99@gmail.com',
    jurusan: 'Ilmu Komputer'
};

var mhs2 = {
    nama: 'reko pras',
    nim: '1657051005',
    email: 'rendiekoprasatiawan99@gmail.com',
    jurusan: 'Ilmu Komputer'
};


// ini membuat object dengan function declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

// ini untuk manggil
var mhs3 = buatObjectMahasiswa('eko saputra', '1657169348', 'ekospapk@gmail.com', 'teknik elketro');


// ini membuat object dengan constructor
// ini adalah function yang khusus membbuat object
// huruf besar diawal untuk buat object Mahasiswa : M
function Mahasiswa(nama, nim, email, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

// cara manggil constructor harus ada new nyaa
// ketika tidak makai new itu akan dikatakan sebagai function declaration
// jadi kalo mau make object harus wajib pake new
var mhs4 = new Mahasiswa('eko juanda', '1323169348', 'ekojuannda@gmail.com', 'teknik mesin');