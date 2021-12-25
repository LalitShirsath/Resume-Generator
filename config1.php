<?php

	

		$nameField = $_POST['nameField'];
		$contactField = $_POST['contactField'];
		$emailField = $_POST['emailField'];
		$addressField = $_POST['addressField'];

		$fbField = $_POST['fbField'];
		$instaField = $_POST['instaField'];
		$linkedField = $_POST['linkedField'];
		
		$objective = $_POST['objective'];
		$weField = $_POST['weField'];
		$aqField = $_POST['aqField'];
		$skField = $_POST['skField'];
		$prField = $_POST['prField'];

		$image = $_FILES['file'];

			$imagefilename = $image['name'];
			$imagfiletemp = $image['tmp_name'];

			$filename_seperate = explode('.',$imagefilename);
			$file_extension = strtolower(end($filename_seperate));
			$extension = array('jpeg','jpg','png');
			if(in_array($file_extension,$extension))
			{
				$upload_image='images/'.$imagefilename;
				move_uploaded_file($imagfiletemp,$upload_image);
			}

	
	
	// Database connection
	$conn = new mysqli('localhost','root','','my');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {

		$stmt = $conn->prepare("insert into resume(nameField, contactField, emailField, addressField, fbField, instaField, linkedField, objective, weField, aqField, skField, prField, image) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sisssssssssss", $nameField, $contactField, $emailField, $addressField, $fbField, $instaField, $linkedField, $objective, $weField, $aqField, $skField, $prField, $upload_image);
		$execval = $stmt->execute();
        
		$stmt->close();
		$conn->close();
	}
?>