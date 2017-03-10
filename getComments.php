<?php
/*basic test script to dump database contents*/

$con = mysqli_connect("127.0.0.1", "wilmapco", "testing", "testDB");

$request = "SELECT * FROM Comments";

$result = mysqli_query($con, $request);

while($row = mysqli_fetch_array($result)) {
    echo $row['com'] . PHP_EOL;
}
?>