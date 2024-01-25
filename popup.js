// validation.js
function validateForm() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;

    if (firstName === "") {
        alert("Please enter your first name.");
        return;
    }

    if (lastName === "") {
        alert("Please enter your last name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    // Basic email validation using a regular expression
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If all checks pass, you can submit the form or perform further actions
    alert("Your discount code is: STUDENT25!");
}