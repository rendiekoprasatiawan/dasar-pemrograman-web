<?php
// cek apakah tidak ada data di $_GET
if (
  !isset($_GET["judul"]) ||
  !isset($_GET["kode"]) ||
  !isset($_GET["pengarang"]) ||
  !isset($_GET["penerbit"]) ||
  !isset($_GET["gambar"])
) {
  // redirect
  header("Location: daftar-buku.php");
  exit;
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Detail Buku</title>
</head>

<body>
  <ul>
    <li><img src="img/<?= $_GET["gambar"] ?>"></li>
    <li><?= $_GET["judul"]; ?></li>
    <li><?= $_GET["kode"]; ?></li>
    <li><?= $_GET["pengarang"]; ?></li>
    <li><?= $_GET["penerbit"]; ?></li>
  </ul>

  <a href="daftar-buku.php">Kembali ke Daftar Buku</a>
</body>

</html>