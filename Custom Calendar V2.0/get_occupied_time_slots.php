<?php
// Подключение к базе данных
$host = 'localhost';
$db = 'test3';
$user = 'root';
$password = '';

// Create a PDO instance
$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
$pdo = new PDO($dsn, $user, $password);

// Выполнение запроса к базе данных для получения занятых временных слотов
$sql = "SELECT * FROM sessions";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Формирование массива с занятыми временными слотами
$occupiedTimeSlots = array();
foreach ($result as $row) {
  $startTime = date('Y-m-d H:i', strtotime($row['start_Time']));
  $endTime = date('Y-m-d H:i', strtotime($row['end_Time']));
  
  $occupiedTimeSlots[] = array(
    'startTime' => $startTime,
    'endTime' => $endTime
  );
}

// Возвращение данных в формате JSON
header('Content-Type: application/json');
echo json_encode($occupiedTimeSlots);
?>
