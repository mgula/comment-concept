<?php
/*create a new entry in the table*/

$con = mysqli_connect("127.0.0.1", "wilmapco", "testing", "testDB");

$name=$_POST['name'];
$newComment=$_POST['comment'];
$feature=$_POST['feature'];
$vote=$_POST['vote'];

$request = "INSERT INTO CommentTable1

		(name, comment, feature, vote)

		VALUES

		('".$name."','".$newComment."', '".$feature."', '".$vote."')";


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