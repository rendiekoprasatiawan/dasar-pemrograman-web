<head>
  <script src="asset/js/jquery-3.5.1.min.js"></script>
  <script src="asset/js/sweetalert.min.js"></script>
</head>
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

// ##### - Add New - #####
// buat function tambah
function tambah($data)
{
  // berhubung ini di local scope maka untuk akses global diperlukan : global scope
  global $conn;

  // ambil data dari tiap elemen dalam form
  $judul = htmlspecialchars($data["judul"]);
  $kode = htmlspecialchars($data["kode"]);
  $pengarang = htmlspecialchars($data["pengarang"]);
  $penerbit = htmlspecialchars($data["penerbit"]);
  $gambar = htmlspecialchars($data["gambar"]);

  // query insert data
  $query = "INSERT INTO daftarbuku VALUES ('', '$judul', '$kode', '$pengarang', '$penerbit', '$gambar')";
  mysqli_query($conn, $query);

  // menghasilkan data sudah ditambahkan atau belum dengan nilai (-1 : tidak berhasil) dan (1 : berhasil)
  return mysqli_affected_rows($conn);
}

// cek apakah tombol submit sudah ditekan atau belum
if (isset($_POST["submit"])) {
  // cek apakah data berhasil ditambahkan atau tidak
  if (tambah($_POST) > 0) {
    echo '
    <script type="text/javascript">
    $(document).ready(function(){
      swal({
        title: "Berhasil!",
        text: "Data kamu berhasil ditambahkan!",
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
        text: "Terdapat kesalahan dalam menambahkan data!",
        icon: "warning",
        button: "OK!"
      });

      setTimeout(function(){ document.location.href = "index.php" }, 2000);
    });
    </script>
    ';
  }
}

function hapus($id)
{
  global $conn;
  mysqli_query($conn, "DELETE FROM daftarbuku WHERE id = $id");
  return mysqli_affected_rows($conn);
}
