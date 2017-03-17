<?php
/*create a new entry in the table*/
$con = mysqli_connect("127.0.0.1", "wilmapco", "testing", "testDB");

if ($stmt = mysqli_prepare($con, "INSERT INTO CommentTable2 (name, email, comment, feature, vote) VALUES (?, ?, ?, ?, ?)")) {
	mysqli_stmt_bind_param($stmt, "sssss", $name, $email, $newComment, $feature, $vote);

	$name=$_POST['name'];
	$email=$_POST['email'];
	$newComment=$_POST['comment'];
	$feature=$_POST['feature'];
	$vote=$_POST['vote'];


	$result = mysqli_stmt_execute($stmt);

	if ($result) {
		http_response_code(200);
		echo "Your comment has been sent!";
	} else {
		http_response_code(500);
		echo "Oops! Something went wrong and we couldn't send your comment.";
	}
} else {
	http_response_code(500);
	echo "Oops! There was an error.";
}

mysqli_close($con);
?>