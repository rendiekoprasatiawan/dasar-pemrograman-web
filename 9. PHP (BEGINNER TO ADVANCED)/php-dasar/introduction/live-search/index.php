<?php
// start session terlebih dahulu
session_start();

// cek user ketika belum login maka
if (!isset($_SESSION["login"])) {
  header("Location: login.php");
}

// mengambil data dari auth.php
include 'auth.php';

// ambil data dari query
$daftarbuku = query("SELECT * FROM daftarbuku");

// tombol search ditekan
if (isset($_POST["search"])) {
  $daftarbuku = search($_POST["keyword"]);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daftar Buku</title>
  <!-- bootstrap css -->
  <link rel="stylesheet" href="asset/css/bootstrap.min.css">

  <!-- style -->
  <link rel="stylesheet" href="asset/css/style.css">

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">

</head>

<body>
  <nav class="navbar navbar-light bg-light">
    <div class="container justify-content-end pr-0">
      <a class="navbar-brand" href="logout.php">
        <img src="img/icon/logout.png" alt="logout">
        Logout</a>
    </div>
  </nav>
  <!-- Daftar Buku -->
  <div class="card mb-3">
    <div class="container">
      <div class="row text-center py-5">
        <div class="col">
          <h1>Daftar Buku</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="table-responsive border">
            <table class="table">
              <div class="card-header">
                <a href="add_new.php"><i class="fas fa-plus"></i> Add New</a>
              </div>
              <div id="container">
                <div class="row">
                  <div class="col-xl-12 col-md-10 col-lg-8">
                    <form action="" method="POST">
                      <div class="card-body row no-gutters align-items-center">
                        <div class="col-auto">
                          <i class="fas fa-search h4 text-body"></i>
                        </div>
                        <!--end of col-->
                        <div class="col">
                          <input class="form-control form-control-lg form-control-borderless" name="keyword" id="keyword" type="search" placeholder="Search keywords" autofocus>
                        </div>
                        <!--end of col-->
                        <div class="col-auto">
                          <button name="search" class="btn btn-lg btn-success" type="submit" id="tombol-cari">Search</button>
                        </div>
                        <!--end of col-->
                      </div>
                    </form>
                  </div>
                  <!--end of col-->
                </div>
                <thead class="text-center">
                  <tr>
                    <th scope="col" style="width: 1%;">No.</th>
                    <th scope="col" style="width: 12%;">Aksi</th>
                    <th scope="col" style="width: 8%;">Gambar</th>
                    <th scope="col" style="width: 4%;">Kode</th>
                    <th class="col" style="width: 40%;">Judul</th>
                    <th class="col" style="width: 20%;">Pengarang</th>
                    <th class="col" style="width: 15%;">Penerbit</th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  <?php $i = 1; ?>
                  <?php foreach ($daftarbuku as $row) : ?>
                    <tr>
                      <th class="align-middle" scope="row"><?= $i; ?></th>
                      <td class="align-middle"><span><a href="edit.php?id=<?= $row["id"]; ?>">ubah</a></span> | <span><a href="delete.php?id=<?= $row["id"]; ?>">hapus</a></span>
                      </td>
                      <td class="align-middle"><img style="width: 50px;" src="img/books/<?= $row["gambar"]; ?>"></td>
                      <td class="align-middle"><?= $row["kode"]; ?></td>
                      <td class="align-middle"><?= $row["judul"]; ?></td>
                      <td class="align-middle"><?= $row["pengarang"]; ?></td>
                      <td class="align-middle"><?= $row["penerbit"]; ?></td>
                    </tr>
                    <?php $i++; ?>
                  <?php endforeach; ?>
                </tbody>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
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