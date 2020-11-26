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
    "judul" => "Machine Learning",
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
  <title>GET</title>
</head>

<body>
  <h1>Daftar Buku</h1>
  <ul>
    <?php foreach ($books as $book) : ?>
      <li>
        <a href="detail-buku.php?judul=<?= $book["judul"]; ?>&kode=<?= $book["kode"]; ?>&pengarang=<?= $book["pengarang"]; ?>&penerbit=<?= $book["penerbit"]; ?>&gambar=<?= $book["gambar"]; ?>"><?= $book["judul"]; ?></a>
      </li>
    <?php endforeach; ?>
  </ul>
</body>

</html>