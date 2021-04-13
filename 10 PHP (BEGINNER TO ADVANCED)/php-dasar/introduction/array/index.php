<?php
// array
// variable yang dapat memiliki banyak nilai
// array boleh memiliki tipe data yang berbeda

// cara baru
// buat array
$nama = ["Rendi Eko Prasatiawan", "Putri Okta Nadia", "Pariaman Ginting"];
$arr1 = [123, "tulisan", false];
$hari = ["senin", "selasa", "rabu"];

// menampilkan isi dari array
echo $arr1[0];
echo "<br>";
echo $nama[2];

echo "<br>";

// menambahkan 1 elemen pada array
var_dump($hari);
$hari[] = "kamis";
$hari[] = "jum'at";
echo "<br>";
var_dump($hari);

?>

<br>
<br>

<!-- Melakukan pengulangan pada array -->
<?php
// pengulangan pada array
// for / foreach
$angka = [3, 2, 12, 14, 5, 7];
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Latihan pengulangan</title>
  <style>
    .kotak {
      width: 50px;
      height: 50px;
      background-color: salmon;
      text-align: center;
      line-height: 50px;
      margin: 3px;
      float: left;
    }

    .clear {
      clear: both;
    }
  </style>
</head>

<body>
  <?php for ($i = 0; $i < count($angka); $i++) : ?>
    <div class="kotak"><?= $angka[$i]; ?></div>
  <?php endfor; ?>

  <div class="clear"></div>

  <?php foreach ($angka as $a) : ?>
    <div class="kotak"><?= $a; ?></div>
  <?php endforeach; ?>

</body>

</html>

<br>
<br>

<!-- latihan 2 -->
<?php
$mahasiswa = [
  ["Rendi Eko Prasatiawan", "1657051005", "Ilmu Komputer", "rendiekoprasatiawan99@gmail.com"],
  ["Putri Okta Nadia", "1717011089", "Kimia", "putrioktanad03@gmail.com"],
  ["Rendi Eko Prasatiawan", "1657051005", "Ilmu Komputer", "rendiekoprasatiawan99@gmail.com"]
];
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Latihan 2</title>
</head>

<body>
  <h1>Daftar Mahasiswa</h1>
  <?php foreach ($mahasiswa as $mhs) : ?>
    <ul>
      <li>Nama : <?= $mhs[0]; ?></li>
      <li>NPM : <?= $mhs[1]; ?></li>
      <li>Jurusan : <?= $mhs[2]; ?></li>
      <li>Email : <?= $mhs[3]; ?></li>
    </ul>
  <?php endforeach; ?>
</body>

</html>