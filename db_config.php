<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// Establish a database connection using PDO
$pdo = new PDO('mysql:host=localhost; dbname=laupc_db', 'quiver', '123123123');

error_reporting(E_ALL);
ini_set("display_errors",'on');
// Create a new Table object using the PDO instance
$table = new Table($pdo);


class Table {
    protected $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function findSql($sql, $params = array()) {
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function find($table, $id) {
        $stmt = $this->pdo->prepare("SELECT * FROM $table WHERE id = :id");
        $stmt->execute(['id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
      }

      public function insert($tableName,array $data): bool {
        $columns = implode(',', array_keys($data));
        $values = implode(',', array_fill(0, count($data), '?'));
    
        $statement = $this->pdo->prepare("INSERT INTO $tableName ($columns) VALUES ($values)");
    
        return $statement->execute(array_values($data));
      }
}


?>