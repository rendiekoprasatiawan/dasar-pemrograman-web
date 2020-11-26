<?php
require 'auth.php';

// cek apakah tombol submit sudah ditekan atau belum
if (isset($_POST["login"])) {

  // menangkap data username dan password dari POST
  $username = $_POST["username"];
  $password = $_POST["password"];

  $result = mysqli_query($conn, "SELECT * FROM users WHERE username = '$username'");

  // cek username
  if (mysqli_num_rows($result) === 1) {

    // cek password
    $row = mysqli_fetch_assoc($result);

    if (password_verify($password, $row["password"])) {
      header("Location: index.php");
      exit;
    }
  }

  $error =  true;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Halaman Login</title>
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
        <h1>Halaman Login</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-9">
          <?php if (isset($error)) : ?>
            <p style="color: red; font-style: italic; ">username / password salah!</p>
          <?php endif; ?>
          <form action="" method="POST" enctype="multipart/form-data">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" name="username" class="form-control" id="username" placeholder="Masukkan username" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" class="form-control" id="password" placeholder="Masukkan password" required>
            </div>
            <div class="form-group pt-2">
              <button type="submit" name="login" class="btn btn-primary">Login!</button>
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