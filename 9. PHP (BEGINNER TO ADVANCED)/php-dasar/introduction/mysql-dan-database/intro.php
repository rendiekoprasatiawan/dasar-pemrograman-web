<!-- Data : Referensi fakta di dunia nyata -->
<!--
  1. Nama seseoranng itu adalah data
  2. Judul Buku itu juga adalah sebuah data
  3. No KTP seseorang itu juga adalah data
  4. Harga itu juga adalah sebuah data
  5. Foto itu juga adalah sebuah data
  6. Video itu juga adalah sebuah data
  7. Dokumen itu juga adalah sebuah data
  dll

  // nah biasanya data-data ini saling terkait dan bisa kita hubungkan terhadap sesuatu, misalnya:
  1. Buku : ketika kita bicara tentang buku, maka akan ada data2 yang terkait dengan buku itu.
     Misalnya, buku pasti punya judul, dan ada pengarang, dan ada penerbit, dan tahun terbit, dll
  -->

<!-- #### - Pengelolaan data - #### -->
<!--
  // mengelola data bisa dengan:
  1. Pengelolaan data juga bisa dilakukann dengan menggunakan excel, tetapi..
  
  // Ada masalah jika kita menggunakan excel
  1. Kapasitas: Karena semakin lama ukuran file itu pasti akan semakin besar(membengkak).
  2. Kecepatan: Kecepatan akses dan mencari juga akan menjadi masalah ketika kita menggunakan excel saja.
  3. Keamanan: Siapa yang bisa mengakses data tsb, apakah datanya dapat dengan mudah dilihat orang lain, dan apakah datanya dapat dengan mudah di modifikasi orang lain.
  4. Duplikasi: Bagaimana jika ada data yang sama sudah pernah masuk ke dalam tabelnya. Itu bisa ditangani atau tdak.
  5. dll

  // Solusinya : menggunakan Database.
  1. Skalabilitas: Jika data bertambah sistem atau aplikasi mampu menangani itu.
  2. Tersedia: Kapanpun kita minta dan kapanpun kita cari.. datanya ada.
  3. Aman: securitynya terjaga.
  4. Permanen: Bukan hanya di memory saja, tapi tersimpan secara permanen.
-->

<!-- #### - Database - #### -->
<!-- 
  // Database adalah kumpulan data yang disimpan secara sistematis di dalam komputer yang dapat diolah atau dimanipulasi menggunakan perangkat lunak (software) program atau aplikasi untuk menghasilkan informasi.
  
  // Database itu tidak sama dengan:
  1. Oracle
  2. MySQL
  3. SQL Server
  4. PostgreSQL
  5. MongoDB

  // akan tetapi ke-5 itu adalah: DBMS (DATABASE MANAGEMENT SYSTEM)
  Dikenal dengan software untuk mengelola database.
-->

<!-- #### - DBMS - #### -->
<!-- 
  // DBMS memiliki banyak database di dalamnya.
  // DBMS mampu mengelola banyak database.


  // Jenis-jenis DBMS
  1. Relational DBMS
  2. Hierarchical DBMS
  3. Network DBMS
  4. NoSQL DBMS: tidak menggunakan SQL

  // Kita akan mempelajari Relational DBMS
  // ini buat keterhubungan antar datanya

  1. RDBMS ini bisa banyak tabel, misal database sebuah universitas: ada banyak tabel di dalamnya, ada tabel mahasiswa, ada tabel dosen, ada tabel mata kuliah, dsb. Nah masing2 tabel tsb bisa kita hubungkan dengan sebuah relasi.
  2. Nah untuk tabelnya sendiri representasinya sama dengan excel tadi (ada baris: record dan ada column: field)
  3. Ada aturan untuk pengisian fieldnya(tipe datanya apa).
  

  // Dalam sebuah tabel itu ada sebuah konsep yang dinamakan dengan Primary Key (Kunci Utama).
  // Primary Key itu adalah sebuah data, yang dapat merepresentasikan satu baris record secara unik.


  // DBMS yang kita gunakan adalah MYSQL
-->

<!-- #### - MYSQL - #### -->
<!-- #### - Tata Cara membuat database dan pengelolaannya - #### -->
<!-- 
  1. masuk ke command prompt : C:\xampp\mysql\bin>mysql -u root -p
  2. cek dulu database yang ada (tentatif) : show databases;
  3. baru buat database yang diinginkan : create database phpdasar;
  4. cek lagi databasenya sudah dibuatkan atau belum : show databases;
  4. untuk mengelola database yang telah dibuat tadi, harus masuk dulu ke databasenya : use phpdasar;
  5. untuk membuat tabel yang diinginkan, menggunakan syntax :
      create table daftarbuku (
      -> id int primary key auto_increment,
      -> judul varchar(100),
      -> kode varchar(100),
      -> pengarang varchar(100),
      -> penerbit varchar(100),
      -> gambar varchar(100)
      -> );
  6. untuk mengecek table yang telah dibuat : show tables;
  7. untuk melihat isi table yang telah dibuat : describe daftarbuku;
  8. untuk mengisi data di table :
      insert into daftarbuku values ('', 'Sistem Informasi Geografis', '12345678', 'Rendi Eko Prasatiawan', 'Ilmu Komputer', 'sig.jpg');
      insert into daftarbuku values ('', 'Desain Analisis dan Algoritma', '87654321', 'Putri Okta Nadia', 'Kimia', 'daa.jpg');
      insert into daftarbuku values ('', 'Machine Learning', '34672819', 'Pariaman Ginting', 'Fisika', 'ml.jpg');
  9. Untuk melihat semua data yang telah kita buat tadi : select * from daftarbuku;
  10. Untuk melihat beberapa data yang telah kita buat tadi : select judul, pengarang from daftarbuku;
  11. untuk pencarian khusus : select * from daftarbuku where kode = '12345678';
  12. untuk melakukan perubahan terhadap data yang ingin diubah : update daftarbuku set penerbit  = 'S1 Kimia' where id = 2;
  13. menghapus isi data di table : delete from daftarbuku where id = 3;
  14. menghapus semua tabel : drop table daftarbuku;
  15. menghapus database : drop database phpdasar;
-->