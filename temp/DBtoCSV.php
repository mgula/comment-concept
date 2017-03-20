<?php
/*script to dump database contents to a .csv file*/
$con = mysqli_connect("127.0.0.1", "wilmapco", "testing", "testDB");

$request = "SELECT * FROM CommentTable2";

$result = mysqli_query($con, $request);

if ($result) {
	$fp = fopen('C:\Users\Intern2.WILMAPCO\Desktop\comments.csv', 'w');
	
	$data = array();
	
	while($row = mysqli_fetch_array($result)) {
		$data[] = array($row['name'], $row['email'], $row['comment'], $row['feature'], $row['vote']);
	}
	
	foreach ($data as $fields) {
		fputcsv($fp, $fields);
	}
	
	fclose($fp);
} else {
	http_response_code(500);
	echo "Couldn't access database.";
}
mysqli_close($con);
?>