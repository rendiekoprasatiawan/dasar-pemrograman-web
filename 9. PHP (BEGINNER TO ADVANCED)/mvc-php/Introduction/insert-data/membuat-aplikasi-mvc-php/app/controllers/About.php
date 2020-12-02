<?php

class About extends Controller
{
  // method default
  public function index($nama = "Rendi Eko Prasatiawan", $pekerjaan = "Mahasiswa", $umur = "21")
  {
    // memanggil sebuah view (dalam hal ini index.php) dari folder views/about dan ngirim data
    $data["nama"] = $nama;
    $data["pekerjaan"] = $pekerjaan;
    $data["umur"] = $umur;
    $data["judul"] = "About me";
    // memanggil header
    $this->view("templates/header", $data);
    // memanggil index
    $this->view("about/index", $data);
    // memanggil footer
    $this->view("templates/footer");
  }

  public function page()
  {
    $data["judul"] = "Pages";
    // memanggil header
    $this->view("templates/header", $data);
    // memanggil page
    $this->view("about/page");
    // memanggil footer
    $this->view("templates/footer");
  }
}
