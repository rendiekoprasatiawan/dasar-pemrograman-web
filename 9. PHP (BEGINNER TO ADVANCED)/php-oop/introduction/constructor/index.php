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
}

$produk1 = new Produk("Naruto", "Masashi Kisimoto", "Shonen Jump", 30000);
$produk2 = new Produk("Uncharted", "Neil Druckman", "Shony Computer", 250000);
echo "Komik : {$produk1->getLabel()}";
echo "<br>";
echo "Komik : {$produk2->getLabel()}";


?>