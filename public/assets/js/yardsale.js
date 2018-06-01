var config = {
    apiKey: "AIzaSyAz8V0oTOGh0If5LubLLMPGF8OQTZeWJ4U",
    authDomain: "yard-sale-fe238.firebaseapp.com",
    databaseURL: "https://yard-sale-fe238.firebaseio.com",
    projectId: "yard-sale-fe238",
    storageBucket: "yard-sale-fe238.appspot.com",
    messagingSenderId: "1098564084379"
};
firebase.initializeApp(config);
var database = firebase.database();
var email = '';
var password = '';
var oldEmail = '';
var oldPassword = '';
function newUser() {
    email = $('#newemailInput').val();
    password = $('#newpasswordInput').val();
};
function oldUser() {
    oldEmail = $('#oldEmail').val();
    oldPassword = $('#oldPassword').val();
};

$(document).ready(function () {
    $("#createAccount").on('click', function (event) {
        event.preventDefault();
        $('#new-user-modal').show();
        $('#newsign-in').hide();
        $('#returnUser').hide();        
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                console.log(error);
            };
        });
    });
    $('#signIn').on('click', function (event) {
        event.preventDefault();
        $('#return-user-modal').show();
        $('#newsign-in').hide();
        $('#returnUser').hide();
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    });
});

