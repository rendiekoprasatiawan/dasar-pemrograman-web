<?php
include 'connect.php';

// mengetahui isi dari daftarbuku dengan versi development/debugging
// var_dump($result);

// ambil data (fetch) daftarbuku dari object result
// ada beberapa cara :
// 1. mysqli_fetch_row() : mengembalikan array numerik(angka dimulai dari 0)
// 2. mysqli_fetch_assoc() : mengembalikan array associative(nama yang kita kasih di tabel)
// 3. mysqli_fetch_array() : mengembalikann array numerik dan associative (tidak disarankan karena double : berat)
// 4. mysqli_fetch_object() : mengembalikan object bukan array

// membuat wadah untuk menampung data yang diambil dan dikirimkan
function query($query)
{
  global $conn;
  $result = mysqli_query($conn, $query);
  $rows = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }
  return $rows;

  // mengecek sudah benar atau belum
  if (!$result) {
    echo mysqli_error($conn);
  }
}

// ambil data dari query
$daftarbuku = query("SELECT * FROM daftarbuku");
