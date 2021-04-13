$(function () {
  // tambah data
  $(".tombolTambahData").on("click", function () {
    // mengubah kembali data yang ada di formTambahData
    $("#formModalLabel").html("Tambah Data Mahasiswa");
    // mengubah kembali button tambah data
    $(".modal-footer button[type=submit]").html("Tambah Data");
  });
  // ubah data
  $(".tampilModalUbah").on("click", function () {
    // mengubah teks Tambah Data Mahasiswa menjadi Ubah Data Mahasiswa
    $("#formModalLabel").html("Ubah Data Mahasiswa");
    // mengubah button tambah data menjadi ubah data
    $(".modal-footer button[type=submit]").html("Ubah Data");
    // mengubah dari localhost tambah menjadi ubah
    $(".wrapper form").attr(
      "action",
      "http://localhost:8080/mvc-php/Introduction/update-data/membuat-aplikasi-mvc-php/public/mahasiswa/ubah"
    );

    // ini untuk kayak ajax
    const id = $(this).data("id");

    // jalankan ajax
    $.ajax({
      url:
        "http://localhost:8080/mvc-php/Introduction/update-data/membuat-aplikasi-mvc-php/public/mahasiswa/getubah",
      data: { id: id },
      method: "post",
      dataType: "json",
      success: function (data) {
        $("#nama").val(data.nama);
        $("#npm").val(data.npm);
        $("#email").val(data.email);
        $("#jurusan").val(data.jurusan);
        $("#id").val(data.id);
      },
    });
  });
});
