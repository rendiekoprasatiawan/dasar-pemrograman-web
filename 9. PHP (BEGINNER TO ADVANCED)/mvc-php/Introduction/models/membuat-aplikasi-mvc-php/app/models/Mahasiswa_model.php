<?php
class Mahasiswa_model
{
  private
    // database handler
    $dbh,
    // statement
    $stmt;

  // buat method construct
  // ini sederhana banget untuk melakukan pemanggilan data di database, bahkan ini jangan dilakukan lah, masih banyak metode yang lain yang lebih aman. kalau ini masih menyimpan username dan password database di dalam file ini. Harusnya bisa buat file lain biar gak gampang di akses hacker
  public function __construct()
  {
    // bikin sebuah variable
    // sebenernya masih ada settingan yang lain, ini bikin yang simple saja
    // dsn (data source name)
    $dsn = "mysql:host=localhost;dbname=phpmvc";

    // cek menggunakan block try catch, apakah koneksi berhasil atau tidak
    try {
      // manggil handler PDOnya, lalu diisi data sourcenamenya dan username dan passwordnya
      $this->dbh = new PDO($dsn, "root", "");
    }
    // ketika error tangkap exceptionnya
    catch (PDOException $e) {
      // ketika error hentikan programmnya lalu kasih pesan dengan getMessage()
      die($e->getMessage());
    }
  }

  public function getAllMahasiswa()
  {
    // untuk mendapatkan semua mahasiswa dari database
    // kalau makai PDO querynya harus kita prepare dahulu lalu masukkan querynya
    $this->stmt = $this->dbh->prepare("SELECT * FROM mahasiswa");
    // ketika selesai prepare baru kita eksekusi (ini supaya aman)
    $this->stmt->execute();
    // kita ambil datanya dengan fetchAll dan dikembalikan sebagai array asosiatif
    return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}
