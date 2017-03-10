<?php
/*comment field length is currently 100 - should probably be something like 500*/

$con = mysqli_connect("127.0.0.1", "wilmapco", "testing", "testDB");

$newComment=$_POST['comment'];

$request = "INSERT INTO Comments

		(com)

		VALUES

		('".$newComment."')";


$result = mysqli_query($con, $request);

if ($result) {
	http_response_code(200);
	echo "Your comment has been sent!";
} else {
	http_response_code(500);
	echo "Oops! Something went wrong and we couldn't send your comment.";
}

mysqli_close($con);

?>