<?php
include 'auth.php';

// cek ketika tombol register telah ditekan
if (isset($_POST["register"])) {

  if (registrasi($_POST) > 0) {
    echo '
    <script type="text/javascript">
    $(document).ready(function(){
      swal({
        title: "Berhasil!",
        text: "User baru berhasil ditambahkan!",
        icon: "success",
        button: "OK!"
      });

      setTimeout(function(){ document.location.href = "index.php" }, 1500);
    });
    </script>
    ';
  } else {
    echo mysqli_error($conn);
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Halaman Registrasi</title>
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
        <h1>Halaman Registrasi</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-9">
          <form action="" method="POST" enctype="multipart/form-data">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" name="username" class="form-control" id="username" placeholder="Masukkan username" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" class="form-control" id="password" placeholder="Masukkan password" required>
            </div>
            <div class="form-group">
              <label for="password2">Konfirmasi password</label>
              <input type="password" name="password2" class="form-control" id="password2" placeholder="Masukkan password" required>
            </div>
            <div class="form-group pt-2">
              <button type="submit" name="register" class="btn btn-primary">Register!</button>
            </div>
          </form>
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