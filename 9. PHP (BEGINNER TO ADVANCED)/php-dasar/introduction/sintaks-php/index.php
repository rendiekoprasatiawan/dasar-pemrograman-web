<?php
/* ini komentar untuk banyak baris
ini baris pertama
ini baris kedua
*/

// ini hanya komentar dengan 1 baris

// ini adalah materi tentang sintaks php

/* standar output PHP adalah:
1. echo : untuk mencetak tulisan atau variabel
2. print : untuk mencetak tulisan atau variabel
3. print_r : khusus untuk mencetak isi array
4. var_dump : khusus untuk melihat isi dari variabel, nanti akan tampil informasi mengenai variable tersebut

print_r dan var_dump hanya digunakan tahap development/debugging dikenalnya
*/

echo "Rendi Eko Prasatiawan";

print_r("rendi eko prasatiawan");

var_dump("rendi eko prasatiawan");

echo "jum'at";
?>


// php dalam html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h1>Halo, Selamat datang <?= "Rendi Eko Prasatiawan" ?></h1>
  <p><?= "ini adalah paragraf" ?></p>
</body>

</html>

<!-- html dalam php -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <?php
  echo "<h1>Halo, Selamat datang Rendi Eko Prasatiawan</h1>";
  ?>
</body>

</html>

<!-- tapi yang banyak dipakai menggunakan php dalam html -->


<!-- #### variabel dan tipe data #### -->

<?php
$nama = "Rendi Eko Prasatiawan";
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h1>Halo, Selamat datang <?= $nama ?></h1>
</body>

</html>


<!-- operator aritmatika -->
<?php
$x = 10;
$y = 20;

echo ($x + $y);
?>

<br>

<!-- operator penggabung string atau concatination -->
<?php
$nama_depan  = "Rendi";
$nama_tengah = "Eko";
$nama_belakang = "Prasatiawan";

echo ("nama saya {$nama_depan} {$nama_tengah} {$nama_belakang}");
?>

<br>

<!-- operator assignment -->
<?php
// =, +=, -=, *=, /=, %=, .=
$x = 1;
$x += 1;
echo "{$x}";

$nama = "Rendi";
$nama .= " ";
$nama .= "Eko Prasatiawan";
echo "{$nama}";
?>

<!-- operator perbandingan -->
<?php
// <, >, <=, >=, ==, !=
// dipake untuk mengecek pengkondisian

var_dump(1 < 5);
var_dump(1 > 5);
var_dump(1 >= 2);
var_dump(1 <= 5);
var_dump(1 == "1");
var_dump(1 != "1");
?>

<!-- operator identitas -->
<?php
// ===, !==
var_dump(1 === "1");
var_dump(1 !== "1");
?>

<!-- operator logika -->
<?php
// &&, ||, !

// ini benar
$x = 10;
var_dump(($x < 20) && ($x % 2 == 0));

// ini salah, karena prinsip && (harus keduanya benar)
$x = 30;
var_dump($x < 20 && $x % 2 == 0);

// ini benar jika makai ||, karena bisa salah 1 saja yang benar
$x = 30;
var_dump($x < 20 || $x % 2 == 0);
?>