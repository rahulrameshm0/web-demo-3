function sendEmail(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let params = {
        to_email: document.getElementById("email").value, // The email entered in the form (Recipient)
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        date: document.getElementById("date").value
    };

    console.log("Sending email to:", params.to_email); // Debugging

    emailjs.send("service_4d81wow", "template_ha5borb", params)
        .then(response => {
            alert("Email sent successfully to " + params.to_email);
            console.log("SUCCESS:", response);
        })
        .catch(error => {
            alert("Failed to send email. Check console.");
            console.error("FAILED:", error);
        });
}
