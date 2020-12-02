<?php
class Mahasiswa_model
{
  private
    // nama table apa nih
    $table = "mahasiswa",
    // simpan variable untuk menampung class database tadi
    $db;

  // buat method construct
  public function __construct()
  {
    // begitu kelas model dipanggil di controller maka dia otomatis langsung instansiasi kelas Database
    // maka dengan begitu, maka kita bisa memakai semua method di dalamnya
    $this->db = new Database;
  }

  // buat method untuk menampilkan semua datanya
  public function getAllMahasiswa()
  {
    // nah selanjutnya
    $this->db->query("SELECT * FROM " . $this->table);
    return $this->db->resultSet();
  }

  // buat method baru
  public function getMahasiswaById($id)
  {
    // :id untuk menyimpan data yang akan di binding, supaya terhindar dari sql injection
    $this->db->query("SELECT * FROM " . $this->table . " WHERE id=:id");
    // nah kita bind
    $this->db->bind("id", $id);
    // return yang single karena isinya cuma 1, kalau banyak makai resultSet()
    return $this->db->single();
  }
}
