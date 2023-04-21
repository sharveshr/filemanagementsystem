document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate username and password
    if (username === "user123" && password === "password123") {
        // Redirect to home page or perform other actions for successful login
        alert("Login successful!");
    } else {
        document.getElementById("error-msg").textContent = "Invalid username or password.";
    }
});
