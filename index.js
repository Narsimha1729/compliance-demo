function toggleLogin() {
    const loginCard = document.getElementById('loginCard');
    const complyText = document.getElementById('complyText');
    if (loginCard.style.display === 'none' || loginCard.style.display === '') {
        loginCard.style.display = 'block';
        complyText.style.display = 'none';
    } else {
        loginCard.style.display = 'none';
        complyText.style.display = 'block';
    }
}


function validateLogin(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if the username and password match (this is just a simulation)
    if (username === "Comply" && password === "123") {
        // If it's a match, redirect to a new page
        window.location.href = "Comply/industry/industry.html"; // Replace 'dashboard.html' with your desired URL
    } else {
        // If it's not a match, display an error or handle it accordingly
        alert("Invalid username or password");
    }
}
