<!-- bapak pembuat bahasa PHP -> Rasmus Lerdorf pada tahun 1994 -->
<!-- PHP is Personal Home Page -->
<!-- PHP pada akhirnya dikenal dengan Hypertext Processor -->
<!-- PHP sudah bisa melakukan Object Oriented Programming (OOP) -->
<!-- PHP juga bisa mengelola database dan dikenal dengan PHP Data Object (PDO) -->
<!-- PHP 6 diabaikan, waktu itu mau mendukung unicode tp bermasalah -->


<!-- karakteristik PHP -->
<!-- ekstensi filenya harus .php -->
<!-- harus ditulis dalam tag PHP -->
<!-- PHP bisa digunakan bersamaan dengan HTML -->
<!-- Mengikuti bahasa C -->


<!-- ###### Persiapan lingkungan pengembangan ###### -->
<!-- client side scripting atau dikenal dengan front end -->
<!-- server side scripting atau dikenal dengan back end -->

<?php
$namaDepan = "Rendi";
$namaTengah = "Eko";
$namaBelakang = "Prasatiawan";

// echo "nama saya $namaDepan $namaTengah $namaBelakang";
for ($i = 0; $i < 5; $i++) {
    echo "text <br>";
}

$a = 0;
while ($a <= 5) {
    echo "text <br>";
    $a++;
}

echo mktime(0, 0, 0, 10, 3, 1999) / 86400;

// echo strtotime("19 jan 1999") / 86400;
