<?php

require_once('db_config.php');


$query = $table->findSql("select * from attempts");

return $query;


?>