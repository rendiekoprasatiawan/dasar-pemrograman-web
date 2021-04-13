<?php
// autoloading
spl_autoload_register(function ($class) {
  // App\Produk\user = ["App", "Produk", "User"]
  $class = explode("\\", $class);
  $class = end($class);
  include_once __DIR__ . "/Produk/" . $class . ".php";
});

spl_autoload_register(function ($class) {
  // App\Produk\user = ["App", "Produk", "User"]
  $class = explode("\\", $class);
  $class = end($class);
  include_once __DIR__ . "/Service/" . $class . ".php";
});
