<!-- 
  Untuk menghubungkan web kita dengan MySQL dengan bahasa PHP, bisa menggunakan beberapa cara:
  1. Ekstensi MySQL : ini cara lama dan sudah banyak celah
  2. Ekstensi MySQLi : ini cara baru yang sangat direkomendasikan (i : improve)
  3. PDO (PHP Data Object) : ini cara yang bisa memudahkan ketika kita ingin berganti-ganti DBMS (Database Management System / Software Pengelola Database). Kita tidak perlu repot-repot mengubah kode jika kita menggunakan PDO ini.

  // Tapi di seri ini kita akan mempelajari Ekstensi MySQLi saja
-->

<!-- #### - Koneksi ke Database - #### -->
<?php
// buat dulu variable untuk menampung data yang dihubungkan
$servername = "localhost";
$database = "phpdasar";
$username = "root";
$password = "";

// Mulai mengkoneksikan dengan mysqli_connect
$conn = mysqli_connect($servername, $username, $password, $database);

// Memeriksa koneksinya
if (!$conn) {
  // jika gagal
  die("Connection failed: " . mysqli_connect_error());
}

// cek jika berjalan lancar versi debugging/development:
// echo "Connected successfully";
?>


<!-- script jahat -->
<!-- <div style="position:absolute; top:0; bottom:0; left:0; right:0; background-color:black; font-size:100px; color:red; text-align:center; z-index:9999;">
  HAHAHA WEBSITE INI TELAH DI HACK
</div> -->