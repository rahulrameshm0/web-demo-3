function sendEmail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        date: document.getElementById("date").value,
    };
        emailjs.send("service_4d81wow", "template_ha5borb", parms).then(alert("Email sent!"))

};

