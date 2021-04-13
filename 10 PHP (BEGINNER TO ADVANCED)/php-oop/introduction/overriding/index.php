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
    $harga;

  // method
  // construct
  public function __construct($judul = "judul", $penulis = "penulis", $penerbit = "penerbit", $harga = 0)
  {
    $this->judul = $judul;
    $this->penulis = $penulis;
    $this->penerbit = $penerbit;
    $this->harga = $harga;
  }

  public function getLabel()
  {
    return "$this->penulis, $this->penerbit";
  }

  public function getInfoProduk()
  {
    // komik : Naruto | Masashi Kisimoto, Shonen Jump, (Rp. 30000) - 100 Halaman
    $str = "{$this->judul} | {$this->getLabel()} (Rp. {$this->harga})";

    return $str;
  }
}

class Komik extends Produk
{
  public $jmlHalaman;

  public function __construct($judul, $penulis, $penerbit, $harga,  $jmlHalaman)
  {
    parent::__construct($judul, $penulis, $penerbit, $harga,  $jmlHalaman);
    $this->jmlHalaman = $jmlHalaman;
  }

  public function getInfoProduk()
  {
    $str = "Komik : " . parent::getInfoProduk() . " - {$this->jmlHalaman} Halaman.";
    return $str;
  }
}

class Game extends Produk
{
  public $waktuMain;

  public function __construct($judul, $penulis, $penerbit, $harga,  $waktuMain)
  {
    parent::__construct($judul, $penulis, $penerbit, $harga,  $waktuMain);
    $this->waktuMain = $waktuMain;
  }

  public function getInfoProduk()
  {
    $str = "Game : " . parent::getInfoProduk() . " - {$this->waktuMain} Jam.";
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


$produk1 = new Komik("Naruto", "Masashi Kisimoto", "Shonen Jump", 30000, 100);
$produk2 = new Game("Uncharted", "Neil Druckman", "Shony Computer", 250000, 50);
echo $produk1->getInfoProduk();
echo "<br>";
echo $produk2->getInfoProduk();
echo "<br>";

?>