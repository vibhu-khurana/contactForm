// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBJMXnVY-55x0yrr-IDmlYbDpHd4JCBwsg",
    authDomain: "vibsform.firebaseapp.com",
    databaseURL: "https://vibsform.firebaseio.com",
    projectId: "vibsform",
    storageBucket: "",
    messagingSenderId: "463948333610"
};
firebase.initializeApp(config);

// Reference messages collection, used to initialise firebase db
var messagesRef = firebase.database().ref('messages');
// messages is a collection

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = document.getElementById('name').value;
    var company = document.getElementById('company').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    var message = document.getElementById('message').value

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}