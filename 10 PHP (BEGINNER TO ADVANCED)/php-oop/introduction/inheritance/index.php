<!-- 
  ### - Inheritance - ###
  // karakteristik
  - Menciptakan hierarki antar kelas (parent & child)
  - Child Class, mewarisi semua property & method dari parentnya (yang visible)
  - Child Class, memperluas (extends) fungsionalitas dari parentnya

 -->

<!-- ini studi kasus pertama yang di pendahuluan tentang penjualan produk -->
<!-- ini studi kasus pertama yang di pendahuluan tentang penjualan produk -->
<?php
class Produk
{
  // property
  public
    $judul,
    $penulis,
    $penerbit,
    $harga,
    $jmlHalaman,
    $waktuMain;

  // method
  // construct
  public function __construct($judul = "judul", $penulis = "penulis", $penerbit = "penerbit", $harga = 0, $jmlHalaman = 0, $waktuMain = 0)
  {
    $this->judul = $judul;
    $this->penulis = $penulis;
    $this->penerbit = $penerbit;
    $this->harga = $harga;
    $this->jmlHalaman = $jmlHalaman;
    $this->waktuMain = $waktuMain;
  }

  public function getLabel()
  {
    return "$this->penulis, $this->penerbit";
  }

  public function getInfoProduk()
  {
    // komik : Naruto | Masashi Kisimoto, Shonen Jump, (Rp. 30000) - 100 Halaman
    $str = "{$this->judul} | {$this->getLabel()} (Rp. {this->harga})";

    return $str;
  }
}

class Komik extends Produk
{
  public function getInfoProduk()
  {
    $str = "Komik : {$this->judul} | {$this->getLabel()} (Rp. {$this->harga}) - {$this->jmlHalaman} Halaman.";
    return $str;
  }
}

class Game extends Produk
{
  public function getInfoProduk()
  {
    $str = "Game : {$this->judul} | {$this->getLabel()} (Rp. {$this->harga}) - {$this->waktuMain} Jam.";
    return $str;
  }
}

class CetakInfoProduk
{
  public function cetak(Produk $produk)
  {
    $str = "{$produk->judul} | {$produk->getLabel()} (Rp. {$produk->harga})";
    return $str;
  }
}


$produk1 = new Komik("Naruto", "Masashi Kisimoto", "Shonen Jump", 30000, 100, 0);
$produk2 = new Game("Uncharted", "Neil Druckman", "Shony Computer", 250000, 0, 50);
echo $produk1->getInfoProduk();
echo "<br>";
echo $produk2->getInfoProduk();
echo "<br>";

?>