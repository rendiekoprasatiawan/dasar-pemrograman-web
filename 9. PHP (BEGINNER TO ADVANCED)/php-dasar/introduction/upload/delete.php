<?php
include 'auth.php';

// ambil id yang akan menangkap urlnya
$id = $_GET["id"];


if (hapus($id) > 0) {
  echo '
    <script type="text/javascript">
    $(document).ready(function(){
      swal({
        title: "Berhasil!",
        text: "Data berhasil dihapus!",
        icon: "success",
        button: "OK!"
      });

      setTimeout(function(){ document.location.href = "index.php" }, 2000);
    });
    </script>
    ';
}
