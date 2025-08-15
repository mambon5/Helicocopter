
<?php

    $servername = "localhost";
    $username = "user_helico";      // id12095050_roma 
    $password = "helico_pass";              //Joricopter_3
    $database = "helicopter";    //id12095050_articlesdstuds

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

