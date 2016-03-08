<?php
$inputJSON = file_get_contents('php://input');
$input = json_decode( $inputJSON, TRUE );
// check if fields passed are empty
if(empty($input['Name'])  		||
   empty($input['Phone']) 		||
   empty($input['Email']) 		||
   empty($input['Message'])	||
   !filter_var($input['Email'],FILTER_VALIDATE_EMAIL))
   {
      http_response_code(400);
      // $retVal = "No arguments Provided!";
      return $retVal;
   }
	
$name = $input['Name'];
$phone = $input['Phone'];
$email_address = $input['Email'];
$message = $input['Message'];
	
// create email body and send it	
$to = 'wishuponastarprojects@gmail.com'; // PUT YOUR EMAIL ADDRESS HERE
$email_subject = "Wish Upon a Star Contact Form:  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
$email_body = "You have received a new message from your website's contact form.\n\n"."Here are the details:\n\nName: $name\n\nPhone: $phone\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: noreply@wishuponastarindustries.co.za\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
http_response_code(200);
// $retVal = "OK";
return $retVal;			
?>