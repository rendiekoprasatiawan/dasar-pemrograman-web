<!-- 
  pengulangan : ketika kita ingin mengerjakan sebuah block program tanpa harus menulis ulang scriptnya
  1. for
  2. while
  3. do.. while
  4. foreach : ini ketika belajar mengenai array(spesifik)
-->

<!-- 
  pengkondisian: ketika kita ingin memilih sebuah kondisi yang diperlukan untuk mencapai suatu tujuan tertentu
  1. if.. else
  2. if.. else if.. else
  3. ternary
  4. switch
-->


<!-- #### Pengulangan #### -->
<?php
// pengulangan
// for
for ($i = 1; $i <= 5; $i++) {
  echo "hello{$i} <br>";
}

echo "<br>";

// while
$i = 1;
while ($i <= 5) {
  echo "Hello World! <br>";
  $i++;
}

echo "<br>";

// do.. while
$i = 10;
do {
  echo "Hello World!@! <br>";
  $i++;
} while ($i <= 5);
?>

<br>
<br>

<!-- latihan pengulangan : -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Latihan 1</title>
  <style>
    .warna-baris {
      background-color: silver;
    }
  </style>
</head>

<body>
  <table border="1" cellpadding="10" cellspacing="0">
    <?php for ($i = 1; $i <= 5; $i++) : ?>
      <?php if ($i % 2 == 0) : ?>
        <tr class="warna-baris">
        <?php else : ?>
        <tr>
        <?php endif; ?>
        <?php for ($j = 1; $j <= 5; $j++) : ?>
          <td><?= "$i,$j" ?></td>
        <?php endfor; ?>
        </tr>
      <?php endfor; ?>
  </table>
</body>

</html>

<br>

<!-- #### Pengkondisian #### -->
<?php
// pengkondisian/percabangan
// if else
$x = 20;
if ($x < 20) {
  echo "Benar!";
} else {
  echo "Salah!";
}

echo "<br>";

// if else if else
$y = 10;
if ($y < 20) {
  echo "Benar!";
} else if ($y = 20) {
  echo "Bingo!";
} else {
  echo "Salah!";
}

echo "<br>";

// ternary
$nilai = 50;
echo $nilai > 70 ? "Selamat, anda lulus!" : "Mohon maaf, anda harus mengulang";

echo "<br>";

// switch.. case
$url = '/about';
switch ($url) {
  case '/':
    echo 'Selamat datang di dashboard.';
    break;
  case '/about':
    echo 'Selamat datang di halaman about.';
    break;
  case '/contact':
    echo 'Selamat datang di halaman kontak.';
    break;
  default:
    echo 'Maaf halaman yang anda cari tidak ditemukan.';
}
echo "<br>";
?>