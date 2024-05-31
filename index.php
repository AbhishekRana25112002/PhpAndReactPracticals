<?php

setcookie("user", "abhishek",time() + 5,'/');

if(isset($_COOKIE["user"])) {
    echo "Cookie is set  " .$_COOKIE["user"];
}
else {
    echo "Cookie is not set";
}

?>
