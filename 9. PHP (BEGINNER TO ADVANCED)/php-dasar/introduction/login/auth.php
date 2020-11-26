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

  // upload gambar
  $gambar = upload();
  if (!$gambar) {
    return false;
  }

  // query insert data
  $query = "INSERT INTO daftarbuku VALUES ('', '$judul', '$kode', '$pengarang', '$penerbit', '$gambar')";
  mysqli_query($conn, $query);

  // menghasilkan data sudah ditambahkan atau belum dengan nilai (-1 : tidak berhasil) dan (1 : berhasil)
  return mysqli_affected_rows($conn);
}

// ##### - Upload - #####
function upload()
{
  $nama_file = $_FILES["gambar"]["name"];
  $ukuran_file = $_FILES["gambar"]["size"];
  $error = $_FILES["gambar"]["error"];
  $tmp_name = $_FILES["gambar"]["tmp_name"];

  // cek apakah tidak ada gambar yang diupload
  if ($error == 4) {
    echo '
    <script type="text/javascript">
    $(document).ready(function(){
      swal({
        title: "Warning!",
        text: "Pilih gambar terlebih dahulu!",
        icon: "warning",
        button: "OK!",
        timer: 3000
      });
    });
    </script>
    ';
    return false;
  }

  // cek apakah yang diupload adalah gambar
  $ekstensiGambarValid = ["jpg", "jpeg", "png"];
  $ekstensiGambar = explode(".", $nama_file);
  $ekstensiGambar = strtolower(end($ekstensiGambar));
  if (!in_array($ekstensiGambar, $ekstensiGambarValid)) {
    echo '
    <script type="text/javascript">
    $(document).ready(function(){
      swal({
        title: "Warning!",
        text: "Yang anda upload bukan gambar!",
        icon: "warning",
        button: "OK!",
        timer: 3000
      });
    });
    </script>
    ';
    return false;
  }

  // cek jika ukurannya terlalu besar
  if ($ukuran_file > 50000) {
    echo '
    <script type="text/javascript">
    $(document).ready(function(){
      swal({
        title: "Warning!",
        text: "Ukuran foto terlalu besar!",
        icon: "warning",
        button: "OK!",
        timer: 3000
      });
    });
    </script>
    ';
    return false;
  }

  // lolos pengecekan, gambar siap diupload
  // generate nama gambar baru
  $nama_file_baru = uniqid();
  $nama_file_baru .= ".";
  $nama_file_baru .= $ekstensiGambar;
  move_uploaded_file($tmp_name, "img/" . "$nama_file_baru");
  return $nama_file_baru;
}

// ##### - Delete - #####
function hapus($id)
{
  global $conn;
  mysqli_query($conn, "DELETE FROM daftarbuku WHERE id = $id");
  return mysqli_affected_rows($conn);
}

// ##### - Edit - #####
// buat function tambah
function ubah($data)
{
  // berhubung ini di local scope maka untuk akses global diperlukan : global scope
  global $conn;

  // ambil data dari tiap elemen dalam form
  $id = $data["id"];
  $judul = htmlspecialchars($data["judul"]);
  $kode = htmlspecialchars($data["kode"]);
  $pengarang = htmlspecialchars($data["pengarang"]);
  $penerbit = htmlspecialchars($data["penerbit"]);
  $gambar_lama = htmlspecialchars($data["gambar_lama"]);

  // cek apakah user pilih gambar baru atau tidak
  if ($_FILES["gambar"]["error"] === 4) {
    $gambar = $gambar_lama;
  } else {
    $gambar = upload();
  }

  // query update data
  $query = "UPDATE daftarbuku SET 
            judul = '$judul', 
            kode = '$kode',
            pengarang = '$pengarang',
            penerbit = '$penerbit', 
            gambar = '$gambar'
            WHERE id = $id
            ";

  mysqli_query($conn, $query);

  // menghasilkan data sudah diubah atau belum dengan nilai (-1 : tidak berhasil) dan (1 : berhasil)
  return mysqli_affected_rows($conn);
}

// ##### - SEARCHING - #####
function search($keyword)
{
  $query = "SELECT * FROM daftarbuku WHERE 
            judul LIKE '%$keyword%' OR
            kode LIKE '%$keyword%' OR
            pengarang LIKE '%$keyword%' OR
            penerbit LIKE '%$keyword%'
            ";
  return query($query);
}

// ##### - REGISTRASI - #####
function registrasi($data)
{
  global $conn;

  $username = strtolower(stripslashes($data["username"]));
  $password = mysqli_real_escape_string($conn, $data["password"]);
  $password2 = mysqli_real_escape_string($conn, $data["password2"]);

  // cek username sudah ada atau belum 
  $result = mysqli_query($conn, "SELECT username FROM users WHERE username = '$username'");

  if (mysqli_fetch_assoc($result)) {
    echo '
    <script type="text/javascript">
    $(document).ready(function(){
      swal({
        title: "Warning!",
        text: "Username sudah terdaftar!",
        icon: "warning",
        button: "OK!",
        timer: 3000
      });
    });
    </script>
    ';
    return false;
  }

  // cek konfirmasi password
  if ($password !== $password2) {
    echo '
    <script type="text/javascript">
    $(document).ready(function(){
      swal({
        title: "Warning!",
        text: "Konfirmasi password tidak sesuai!",
        icon: "warning",
        button: "OK!",
        timer: 3000
      });
    });
    </script>
    ';
    return false;
  }

  // enkripsi password
  $password = password_hash($password, PASSWORD_DEFAULT);

  // tambahkan user baru ke database
  mysqli_query($conn, "INSERT INTO users VALUES('', '$username', '$password')");

  return mysqli_affected_rows($conn);
}
