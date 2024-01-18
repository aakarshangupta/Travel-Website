<?php
    $username = $_POST['username'];
    $password = $_POST['password'];                     
    $email = $_POST['email'];


    $conn = new mysqli('localhost','root','','test');
    if ($conn->connect_error) {
        die('Connection Failed : '. $conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(username, email, password)
            values(?, ?, ?)");
        $stmt->bind_param("sss",$username, $email, $password);
        $stmt->execute();
        echo "registration SUccessfully...";
        $stmt->close();
        $conn->close() ;

    }

?>
