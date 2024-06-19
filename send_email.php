<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(strip_tags(trim($_POST["name"])));
    $email = htmlspecialchars(strip_tags(trim($_POST["email"])));
    $mobile = htmlspecialchars(strip_tags(trim($_POST["mobile"])));
    $message = htmlspecialchars(strip_tags(trim($_POST["message"])));

    // Recipient email address
    $to = "Info@tokenofmercy.org";

    // Email subject
    $subject = "New Contact Form Submission";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Mobile: $mobile\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $name <$email>";

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        // Success message
        echo "Thank you! Your message has been sent.";
    } else {
        // Failure message
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // Prevent direct access
    echo "There was a problem with your submission, please try again.";
}
?>
