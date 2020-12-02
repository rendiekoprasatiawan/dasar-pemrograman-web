<?php

class Controller
{
  // buat method untuk menangkap child Home.php
  public function view($view, $data = [])
  {
    // ini kita panggil views
    include_once "../app/views/" . $view . ".php";
  }
}
