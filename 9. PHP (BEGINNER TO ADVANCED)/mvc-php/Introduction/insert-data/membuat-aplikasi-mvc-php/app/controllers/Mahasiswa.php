<?php
class Mahasiswa extends Controller
{
  public function index()
  {
    // buat judul biar bisa di send
    $data["judul"] = "Daftar Mahasiswa";
    // buat data mhs dan ini manggi langsung data Mahasiswa dari database
    $data["mhs"] = $this->model("Mahasiswa_model")->getAllMahasiswa();
    // memanggil header
    $this->view("templates/header", $data);
    // memanggil index
    $this->view("mahasiswa/index", $data);
    // memanggil footer
    $this->view("templates/footer");
  }

  // buat method baru detail
  public function detail($id)
  {
    // buat judul biar bisa di send
    $data["judul"] = "Detail Mahasiswa";
    // buat data mhs dan ini manggi langsung data Mahasiswa dari database
    $data["mhs"] = $this->model("Mahasiswa_model")->getMahasiswaById($id);
    // memanggil header
    $this->view("templates/header", $data);
    // memanggil index
    $this->view("mahasiswa/detail", $data);
    // memanggil footer
    $this->view("templates/footer");
  }

  // insert into
  public function tambah()
  {
    if ($this->model("Mahasiswa_model")->tambahDataMahasiswa($_POST) > 0) {
      header("Location: " . BASEURL . "/mahasiswa");
      exit;
    }
  }
}
