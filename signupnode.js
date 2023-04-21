document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Validate form inputs
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        document.getElementById("error-msg").textContent = "Please fill in all fields.";
    } else if (password !== confirmPassword) {
        document.getElementById("error-msg").textContent = "Passwords do not match.";
    } else {
        // Perform actions for successful sign-up, e.g. send data to server
        alert("Sign-up successful!");
    }
});
