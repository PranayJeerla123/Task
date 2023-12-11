$(document).ready(function() {
    // Fetch and display user profile details on page load
    fetchUserProfile();

    // Example: Update profile details when the user clicks the update button
    $('#updateProfileBtn').click(function() {
        updateProfile();
    });
});

function fetchUserProfile() {
    // Implement AJAX request to retrieve user profile details from the server
    $.ajax({
        type: 'GET',
        url: 'getProfile.php', // Replace with the actual endpoint
        success: function(response) {
            // Handle the retrieved profile details and display on the page
            // Example: Update HTML elements with user profile information
            $('#usernameDisplay').text(response.username);
            $('#ageDisplay').text(response.age);
            $('#dobDisplay').text(response.dob);
            // Add other profile details as needed
        },
        error: function(error) {
            console.log(error);
            alert('Error fetching user profile.');
        }
    });
}

function updateProfile() {
    // Collect updated profile data from user input fields
    var updatedData = {
        age: $('#ageInput').val(),
        dob: $('#dobInput').val(),
        // Add other profile fields as needed
    };

    // Implement AJAX request to update user profile details on the server
    $.ajax({
        type: 'POST',
        url: 'updateProfile.php', // Replace with the actual endpoint
        data: updatedData,
        success: function(response) {
            alert(response); // You can handle the response accordingly
            // Update the displayed profile details on success
            fetchUserProfile();
        },
        error: function(error) {
            console.log(error);
            alert('Error updating user profile.');
        }
    });
}
