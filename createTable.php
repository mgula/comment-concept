<?php
/*template for creating a new table*/
$con = mysqli_connect("127.0.0.1", "wilmapco", "testing", "testDB");

$request = "CREATE TABLE CommentTable1 (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(20),
comment VARCHAR(500),
feature VARCHAR(100),
vote VARCHAR(7)
)";


$result = mysqli_query($con, $request);

if ($result) {
	http_response_code(200);
	echo "all good";
} else {
	http_response_code(500);
	echo "nope";
}

mysqli_close($con);
?>