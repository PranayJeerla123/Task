function loginUser() {
    var username = $('#username').val();
    var password = $('#password').val();

    $.ajax({
        type: 'POST',
        url: 'login.php',
        data: {
            username: username,
            password: password
        },
        success: function(response) {
            alert(response); // You can handle the response accordingly
            // Redirect to profile page or perform other actions as needed
        },
        error: function(error) {
            console.log(error);
            alert('Login failed. Please check your credentials and try again.');
        }
    });
}
