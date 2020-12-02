<div class="container mt-3">
  <div class="row">
    <div class="col-6">
      <?php Flasher::flash(); ?>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary mb-3 tombolTambahData" data-toggle="modal" data-target="#forModal">
        Tambah Data Mahasiswa
      </button>
      <h3>Daftar Mahasiswa</h3>
      <ul class="list-group">
        <?php foreach ($data["mhs"] as $mhs) : ?>
          <li class="list-group-item">
            <?= $mhs["nama"]; ?>
            <a href="<?= BASEURL; ?>/mahasiswa/hapus/<?= $mhs["id"]; ?>" class="badge badge-danger float-right ml-1" onclick="return confirm('yakin?');">hapus</a>
            <a href="<?= BASEURL; ?>/mahasiswa/ubah/<?= $mhs["id"]; ?>" class="badge badge-success float-right ml-1 tampilModalUbah" data-toggle="modal" data-target="#forModal" data-id="<?= $mhs["id"]; ?>">ubah</a>
            <a href="<?= BASEURL; ?>/mahasiswa/detail/<?= $mhs["id"]; ?>" class="badge badge-primary float-right ml-1">detail</a>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="forModal" tabindex="-1" aria-labelledby="judulModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="formModalLabel">Tambah Data Mahasiswa</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="wrapper">
        <form action="<?= BASEURL; ?>/mahasiswa/tambah" method="POST">
          <div class="modal-body">
            <div class="form-group">
              <label class="sr-only" for="id">id</label>
              <input type="hidden" class="form-control" name="id" id="id" placeholder="id">
            </div>
            <div class="form-group">
              <label for="nama">Nama</label>
              <input type="text" name="nama" id="nama" class="form-control" placeholder="Masukkan nama">
            </div>
            <div class="form-group">
              <label for="npm">NPM</label>
              <input type="number" name="npm" id="npm" class="form-control" placeholder="Masukkan npm">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" class="form-control" placeholder="Masukkan email">
            </div>
            <div class="form-group">
              <label for="jurusan">Jurusan</label>
              <select class="form-control" name="jurusan" id="jurusan">
                <option value="Ilmu Komputer">Ilmu Komputer</option>
                <option value="Kimia">Kimia</option>
                <option value="Manajemen Informatika">Manajemen Informatika</option>
                <option value="Biologi">Biologi</option>
                <option value="Matematika">Matematika</option>
                <option value="Fisika">Fisika</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Tambah Data</button>
        </form>
      </div>
    </div>
  </div>
</div>
</div>