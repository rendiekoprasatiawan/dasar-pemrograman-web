<!-- 
  #### - class dan object - ####
  - filosofinya nih : ilustrasinya dengan denah rumah. Denah rumah kan pada dasarnya untuk membuat sebuah rumah. Rumah itu bagian dari kompleks perumahan bukan?. dalam sebuah kompleks perumahan yang dibangun owner biasanya ada banyak rumah yang sama bukan?. Nah rumah yang sama tersebut sama, karena dia memakai denah rumah yang sama gitu. Pada akhirnya gini, sebuah denah rumah itu dianggap sebuah class dimana disini itu dia adalah  bentuk instance dari rumah yang terbuat. Sedangkan rumah itu adalah object yang dihasilkan dari denah rumah tersebut. dan dalam sebuah kompleks perumahan bisa ada banyak rumah yang sama, begitupun dengan object.. dia juga bisa ada banyak yang sama.

  MAKA :
-->
<!-- #### - CLASS - ####
  - Template/blueprint untuk membuat instance dari object
  - Class mendefinisikan object
  - Menyimpan perilaku data dan perilaku yang disebut dengan property dan method

  - CARA MEMBUAT CLASS
  diawali dengan menuliskan keyword class, diikuti nama dan dibatasi dengan {} untuk menyimpan property dan method

  - ATURAN PENAMAAN CLASS
  untuk menamai class simple, aturannya penamaannya sama seperti variable

  - CONTOH CLASS
  <?php
  class Coba
  {
    public $a;

    public function b()
    {
      // ....
    }
  }

  ?> -->

<!-- 
  #### - Object - #### 
  - Instance yang didefinisikan oleh class
  - Banyak object dapat dibuat menggunakan satu class
  - Object dibuat dengan menggunakan keyword new

  - CONTOH OBJECT
  <?php
  // buat dulu class
  class Coba2
  {
  }

  // membuat object instance dari class
  $a = new Coba();
  $b = new Coba();
  $c = new Coba();

  var_dump($a);
  ?>
-->

<!-- nih kita ada studi kasus -->
<?php
// jualan produk
// komik
// game
class Produk
{
}
$produk1 = new Produk();
$produk2 = new Produk();
?>