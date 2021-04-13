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
}
