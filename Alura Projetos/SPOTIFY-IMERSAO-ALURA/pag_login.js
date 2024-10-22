document.querySelector('.button').addEventListener('click', function() {
    alert('Form submitted! (Note: This is a simulated action.)');
});

document.querySelector('.fa-google').addEventListener('click', function() {
    alert('Em breve você poderá se inscrever com o Google! (Note: This is a simulated action.)');
});

document.querySelector('.fa-facebook').addEventListener('click', function() {
    alert('Em breve você poderá se inscrever com o Facebook! (Note: This is a simulated action.)');
});
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Signup functionality would be implemented here. (Note: This is a simulated action.)');
});
