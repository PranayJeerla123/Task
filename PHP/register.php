<?php
// Establish MySQL connection
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = "your_password"; // Replace with your MySQL password
$database = "taskdb";

$mysqli = new mysqli($servername, $username, $password, $database);

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    
    // Use prepared statement to insert data into MySQL
    $stmt = $mysqli->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $password);

    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Error during registration: " . $stmt->error;
    }

    $stmt->close();
}

$mysqli->close();
?>
