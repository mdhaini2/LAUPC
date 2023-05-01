<?php

$attempt = $_GET['attempt'];
$lift = $_GET['lift'];


$query = $table->findSql("SELECT * FROM attempts where attempt = $attempt and lift = $lift");

return $query;

?>