<!-- Di dalam sebuah kelas kita bisa menambahkan property dan method -->
<!-- apa itu property dan method? -->
<!-- 
  #### - Property - ####
  - Merepresentasikan data/keadaan dari sebuah object
  - Variable yang ada di dalam object (member variable)
  - Sama seperti variable di dalam PHP, ditambah dengan visibility di depannya 
-->

<!-- 
  #### - Method - ####
  - Merepresentasikan perilaku dari sebuah object
  - Function yang ada di dalam object
  - Sama seperti function di dalam PHP, ditambah dengan visibility di depannya
-->

<!-- #### - Studi Kasus Property dan Method - #### -->
<!--
  ### - MOBIL - ###
  1. Property
  - nama
  - merk
  - warna
  - kecepatanMaksimal
  - jumlahPenumpang

  2. Method
  - tambahKecepatan
  - kurangiKecepatan
  - gantiTransmisi
  - belokKiri
  - belokKanan
-->

<!-- ini studi kasus pertama yang di pendahuluan tentang penjualan produk -->
<?php
class Produk
{
  // property
  public
    $judul = "judul",
    $penulis = "penulis",
    $penerbit = "penerbit",
    $harga = 0;

  // method
  public function getLabel()
  {
    return "Komik : 
    <br> 
    Penulis : $this->penulis
    <br> 
    Penerbit : $this->penerbit";
  }
}

// $produk1 = new Produk();
// $produk1->judul = "naruto";
// var_dump($produk1);

// $produk2 = new Produk();
// $produk2->judul = "Uncharted";
// $produk2->tambahProperty = "hahaha";
// var_dump($produk2);

$produk3 = new Produk();
$produk3->judul = "Naruto";
$produk3->penulis = "Masashi Kisimoto";
$produk3->penerbit = "Shonen Jump";
$produk3->harga = 30000;

echo $produk3->getLabel();
echo "<br>";

$produk4 = new Produk();
$produk4->judul = "Uncharted";
$produk4->penulis = "Neil Druckman";
$produk4->penerbit = "Sony Computer";
$produk4->harga = 250000;
echo "<hr>";
echo "Komik : 
<br>
Penulis : $produk3->penulis 
<br>
Penerbit : $produk3->penerbit";
echo "<br>";

echo "<hr>";
echo $produk3->getLabel();
echo "<br>";

echo "<hr>";
echo "Games : 
<br> 
Penulis : $produk4->penulis 
<br> 
Penerbit : $produk4->penerbit";

?>