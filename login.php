<?php
$conn = new mysqli("localhost", "root", "", "mysql");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$message = "";
$name="";
$pass="";
if (isset($_POST['username']) && isset($_POST['password'])) {
    $name = $_POST['username'];
    $pass = $_POST['password'];
    $result = $conn->query( "SELECT * FROM student WHERE name ='$name' AND password ='$pass'");

    if ($result->num_rows > 0) {
        $message = "Login successful! Username and Password are correct";
    } else {
        $message = "Invalid credentials. Please try again.";
    }
}
echo  $message;

$conn->close();
?>