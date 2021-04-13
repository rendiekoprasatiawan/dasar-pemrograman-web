<!-- 
  #### - Static Keyword - ####
  - Class merupakan template dari object

  # catatan nih :
  - sebetulnya kita bisa mengakses property dan method dalam konteks class : maksudnya adalah kita bisa mengakses property dan method tanpa instansiasi dari class tersebut. Ini memanfaatkan static keyword
-->

<!-- 
  Jadi gini:
  # Static Keyword
  - Member yang terikat dengan class, bukan dengan object
  - Nilai static akan selalu tetap meskipun object di-instansiasi berulang kali
  - Membuat kode menjadi 'Procedural'
  - Biasanya digunakan untuk membuat fungsi bantuan / helper
  - Atau digunakan di class-class utility pada Framework
-->

<!-- <?php
      class ContohStatic
      {
        public static $angka = 1;

        public static function halo()
        {
          return "Halo." . self::$angka++ . "Kali." . "\n";
        }
      }
      echo ContohStatic::$angka;
      echo "<br>";
      echo ContohStatic::halo();
      echo "<hr>";
      echo ContohStatic::halo();

      ?> -->

<?php
class Contoh
{
  public static $angka = 1;
  public static function halo()
  {
    return "Halo\n" . self::$angka++ . "\nkali." . "<br>";
  }
}

$obj = new Contoh;
echo $obj->halo();
echo $obj->halo();
echo $obj->halo();

echo "<hr>";
$obj2 = new Contoh;
echo $obj2->halo();
echo $obj2->halo();
echo $obj2->halo();
?>