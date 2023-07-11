<?php
// Assuming you have already established a database connection
// Replace the placeholders with your actual database credentials
$host = 'localhost';
$db = 'test3';
$user = 'root';
$password = '';

// Create a PDO instance
$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
$pdo = new PDO($dsn, $user, $password);

// Retrieve the POST data from the AJAX request
// $name = $_POST['name'];
// $phone = $_POST['phone'];
// $email = $_POST['email'];
$startTime = $_POST['startTime'];
$endTime = $_POST['endTime'];

// Convert the start and end times to MySQL datetime format
$startDateTime = date('Y-m-d H:i:s', strtotime($startTime));
$endDateTime = date('Y-m-d H:i:s', strtotime($endTime));
// Prepare the SQL query to check for overlapping time slots
$sql = "SELECT * FROM sessions WHERE start_Time < :endDateTime AND end_Time > :startDateTime";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':startDateTime', $startDateTime);
$stmt->bindParam(':endDateTime', $endDateTime);
$stmt->execute();

// Check if any overlapping time slots are found
$available = $stmt->rowCount() === 0;
// Return the availability status as JSON response
$response = array('available' => $available ? true : false);
header('Content-Type: application/json');
echo json_encode($response);
