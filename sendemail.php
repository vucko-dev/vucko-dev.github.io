<?php
if($_POST){
    $name = $_POST['imeiprezime'];
    $email = $_POST['email'];
    $message = $_POST['poruka'];

//send email
    mail("davidvuckovucenovic@gmail.com", "This is an email from:" .$email, $message);
}
?>