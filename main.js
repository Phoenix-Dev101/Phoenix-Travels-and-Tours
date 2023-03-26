// Replace YOUR_EMAIL_ADDRESS with your email address
// Replace YOUR_SMTPJS_API_KEY with your SMTPJS API key
Email.send({
   Host: "smtp.smtpjs.com",
   Username: "B8F64F859FD99973466FA2B5164C84F8C80228554B657D02B63B9DADF14633A48CE5472A03F04C4268C73190AA131EDD",
   Password: "B8F64F859FD99973466FA2B5164C84F8C80228554B657D02B63B9DADF14633A48CE5472A03F04C4268C73190AA131EDD",
   To: "mailstoarchisha@gmail.com",
   From: "noreply@example.com",
   Subject: "New message from contact form",
   Body: "Name: " + document.getElementById("contact-form").elements.namedItem("name").value +
         "<br>Email: " + document.getElementById("contact-form").elements.namedItem("email").value +
         "<br>Phone: " + document.getElementById("contact-form").elements.namedItem("phone").value +
         "<br>Message: " + document.getElementById("contact-form").elements.namedItem("message").value
 }).then(
   message => alert("Message sent successfully")
 );
 
