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