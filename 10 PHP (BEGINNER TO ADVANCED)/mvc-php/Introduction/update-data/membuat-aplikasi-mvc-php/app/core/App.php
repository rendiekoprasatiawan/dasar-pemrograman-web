<?php

class App
{
  // membuat property untuk kelas App, property untuk menentukan controller, method, dan parameter defaultnya
  protected
    $controller = "Home",
    $method = "index",
    $params = [];


  // ini construct
  public function __construct()
  {
    // di construct kita panggil method
    $url = $this->parseURl();

    # controller
    // cek apakah ada sebuah file di dalam folder controller yang namanya sesuai yang ditulis di url browser
    // versi terbaru
    if ($url == NULL) {
      $url = [$this->controller];
    }
    if (file_exists("../app/controllers/" . $url[0] . ".php")) {
      // timpa controller lama dengan controller yang baru
      $this->controller = $url[0];
      // hilangkan controllernya dari elemen arraynya
      unset($url[0]);
    }

    // pangil controllernya
    include_once "../app/controllers/" . $this->controller . ".php";
    // instansiasi
    $this->controller = new $this->controller;

    # method
    // bikin untuk methodnya
    // cek jika ada method
    if (isset($url[1])) {
      // cek method ada atau tidak di dalam controllernya
      if (method_exists($this->controller, $url[1])) {
        // timpa methodnya dengan url baru
        $this->method = $url[1];
        // hilangkan
        unset($url[1]);
      }
    }

    # params
    // kelola parameternya
    // cek apakah parameternya ada atau tidak
    if (!empty($url)) {
      // ambil data dan dimasukkan ke params
      $this->params = array_values($url);
    }

    // jalankan controller & method, serta kirimkan params jika ada
    call_user_func_array([$this->controller, $this->method], $this->params);
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
