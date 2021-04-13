<!-- #### - Array baru biasa - #### -->
<?php
// array
// membuat array
$hari = ["senin", "selasa", "rabu", "kamis", "jum'at"];
$hari1 = [["senin", "selasa"], ["rabu", "kamis"], ["jum'at"]];

// menampilkan array versi user interface
echo $hari[0];

echo "<br>";

// menampilkan array versi debugging (lebih lengkap tampilannya)
var_dump($hari);

echo "<br>";

// menampilkan array versi debuggin (print secara rekursif : lebih ringkas tampilannya)
print_r($hari);

echo "<br>";

// array multidimensi
echo $hari1[0][1];


?>

<!-- menampilkan array dengan pengulangan -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Latihan Array Biasa</title>
  <style>
    .kotak {
      width: 30px;
      height: 30px;
      background-color: #BADA55;
      text-align: center;
      line-height: 30px;
      margin: 3px;
      transition: 1s;
    }

    .kotak:hover {
      transform: rotate(360deg);
      border-radius: 50%;
    }
  </style>
</head>

<body>
  <?php
  $numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ?>

  <?php foreach ($numbers as $number) : ?>
    <div class="kotak"><?= $number ?></div>
  <?php endforeach; ?>

</body>

</html>

<!-- #### - Associative Array - #### -->
<!-- definisinya sama seperti array numerik, kecuali -->
<!-- key-nya adalah string yang kita buat sendiri -->
<?php
$books = [
  [
    "judul" => "Sistem Informasi Geografis",
    "kode" => "87654321",
    "pengarang" => "Rendi Eko Prasatiawan",
    "penerbit" => "Ilmu Komputer",
    "gambar" => "sig.jpg"
  ],

  [
    "judul" => "Desain Analisis dan Algoritma",
    "kode" => "12345678",
    "pengarang" => "Putri Okta Nadia",
    "penerbit" => "Kimia",
    "gambar" => "daa.jpg"
  ],

  [
    "judul" => "machine Learning",
    "kode" => "17615263",
    "pengarang" => "Pariaman Ginting",
    "penerbit" => "Fisika",
    "gambar" => "ml.jpg"
  ],
]
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Associative array</title>
</head>

<body>
  <h1>Daftar Mahasiswa </h1>
  <?php foreach ($books as $book) : ?>
    <ul>
      <li>Judul : <?= $book["judul"]; ?></li>
      <li>Kode : <?= $book["kode"]; ?></li>
      <li>Pengarang : <?= $book["pengarang"]; ?></li>
      <li>Penerbit : <?= $book["penerbit"]; ?></li>
      <li>Gambar :
        <img src="img/<?= $book["gambar"]; ?>">
      </li>
    </ul>
  <?php endforeach; ?>
</body>

</html>