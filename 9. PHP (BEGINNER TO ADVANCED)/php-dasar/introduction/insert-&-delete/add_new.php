<?php
include 'auth.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tambah Data Buku</title>
  <!-- bootstrap css -->
  <link rel="stylesheet" href="asset/css/bootstrap.min.css">

  <!-- style -->
  <link rel="stylesheet" href="asset/css/style.css">

</head>

<body>
  <!-- tambah data buku -->
  <div class="wrapper">
    <div class="container">
      <div class="text-center p-5">
        <h1>Tambah Data Buku</h1>
      </div>
      <form action="" method="POST">
        <div class="form-group">
          <label for="judul">Judul</label>
          <input type="text" name="judul" class="form-control" id="judul" placeholder="Masukkan judul" required>
        </div>
        <div class="form-group">
          <label for="kode">Kode</label>
          <input type="text" name="kode" class="form-control" id="kode" placeholder="Masukkan kode" required>
        </div>
        <div class="form-group">
          <label for="pengarang">Pengarang</label>
          <input type="text" name="pengarang" class="form-control" id="pengarang" placeholder="Masukkan pengarang" required>
        </div>
        <div class="form-group">
          <label for="penerbit">Penerbit</label>
          <input type="text" name="penerbit" class="form-control" id="penerbit" placeholder="Masukkan penerbit" required>
        </div>
        <div class="form-group">
          <label for="gambar">Gambar</label>
          <input type="text" name="gambar" class="form-control" id="gambar" placeholder="Masukkan nama gambar" required>
        </div>
        <button type="submit" name="submit" class="btn btn-primary">Tambah Data</button>
      </form>
    </div>

</body>

<!-- jquery -->
<script src="asset/js/jquery-3.5.1.min.js"></script>

<!-- sweet alert -->
<script src="asset/js/sweetalert.min.js"></script>

<!-- smooth scrolling -->
<script src="asset/js/jquery.easing.1.3.js"></script>

<!-- popper -->
<script src="asset/js/popper.js"></script>

<!-- bootstrap js -->
<script src="asset/js/bootstrap.min.js"></script>

<!-- script js -->
<script src="asset/js/script.js"></script>

</html>