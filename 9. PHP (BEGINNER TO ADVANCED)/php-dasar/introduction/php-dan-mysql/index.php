<?php
include 'auth.php';
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

</head>

<body>
  <!-- Daftar Buku -->
  <section id="daftar-buku">
    <div class="container">
      <div class="row text-center py-5">
        <div class="col">
          <h1>Daftar Buku</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="table-responsive">
            <table class="table table-striped">
              <thead class="table-dark text-center">
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
                    <td class="align-middle"><span><a href="">ubah</a></span> | <span><a href="">hapus</a></span></td>
                    <td class="align-middle"><img src="img/<?= $row["gambar"]; ?>"></td>
                    <td class="align-middle"><?= $row["kode"]; ?></td>
                    <td class="align-middle"><?= $row["judul"]; ?></td>
                    <td class="align-middle"><?= $row["pengarang"]; ?></td>
                    <td class="align-middle"><?= $row["penerbit"]; ?></td>
                  </tr>
                  <?php $i++; ?>
                <?php endforeach; ?>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

</body>
<!-- jquery -->
<script src="asset/js/jquery-3.5.1.min.js"></script>

<!-- smooth scrolling -->
<script src="asset/js/jquery.easing.1.3.js"></script>

<!-- popper -->
<script src="asset/js/popper.js"></script>

<!-- bootstrap js -->
<script src="asset/js/bootstrap.min.js"></script>

<!-- script js -->
<script src="asset/js/script.js"></script>

</html>