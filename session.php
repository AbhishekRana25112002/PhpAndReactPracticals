<?php
// Start the session
session_start();

$_SESSION["username"] = "Abhi";
$_SESSION["email"] = "abhishekrana";

// Check if session variables are set
if(isset($_SESSION["username"]) && isset($_SESSION["email"])) {
    // Retrieve the session variables
    $username = $_SESSION["username"];
    $email = $_SESSION["email"];
    
    echo "Username: " . $username . "<br>";
    echo "Email: " . $email;
} else {
    echo "Session variables are not set.";
}
?>

