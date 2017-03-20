<?php
/*template for creating a new table*/
$con = mysqli_connect("127.0.0.1", "wilmapco", "testing", "testDB");

$request = "CREATE TABLE CommentTable2 (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(40),
email VARCHAR(60),
comment VARCHAR(800),
feature VARCHAR(150),
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