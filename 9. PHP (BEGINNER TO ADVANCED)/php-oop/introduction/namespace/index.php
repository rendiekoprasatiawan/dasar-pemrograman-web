<!-- 
  ### - Pengertian namespace - ###
  - Sebuah cara untuk mengelompokkan program ke dalam sebuah package tersendiri / menjadi bagian yang memiliki identitas tersendiri. Teknik ini juga, ada yang menyebut dengan teknik enkapsulasi (encapsulation).

  ### - Kenapa pemrograman kita harus dikelompokkan - ###
  - Karena PHP tidak mengijinkan kita untuk memiliki 2 class dengan nama yang sama, iya gak masalah kalau kita bekerja sendiri. tetapi akan menjadi masalah ketika kita bekerja dengan tim.

  - karena ketika kita menggunakan script/library dari pihak ketiga, misal ketika kita menggunakan composer (package manager untuk mendownload script2 yang dibuat oleh orang lain di seluruh dunia). ketika kita tidak dikelompokkan/enkapsulasi/namespace maka kita akan kesulitan buat nama kelas yang tidak sama yang dibikin oleh orang lain. Beda halnya jika kita menggunakan namespace/enkapsulasi ini, dia mengijinkan kita untuk membuat nama kelas yang sama meskipun dengan pra-syarat pastinya. Nah kelebihan namespace ini juga dapat mengidentifikasi ketika nama yang dibuat sama tapi dengan orang yang mengerjakannya berbeda.
-->
<?php
// autoloading
include_once __DIR__ . '/App/init.php';

// $produk1 = new Komik("Naruto", "Masashi Kisimoto", "Shonen Jump", 30000, 100);
// $produk2 = new Game("Uncharted", "Neil Druckman", "Shony Computer", 250000, 50);

// $cetakProduk = new CetakInfoProduk();
// $cetakProduk->tambahProduk($produk1);
// $cetakProduk->tambahProduk($produk2);
// echo $cetakProduk->cetak();

use App\Produk\User as ProdukUser;
use App\Service\User as ServiceUser;

new ProdukUser();
echo "<br>";
new ServiceUser();
