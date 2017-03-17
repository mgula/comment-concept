<?php
/*basic test script to dump database contents*/
$con = mysqli_connect("127.0.0.1", "wilmapco", "testing", "testDB");

$request = "SELECT * FROM CommentTable2";

$result = mysqli_query($con, $request);

while($row = mysqli_fetch_array($result)) {
    echo "Name: " . $row['name'] . " | Email: " . $row['email'] . " | Comment: " . $row['comment'] . " | Feature: " . $row['feature'] . " | Vote: " . $row['vote'] . PHP_EOL;
}

mysqli_close($con);
?>