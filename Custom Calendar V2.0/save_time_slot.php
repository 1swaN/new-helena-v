<?php
// Получение данных из AJAX-запроса
$name = $_POST['name'];
$phoneNumber = $_POST['phone'];
$email = $_POST['email'];
$startTime = $_POST['startTime'];
$endTime = $_POST['endTime'];

// Форматирование даты и времени в нужный формат
$startTimeFormatted = date('Y-m-d H:i:s', strtotime($startTime));
$endTimeFormatted = date('Y-m-d H:i:s', strtotime($endTime));

// Подключение к базе данных
$servername = "localhost"; // Имя сервера базы данных
$username = "root"; // Ваше имя пользователя базы данных
$password = ""; // Ваш пароль базы данных
$dbname = "test3"; // Имя вашей базы данных

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения с базой данных
if ($conn->connect_error) {
    die("Ошибка соединения с базой данных: " . $conn->connect_error);
}

// Подготовка и выполнение SQL-запроса для вставки данных
$stmt = $conn->prepare("INSERT INTO sessions (Name, PhoneNumber, Email, start_Time, end_Time) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $phoneNumber, $email, $startTimeFormatted, $endTimeFormatted);

if ($stmt->execute()) {
    echo "Данные успешно записаны в базу данных";
} else {
    echo "Ошибка записи данных в базу данных: " . $stmt->error;
}

// Закрытие соединения с базой данных
$stmt->close();
$conn->close();
?>
