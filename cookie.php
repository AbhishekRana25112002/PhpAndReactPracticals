<!DOCTYPE html>
<html>
<body>

<?php
$cookie_name = "user";
$cookie_value = "John Doe";
$cookie_expiry = time() + (86400 * 30); // 86400 = 1 day

// Setting the cookie
setcookie($cookie_name, $cookie_value, $cookie_expiry, "/");

// Check if the cookie is set
if(isset($_COOKIE[$cookie_name])) {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
} else {
    echo "Cookie named '" . $cookie_name . "' is not set!";
}

// Deleting the cookie
if(isset($_POST['delete_cookie'])) {
    setcookie($cookie_name, "", time() - 3600, "/"); // Set the expiration date to one hour ago
    echo "Cookie named '" . $cookie_name . "' is deleted.<br>";
}
?>

<form method="post">
    <input type="submit" name="delete_cookie" value="Delete Cookie">
</form>

</body>
</html>
