<!-- function adalah potongan program atau baris2 kode yang kita buat untuk mempermudah kita pada saat merogram, nah kode program tadi kita bisa kasih nama lalu kita bisa panggil berulang-ulang -->

<!--
ada 2 jenis function :
1. Built-in Function  : fungsi yang sudah disediakan oleh php. php terkenal memiliki built-in-function yang sangat banyak (untuk mempermudah kita dalam membuat aplikasi)
2. User-Defined Function : fungsi yang kita buat sendiri
-->

<!-- #### Built-in Function #### -->
<!--
  Date/Time :
  1. time()
  2. date()
  3. mktime()
  4. strtotime()
  
-->

<!-- kita memanggil function php date -->
<?php
$today = date("F j, Y");
echo "{$today}";
?>

<br>

<!-- kita memanggil function php time -->
<?php
$nextWeek = time() + (7 * 24 * 60 * 60);
// 7 days; 24 hours; 60 mins; 60 secs
echo "Now:       " . date('Y-m-d') . "\n";
echo "Next Week: " . date('Y-m-d', $nextWeek) . "\n";
// or using strtotime():
echo "Next Week: " . date('Y-m-d', strtotime('+1 week')) . "\n";
?>

<br>

<!-- mktime -->
<?php
echo date("l", mktime(0, 0, 0, 10, 03, 1999));
?>

<br>

<!-- strtotime -->
<?php
echo date("l", strtotime("03 october 1999"));
?>

<br>

<!-- strlen -->
<?php
$str = "abcdef";
echo strlen($str); // 6

echo "<br>";

$str = " ab cd ";
echo strlen($str); // 7
?>

<br>

<!-- strcmp -->
<?php
$var1 = "Hello";
$var2 = "hello";
if (strcmp($var1, $var2) !== 0) {
  echo "$var1 is not equal to $var2 in a case sensitive string comparison";
}
?>

<br>

<!-- explode -->
<?php
// Example 1
$pizza  = "piece1 piece2 piece3 piece4 piece5 piece6";
$pieces = explode(" ", $pizza);
echo "<br>";
echo $pieces[0]; // piece1
echo "<br>";
echo $pieces[1]; // piece2

echo "<br>";

// Example 2
$data = "foo:*:1023:1000::/home/foo:/bin/sh";
list($user, $pass, $uid, $gid, $gecos, $home, $shell) = explode(":", $data);
echo "<br>";
echo $user; // foo
echo "<br>";
echo $pass; // *

?>

<br>

<!-- htmlspecialchars -->
<?php
$new = htmlspecialchars("<a href='test'>Test</a>", ENT_QUOTES);
echo $new; // &lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;
?>

<br>

<!-- var_dump -->
<?php
$a = array(1, 2, array("a", "b", "c"));
var_dump($a);
?>

<br>

<!-- isset -->
<?php

$var = '';

// This will evaluate to TRUE so the text will be printed.
if (isset($var)) {
  echo "This var is set so I will print.";
}

echo "<br>";

// In the next examples we'll use var_dump to output
// the return value of isset().

$a = "test";
$b = "anothertest";

var_dump(isset($a));      // TRUE
echo "<br>";
var_dump(isset($a, $b)); // TRUE

echo "<br>";

unset($a);

var_dump(isset($a));     // FALSE
echo "<br>";
var_dump(isset($a, $b)); // FALSE

echo "<br>";

$foo = NULL;
var_dump(isset($foo));   // FALSE

?>

<br>

<!-- empty -->
<?php
$expected_array_got_string = 'somestring';
var_dump(empty($expected_array_got_string["some_key"]));
var_dump(empty($expected_array_got_string[0]));
var_dump(empty($expected_array_got_string["0"]));
var_dump(empty($expected_array_got_string[0.5]));
var_dump(empty($expected_array_got_string["0.5"]));
var_dump(empty($expected_array_got_string["0 Mostel"]));
?>

<br>

<!-- ##### Latihan Function ##### -->
<?php
function salam($waktu = "datang", $nama = "Administrator")
{
  return "Selamat $waktu, $nama!";
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Latihan Function</title>
</head>

<body>
  <h1><?= salam("Siang"); ?></h1>
</body>

</html>