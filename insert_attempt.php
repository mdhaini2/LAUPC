<?php
require_once('db_config.php');


$name = $_POST['name'];
$attemptNumber = $_POST['attempt'];
$lift = $_POST['lift'];
$weight = $_POST['weight'];

$table->insert('attempts', array(
    'name' => $name,
    'lift' => $lift,
    'attempt' => $attemptNumber,
    'weight' => $weight,
  ));
  
  echo json_encode(array('status' => 'success'));


?>