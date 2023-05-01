<?php
require_once('db_config.php');


$name = $_POST['name'];
$attemptNumber = $_POST['attempt'];
$lift = $_POST['lift'];
$weight = $_POST['weight'];

$table->insert('attempts', array(
    'name' => $name,
    'lift' => $lift,
    'attempt' => $attempt,
    'weight' => $weight,
  ));
  
  header('Content-Type: application/json');
  echo json_encode(array('status' => 'success'));


?>