<!-- 
  #### - Constant - ####
  - Sebuah identifier untuk menyimpan nilai
  
  # Beda variable dengan constant
  - variable juga sama untuk menyimpan nilai, tetapi
  - walaupun constanta juga menyimpan nilai, nilai pada constant tidak dapat diubah.

  # Untuk membuat constant keywordnya adalah:
  - define() : tidak bisa disimpan di class
  - const : bisa disimpan di class
-->

<!-- ## - penggunaannya nih - ## -->
<?php
// define("Nama", "Rendi Eko Prasatiawan");

// echo Nama;

// echo "<br>";

// const Umur = 21;
// echo Umur;

// class Coba
// {
//   // define("Nama", "Rendi Eko Prasatiawan");
//   const nama = "Rendi Eko Prasatiawan";
// }

// echo Coba::nama;
// echo "<br>";
?>

<!--
  #### - PHP juga itu punya Magic Constant -- ####
  1. __LINE__
  2. __FILE__
  3. __DIR__
  4. __FUNCTION__
  5. __CLASS__
  6. __TRAIT__
  7. __METHOD__
  8. __NAMESPACE__
-->

<!-- Let's try -->
<?php
echo __LINE__;
echo "<br>";

echo __FILE__;
echo "<br>";

echo __DIR__;
echo "<br>";

function coba()
{
  return __FUNCTION__;
}
echo coba();
echo "<br>";

class Coba
{
  public $kelas = __CLASS__;
}
echo Coba();
echo "<br>";

echo __TRAIT__;
echo "<br>";

echo __METHOD__;
echo "<br>";

echo __NAMESPACE__;
?>