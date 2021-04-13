<?php

class App
{
  public function __construct()
  {
    // di construct kita panggil method
    $url = $this->parseURl();
    // debugging
    var_dump($url);
  }

  // buat method yang bertugas mengambil url lalu memecah sesuai dengan keinginan kita
  public function parseURl()
  {
    // cek jika ada url yang dikirimkan
    if (isset($_GET["url"])) {
      // ambil url, isi dengan urlnya dan trim slash (/) supaya dihilangkan
      $url = rtrim($_GET["url"], "/");
      // ini akan membersihkan url dari karakter2 yang memungkinkan url kita di hack
      $url = filter_var($url, FILTER_SANITIZE_URL);
      // ini memecah urlnya berdasarkan tanda slash (/)
      $url = explode("/", $url);
      return $url;
    }
  }
}
