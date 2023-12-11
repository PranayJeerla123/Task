$(document).ready(function() {
    // Example: Attach a click event to the register button
    $('#registerBtn').click(function() {
        registerUser();
    });
});

function registerUser() {
    var username = $('#username').val();
    var password = $('#password').val();

    // Add other registration fields here if needed

    $.ajax({
        type: 'POST',
        url: 'register.php',
        data: {
            username: username,
            password: password
            // Include other registration data here
        },
        success: function(response) {
            alert(response); // You can handle the response accordingly
            // Redirect to login page or perform other actions as needed
        },
        error: function(error) {
            console.log(error);
            alert('Registration failed. Please try again.');
        }
    });
}
