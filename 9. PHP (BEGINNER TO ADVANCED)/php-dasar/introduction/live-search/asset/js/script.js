// ambil elemen2 yang dibutuhkan
let keyword = document.getElementById("keyword");
let tombol_cari = document.getElementById("tombol-cari");
let container = document.getElementById("container");

// tambahkan event ketika keyword ditulis
keyword.addEventListener("keyup", function () {
  // buat objek ajax
  httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (this.readyState == 4 && this.status == 200) {
        // Everything is good, the response was received.
        alert("ok");
      } else {
        // Everything is not good, the response was received.
        alert("not okay!");
      }
    }
  };

  httpRequest.open("GET", "../../ajax/daftar-buku.php", true);
  httpRequest.send();
});
