<div class="container mt-5">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"><?= $data["mhs"]["nama"]; ?></h5>
      <h6 class="card-subtitle mb-2 text-muted"><?= $data["mhs"]["npm"]; ?></h6>
      <p class="card-text"><?= $data["mhs"]["email"]; ?></p>
      <p href="#" class="card-link"><?= $data["mhs"]["jurusan"]; ?></p>
      <a href="<?= BASEURL; ?>/mahasiswa" class="card-link btn btn-primary ml-0">Kembali</a>
    </div>
  </div>
</div>