<?php

class About
{
  // method default
  public function index($nama = "Rendi Eko Prasatiawan", $pekerjaan = "Mahasiswa")
  {
    echo "Halo, nama saya {$nama}, saya adalah seorang {$pekerjaan}";
  }

  public function page()
  {
    echo "About/page";
  }
}
