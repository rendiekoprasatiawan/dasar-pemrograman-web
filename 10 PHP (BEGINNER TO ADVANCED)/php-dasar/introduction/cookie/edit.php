<?php
// start session terlebih dahulu
session_start();

// cek user ketika belum login maka
if (!isset($_SESSION["login"])) {
  header("Location: login.php");
}

include 'auth.php';

// ambil data dari URL
$id = $_GET["id"];

// query data daftarbuku berdasarkan id
$buku = query("SELECT * FROM daftarbuku WHERE id = $id")[0];

// cek apakah tombol submit sudah ditekan atau belum
if (isset($_POST["submit"])) {
  // cek apakah data berhasil ditambahkan atau tidak
  if (ubah($_POST) > 0) {
    echo '
    <script type="text/javascript">
    $(document).ready(function(){
      swal({
        title: "Berhasil!",
        text: "Data kamu berhasil diubah!",
        icon: "success",
        button: "OK!"
      });

      setTimeout(function(){ document.location.href = "index.php" }, 1500);
    });
    </script>
    ';
  } else {
    echo '
    <script type="text/javascript">
    $(document).ready(function(){
      swal({
        title: "Gagal!",
        text: "Terdapat kesalahan dalam perubahan data!",
        icon: "warning",
        button: "OK!"
      });

      setTimeout(function(){ document.location.href = "index.php" }, 2000);
    });
    </script>
    ';
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ubah Data Buku</title>
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
        <h1>Ubah Data Buku</h1>
      </div>
      <form action="" method="POST" enctype="multipart/form-data">
        <div class="form-group">
          <label class="sr-only" for="id">Hidden</label>
          <input type="hidden" class="form-control" name="id" id="id" value="<?= $buku["id"] ?>">
        </div>
        <div class="form-group">
          <label class="sr-only" for="id">Hidden</label>
          <input type="hidden" class="form-control" name="gambar_lama" id=gambar_lama" value="<?= $buku["gambar"] ?>">
        </div>
        <div class=" form-group">
          <label for="judul">Judul</label>
          <input type="text" name="judul" class="form-control" id="judul" placeholder="Masukkan judul" required value="<?= $buku["judul"] ?>">
        </div>
        <div class="form-group">
          <label for="kode">Kode</label>
          <input type="text" name="kode" class="form-control" id="kode" placeholder="Masukkan kode" required value="<?= $buku["kode"] ?>" readonly>
        </div>
        <div class="form-group">
          <label for="pengarang">Pengarang</label>
          <input type="text" name="pengarang" class="form-control" id="pengarang" placeholder="Masukkan pengarang" required value="<?= $buku["pengarang"] ?>">
        </div>
        <div class="form-group">
          <label for="penerbit">Penerbit</label>
          <input type="text" name="penerbit" class="form-control" id="penerbit" placeholder="Masukkan penerbit" required value="<?= $buku["penerbit"] ?>">
        </div>
        <div class="form-group border rounded">
          <div class="row">
            <div class="col-lg-6 mt-1">
              <div class="pb-1">
                <img style="width: 97px;" src="img/<?= $buku["gambar"]; ?>">
              </div>
              <input type="file" class="form-control-file " aria-describedby="helpId" name="gambar" id="gambar" placeholder="Masukkan gambar">
              <small id="helpId" class="form-text text-muted">ukuran gambar maksimal 5MB, ekstensi gambar (jpg, jpeg, png).</small>
            </div>
            <div class="col-lg-6 mt-1 mt-lg-5 pt-lg-5 text-lg-right but_ubah">
              <button type="submit" name="submit" class="btn btn-primary mt-lg-5">Ubah Data</button>
            </div>
          </div>
        </div>
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