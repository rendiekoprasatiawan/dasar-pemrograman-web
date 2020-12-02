<?php

class Database
{
  private
    $host = DB_HOST,
    $user = DB_USER,
    $password = DB_PASS,
    $db_name = DB_NAME,

    // bikin variable untuk koneksinya
    // database handler
    $dbh,
    // statement
    $stmt;

  // buat method construct
  public function __construct()
  {
    // bikin sebuah variable
    // dsn (data source name)
    $dsn = "mysql:host={$this->host};dbname={$this->db_name}";

    // bikin option untuk mengoptimasi koneksi ke database
    $option = [
      PDO::ATTR_PERSISTENT => true,
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ];

    // cek menggunakan block try catch, apakah koneksi berhasil atau tidak
    try {
      // manggil handler PDOnya, lalu diisi data sourcenamenya dan username dan passwordnya
      $this->dbh = new PDO($dsn, $this->user, $this->password, $option);
    }
    // ketika error tangkap exceptionnya
    catch (PDOException $e) {
      // ketika error hentikan programmnya lalu kasih pesan dengan getMessage()
      die($e->getMessage());
    }
  }

  // buat function untuk menjalankan query()
  // ini kita buat jadi generic, maka querynya bisa dipakai untuk apapun (bisa select, insert, update, dan delete atau apapun) 
  // nah inilah tujuan kita buat wrapper ini, supaya bisa dipakai secara flexibel
  public function query($query)
  {
    $this->stmt = $this->dbh->prepare($query);
  }

  // ketika query sudah disiapkan, nah selanjutnya kita perlu binding datanya (siapa tau di querynya ada where, values, set atau yg lain)
  public function bind($param, $value, $type = null)
  {
    // jika typenya null maka kita lakukan
    if (is_null($type)) {
      switch (true) {
          // jika valuenya integer
        case is_int($value):
          // maka tipenya otomatis di set ke paramater integer
          $type = PDO::PARAM_INT;
          break;
          // jika valuenya boolean
        case is_bool($value):
          // maka tipenya otomatis di set ke parameter bool
          $type = PDO::PARAM_BOOL;
          break;
          // jika valuenya null
        case is_null($value):
          // maka tipenya otomatis di set ke parameter null
          $type = PDO::PARAM_NULL;
          break;
          // untuk defaultnya/ jika bukan semua diatas
        default:
          // maka itu adalah tipe string
          $type = PDO::PARAM_STR;
      }
    }
    // nah ini kita bind valuenya, jadi misalkan where id = 1 (maka akan dicek 1 itu apa? oh integer berarti dikasih option integer). Lalu dia akan di bind ke $param nya apa, ke $value nya apa, ke $type nya apa
    // kenapa di bind maka akan terhindar dari sql injection, karena query di eksekusi setelah stringnya dibersihin terlebih dahulu 
    $this->stmt->bindValue($param, $value, $type);
  }

  // nah ketika sudah di bind maka tinggal dieksekusi
  public function execute()
  {
    // ekseksi dijalankan
    $this->stmt->execute();
  }

  // setelah dieksekusi kita pengen banyak atau hanya 1 saja datanya
  // jika banyak maka :
  public function resultSet()
  {
    $this->execute();
    return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  // jika hanya 1 saja
  public function single()
  {
    $this->execute();
    return $this->stmt->fetch(PDO::FETCH_ASSOC);
  }

  // insert into
  public function rowCount()
  {
    $this->execute();
    return $this->stmt->rowCount();
  }
}
