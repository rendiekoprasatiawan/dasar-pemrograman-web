<!-- #### - Variable Scope / Lingkup Variabel - #### -->
<?php
// local scope
function tampilX()
{
  $x = 10;
  echo $x;
}
tampilX();

echo "<br>";

// global scope
$y = 20;

function tampilY()
{
  global $y;
  echo $y;
}

tampilY();
?>

<!-- #### - Variable Superglobals - #### -->
<?php
// variabel superglobals ini adalah variabel2 yang sudah dimiliki oleh PHP yang bisa kita akses dimanapun dan kapanpun di dalam halaman PHP kita.
// Variable superglobals ini tipenya adalah array associative (Perlakukanlah sebagaimana kita memperlakukan array associative)
// perilaku beberapa superglobals ini berbeda-beda
// beberapa variable superglobals yang sudah dimiliki PHP:
// 1. $_GET
// 2. $_POST
// 3. $_REQUEST
// 4. $_SESSION
// 5. $_COOKIE
// 6. $_SERVER
// 7. $_ENV

echo "<br>";

// ### - MARI LIHAT - ###
var_dump($_GET);
echo "<br>";
var_dump($_POST);
echo "<br>";
var_dump($_REQUEST);
echo "<br>";
var_dump($_SESSION);
echo "<br>";
var_dump($_COOKIE);
echo "<br>";
var_dump($_SERVER);
echo "<br>";
var_dump($_ENV);

echo "<br>";

// ngintip apa aja yang ada di tiap2 variable superglobals
echo $_SERVER["SERVER_ADDR"];
echo "<br>";
echo $_SERVER["SERVER_NAME"];
echo "<br>";
echo $_SERVER["MYSQL_HOME"];
?>

<!-- #### - PERLU DIINGAT - #### -->
<!-- #### - KITA MEMPELAJARI METODE REQUEST - #### -->
<!-- #### - VARIABLE GET DAN POST SUPERGLOBALS BERBEDA DENGAN METODE REQUEST GET DAN POST - #### -->
<!-- #### - MARI KITA LIHAT - #### -->
<?php
// PERBEDAAN
?>