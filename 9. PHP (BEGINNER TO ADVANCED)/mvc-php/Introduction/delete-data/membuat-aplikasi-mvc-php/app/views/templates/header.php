<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Halaman <?= $data["judul"]; ?></title>
  <link rel="stylesheet" href="<?= BASEURL; ?>/css/bootstrap.min.css">
  <link rel="stylesheet" href="<?= BASEURL; ?>/css/style.css">
</head>

<body>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container navbar-fixed-top" id="task_flyout">
      <a class="navbar-brand" href="https://twitter.com/rendiekoprstwn" target="_blank">
        RenkoPras
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-link active page-scroll" href="<?= BASEURL; ?>">
            Home
            <span class="sr-only">(current)</span>
          </a>
          <a class="nav-link page-scroll" href="<?= BASEURL; ?>/mahasiswa">
            Mahasiswa
          </a>
          <a class="nav-link page-scroll" href="<?= BASEURL; ?>/about">
            About
          </a>
        </div>
      </div>
    </div>
  </nav>
  <!-- akhir navbar -->