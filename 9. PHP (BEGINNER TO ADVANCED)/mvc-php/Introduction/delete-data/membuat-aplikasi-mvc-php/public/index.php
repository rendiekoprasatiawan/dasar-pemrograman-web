<?php
// jalankan session
if (!session_id()) {
  session_start();
}

include_once __DIR__ . "/../app/init.php";

$app = new App();
