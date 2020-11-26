<!-- 
  #### - Abstract Class - ####
  
  # Pengertian
  - Sebuah kelas yang tidak dapat di-instansiasi : jadi kita tidak bisa bikin object dari kelas abstrak ini, bisa di-instansiasi tetapi yang di-instansiasi adalah kelas turununnya
  - Kelas abstrak disebutnya, kenapa? ya karena tadi tidak dapat di-instansiasi, pokoknya yang jadi kelas sesungguhnya itu adalah kelas turunannya
  - Mendefinisikan interface untuk kelas lain yang menjadi turununnya
  - Berperan sebagai 'kerangka dasar' untuk kelas turunannya
  - Memiliki minimal 1 method abstract : nah method ini nantinya akan kita anggap kerangka dari method yang akan kita buat di kelas-kelas turunannya
  - Digunakan dalam 'pewarisan'/'inheritance' untuk 'memaksakan' implementasi method abstrak yang sama untuk semua kelas turunannya : Jdi gini, di dalam kelas abstract kita punya method abstract yang hanya interfacenya aja, namanya aja, gak ada isinya. Nah isinya nanti kita tuliskan di kelas-kelas turunannya dengan menggunakan method yang namanya sama
  - Semua kelas turunan, harus mengimplementasikan method abstract yang ada di kelas abstraknya
  - Kelas abstract boleh memiliki property / method reguler
  - Kelas abstract boleh memiliki property / static method
-->
<!-- 
  #### - Kenapa menggunakan kelas abstrak - ####
  - Merepresentasikan ide atau konsep dasar yang nantinya akan diimplementasikan di kelas-kelas turunannya: yang pasti penggunaan kelas abstract ini bukan masalah benar dan salah, tapi ini adalah keputusan desain, keputusan perancangan dari kelas. Kalo mau cuman hanya OOP dan benar2 mau OOP yasudah pakai saja tidak masaalah.
  - "Composotion over inheritance" : Jadi sebaiknya kita melakukan komposisi dibandingkan kita melakukan inheritance atau pewarisan begitu saja. Tapi, sebetulnya tanpa melakukan kelas abstrak pun bisa, hanya menggunakan inheritance saja.
  - Salah satu cara menerapkan konsep OOP Polimorphism (konsep OOP yang lebih kompleks lagi)
  - Sentralisasi object
  - Mempermudah pengerjaan tim
-->
<!-- 
  #### - Contoh Kasus - ####
  // jadi kita punya sebuah studi kasus

  - kita punya class Buah
  <?php
  class Buah1
  {
    // property
    private $warna;

    // method
    public function makan()
    {
      // kunyah
      // nyam.. nyam.. nyam..
    }

    // method
    public function setWarna($warna)
    {
      $this->warna = $warna;
    }
  }

  class Apel extends Buah1
  {
    // method
    public function makan()
    {
      // kunyah
      // sampai bagian tengah
    }
  }

  class Jeruk extends Buah1
  {
    // method
    public function makan()
    {
      // kupas
      // kunyah
    }
  }

  // nah misalnya apel ini dimakan, maka rasanya seperti apel kan
  $apel = new Apel();
  $apel->makan();

  // akan tetapi..
  $buah = new Buah1();
  $buah->makan();
  // ketika disodorkan makan buah, rasa buah bagaimana? bingung kan karena harusnya kita harus tahu dulu jenis buah apa yang akan dimakan. Nah maka dari itu, kita bisa gunakan abstract di class Buah.

  // jadi kesimpulannya kelas turunan yang akan di-instansiasi dan kelas utama/parentnya tidak. (tapi ini tentatif, tergantung deesain ide yang ada pada programmer)


  # nah ini kita bakal coba buat class abstrack
  // sebenernya kita kita tinggal tambahkan abstract di depan class untuk CLASS dan untuk METHOD kita tambahkan abstract di depan visibility (dalam hal ini public)

  // jadinya seperti ini :

  // classnya adalah class abstract
  abstract class Buah2
  {
    private $warna;

    // maka methodnya juga method abstract
    abstract public function makan();

    public function setWarna($warna)
    {
      $this->warna = $warna;
    }
  }
  ?>
-->

<!--
  ### - Ini contoh lain dari abstract - ###
  - class Mobil extends Kendaraan
  - class Laptop extends Komputer
  - class Email extends Komunikasi
  - ....
-->


<!-- #### - Ini Implementasi Abstract dari Studi Kasus yang pernah dibuat - ####  -->
<?php
abstract class Produk
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

  abstract public function getInfoProduk();

  public function getInfo()
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
    $str = "Komik : " . $this->getInfo() . " - {$this->jmlHalaman} Halaman.";
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
