<!-- 
  ### - Interface - ###
  - Kelas abstrak yang sama sekali tidak memiliki implementasi
  - Murni merupakan template untuk kelas turunannya : sama sekali tidak ada implementasinya
  - Tidak boleh memiliki property, hanya deklarasi method saja
  - Semua method harus dideklarasikan dengan visibility public
  - Boleh mendeklarasikan __construct()
  - Satu kelas boleh mengimplementasikan banyak interface
  - Dengan menggunakan type-hinting dapat melakukan 'dependency injection'
  - Pada akhirnya akan mencapai Polymorphism
-->
<!-- 
  ### - Contoh dengan studi kasus buah apel - ###
  <?php
  interface Buah
  {
    public function makan();
    public function setWarna($warna);
  }

  interface Benda
  {
    public function setUkuran($ukuran);
  }

  class Apel implements Buah
  {
    protected $warna;
    public function makan()
    {
      // kunyah
      // sampai bagian tengah
    }
    public function setWarna($warna)
    {
      $this->warna = $warna;
    }

    public function setUkuran($ukuran)
    {
      $this->ukuran = $ukuran;
    }
  }

  class Jeruk implements Buah
  {
    protected $warna;
    public function makan()
    {
      // kupas
      // kunyah
    }
    public function setWarna($warna)
    {
      $this->warna = $warna;
    }
  }
  ?>
  -->

<!-- #### - Ini studi kasus real Produk kita - ####-->

<?php
interface InfoProduk
{
  public function getInfoProduk();
}

abstract class Produk
{
  // property
  protected
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

  abstract public function getInfo();
}

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

class Game extends Produk implements InfoProduk
{
  public $waktuMain;

  public function __construct($judul, $penulis, $penerbit, $harga,  $waktuMain)
  {
    parent::__construct($judul, $penulis, $penerbit, $harga);
    $this->waktuMain = $waktuMain;
  }

  public function getInfo()
  {
    // komik : Naruto | Masashi Kisimoto, Shonen Jump, (Rp. 30000) - 100 Halaman
    $str = "{$this->judul} | {$this->getLabel()} (Rp. {$this->harga})";

    return $str;
  }

  public function getInfoProduk()
  {
    $str = "Game : " . $this->getInfo() . " - {$this->waktuMain} Jam.";
    return $str;
  }
}

class CetakInfoProduk
{
  public $daftarProduk = [];

  public function tambahProduk(Produk $produk)
  {
    $this->daftarProduk[] = $produk;
  }
  public function cetak()
  {
    $str = "DAFTAR PRODUK : <br>";

    foreach ($this->daftarProduk as $prod) {
      $str .= "- {$prod->getInfoProduk()} <br>";
    }
    return $str;
  }
}


$produk1 = new Komik("Naruto", "Masashi Kisimoto", "Shonen Jump", 30000, 100);
$produk2 = new Game("Uncharted", "Neil Druckman", "Shony Computer", 250000, 50);

$cetakProduk = new CetakInfoProduk();
$cetakProduk->tambahProduk($produk1);
$cetakProduk->tambahProduk($produk2);
echo $cetakProduk->cetak();
