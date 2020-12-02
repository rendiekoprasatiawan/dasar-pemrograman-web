<?php
// inheritance
class Home extends Controller
{
  public function index()
  {
    $data["judul"] = "Home";
    // memanggil header
    $this->view("templates/header", $data);
    // memanggil sebuah view (dalam hal ini index.php) dari folder views/home
    $this->view("home/index");
    // memanggil footer
    $this->view("templates/footer");
  }
}
