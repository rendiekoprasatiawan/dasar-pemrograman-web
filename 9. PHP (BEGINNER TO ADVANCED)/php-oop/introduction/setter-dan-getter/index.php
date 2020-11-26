<!-- 
  ### - Setter dan Getter - ###
  - setter dan getter digunakan karena untuk menghindari ketika kita membuat sebuah property dengan visibility public, karena kita tidak seharusnya membiarkan bagiann dari kelas kita bisa mengakses class kita secara langsung. Nah untuk itu kita harus ngubah class kita menjadi protected atau private tergantung dari design kita. Nah setelah kit mengubah visibilitynya menjadi protected atau private artinya kita kita tidak lagi punya akses secara langsung, jika kita mau mendapatkan isi dari sebuah property atau bahkan menset baru ke sebuah property. Untuk itulah kita butuh sebuah method, method untuk membaca atau melihat isi dari property ataupun mengubah isinya, nah method itu nantinya akan kita sebut dengan setter dan getter. Setter itu method untuk ngeset dan getter untuk nge get.
-->
<?php
class Produk
{
  // property
  private
    $judul,
    $penulis,
    $penerbit,
    $diskon = 0,
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

  public function setJudul($judul)
  {
    if (!is_string($judul)) {
      throw new Exception("Tipe data harus string");
    }
    $this->judul = $judul;
  }

  public function getJudul()
  {
    return $this->judul;
  }

  public function setPenulis($penulis)
  {
    if (!is_string($penulis)) {
      throw new Exception("Tipe data harus string");
    }
    $this->penulis = $penulis;
  }

  public function getPenulis()
  {
    return $this->penulis;
  }

  public function setPenerbit($penerbit)
  {
    if (!is_string($penerbit)) {
      throw new Exception("Tipe data harus string");
    }
    $this->penerbit = $penerbit;
  }

  public function getPenerbit()
  {
    return $this->penerbit;
  }

  public function setDiskon($diskon)
  {
    $this->diskon = $diskon;
  }

  public function getDiskon()
  {
    return $this->diskon;
  }

  public function getHarga()
  {
    return $this->harga - ($this->harga * $this->diskon / 100);
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
    parent::__construct($judul, $penulis, $penerbit, $harga);
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
    parent::__construct($judul, $penulis, $penerbit, $harga);
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

$produk2->setDiskon(50);
echo $produk2->getHarga();
echo "<br>";

$produk1->setPenulis("Rendi Eko P");
echo $produk1->getPenulis();

?>