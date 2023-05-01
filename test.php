<?php

require_once('db_config.php');


$query = $table->findSql("select * from attempts");

echo json_encode(array('status' => 'success',
'data'=> $query
));


?>