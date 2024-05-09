<?php 
	require 'PHPMailer00/PHPMailer.php'; // filepath to the PHPMailer class
	require 'PHPMailer00/SMTP.php';
	require 'PHPMailer00/Exception.php';
	include('../../../secrets.php');

    $name = $_POST['name'];
	$from = $_POST['email']; // this is the sender's Email address;
	$message = $_POST['message'];
	$subject = $_POST['subject'];
	$recaptchaVerify = false;
	
	$secret = $recaptcha;
	$token = $_POST["recaptchaToken"];
	$verify=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$token}");
	$captcha_success=json_decode($verify);
	if ($captcha_success->success==false) {
		$data = array('error' => 'Not verified by Google Recaptcha');
		echo json_encode(array('data' => $data));
		return;
	}
	else if ($captcha_success->success==true) {
		$recaptchaVerify = true;
	}

	
	if (strlen($name) < 1 || strlen($name) > 100) {
		$data = array('error' => 'Name must not be blank and must be 100 characters or less');
		echo json_encode(array('data' => $data));
		return;
	}
	
	if (strlen($from) < 1) {
		$data = array('error' => 'Email must not be blank');
		echo json_encode(array('data' => $data));
		return;
	}
	
	if (strlen($message) < 1 || strlen($message) > 2000 ) {
		$data = array('error' => 'Message must not be blank and must be less than 2000 characters');
		echo json_encode(array('data' => $data));
		return;
	}
	
	if (strlen($subject) < 1 || strlen($subject) > 100 ) {
		$data = array('error' => 'Subject must not be blank, and less than 2000 characters');
		echo json_encode(array('data' => $data));
		return;
	}
	
	
	
	$to = $sendtoemailaddress; // this is your Email address
	$toCustomer = $from; // this is the customers Email address
        
    $messageMailer = "Customer Name: " . $name . "\nCustomer Email: " . $from . "\n\nSent a contact email with the subject: " . $subject . "\n\nThey left the following message: \n\n" . $message;
    
	$mail = new PHPMailer\PHPMailer\PHPMailer();
	
	$mail->IsSMTP(); // enable SMTP
    $mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "michaelbaggott.site";
    $mail->Port = 465; // or 587
    $mail->IsHTML(false);
    $mail->Username = $emailusername; // This is the email address that you setup in cpanel	
    $mail->Password = $emailpass; // This is the password for that email address from cpanel
    $mail->SetFrom($emailusername);
    $mail->Subject = $subject;
    $mail->Body = $messageMailer;
    $mail->AddAddress($to);
	
	if (!$mail->send()) { 
		$result1 = array('status'=>"error", 'message'=>"Mailer Error: " . $mail->ErrorInfo);
	} else {
		$result1 = array('status'=>"success", 'message'=>"Message sent.");
	}
	
	$mail = new PHPMailer\PHPMailer\PHPMailer();
		    
	$data = array('message' => 'Your email has been sent, Thank you.', "recaptchaVerified" => $recaptchaVerify);
	echo json_encode(array('data' => $data));
	header("Location:https://michaelbaggott.site/portfolio/dig251-react-ts/");
?>