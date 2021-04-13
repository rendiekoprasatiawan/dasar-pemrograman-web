<?php
class Komik extends Produk implements InfoProduk
{
  public $jmlHalaman;

  public function __construct($judul, $penulis, $penerbit, $harga,  $jmlHalaman)
  {
    parent::__construct($judul, $penulis, $penerbit, $harga);
    $this->jmlHalaman = $jmlHalaman;
  }

  public function getInfo()
  {
    // komik : Naruto | Masashi Kisimoto, Shonen Jump, (Rp. 30000) - 100 Halaman
    $str = "{$this->judul} | {$this->getLabel()} (Rp. {$this->harga})";

    return $str;
  }

  public function getInfoProduk()
  {
    $str = "Komik : " . $this->getInfo() . " - {$this->jmlHalaman} Halaman.";
    return $str;
  }
}
