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
    $password = $_POST['password'];

    // Use prepared statement to retrieve password from MySQL
    $stmt = $mysqli->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($hashedPassword);
    $stmt->fetch();
    $stmt->close();

    if (password_verify($password, $hashedPassword)) {
        // Passwords match, login successful
        echo "Login successful!";
        // Implement session management using local storage and Redis
        // Redirect to profile page or perform other actions as needed
    } else {
        // Incorrect credentials
        echo "Invalid username or password.";
    }
}

$mysqli->close();
?>
