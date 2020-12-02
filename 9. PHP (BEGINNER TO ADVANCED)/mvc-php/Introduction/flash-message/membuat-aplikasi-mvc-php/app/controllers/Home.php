<?php
// inheritance
class Home extends Controller
{
  public function index()
  {
    // send data judul
    $data["judul"] = "Home";
    // send data nama
    $data["nama"] = $this->model("User_model")->getUser();
    // memanggil header dan menangkap $data
    $this->view("templates/header", $data);
    // memanggil sebuah view (dalam hal ini index.php) dari folder views/home
    $this->view("home/index", $data);
    // memanggil footer
    $this->view("templates/footer");
  }
}
