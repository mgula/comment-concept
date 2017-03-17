<?php
/*basic test script to clear a table*/
$con = mysqli_connect("127.0.0.1", "wilmapco", "testing", "testDB");

$request = "TRUNCATE TABLE CommentTable2";

$result = mysqli_query($con, $request);

if ($result) {
	http_response_code(200);
	echo "Database cleared.";
} else {
	http_response_code(500);
	echo "Couldn't clear database.";
}

mysqli_close($con);
?>