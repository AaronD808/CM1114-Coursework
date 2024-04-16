var counter = 2;

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password!');
        return;
    }

    if (counter % 2 === 0) {
        alert('You have been logged in!');
    } else {
        alert('You have been logged out!');
    }
    counter += 1;
}
