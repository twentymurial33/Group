var nameInput = "";
var descriptionInput = "";
var urlInput = "";
var email = '';
var password = '';
var oldEmail = '';
var oldPassword = '';

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

function newAccount() {
    email = $('#newemailInput').val();
    password = $('#newpasswordInput').val();
};
function oldAccount() {
    oldEmail = $('#oldEmail').val();
    oldPassword = $('#oldPassword').val();
};

$(document).ready(function () {
    $("#createAccount").on('click', function (event) {
        event.preventDefault();
        $('#new-user-modal').show();
        $('#signIn').hide();
        $('#createAccount').hide();
        newAccount(email, password);
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
        $('#signIn').hide();
        $('#createAccount').hide();
        oldAccount();
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    });
});

function addItem(event) {
    event.preventDefault();
    var itemInput = $('#item-name').val().trim();
    var descriptionInput = $('#item-dewscription').val().trim();
    var urlInput = $('#item-url').val().trim();
    var categoryInput = $('#category').val().trim();
    
    $.post("/api/posts", itemInput, descriptionInput, urlInput, categoryInput);
    
};

$('#uploadBtn').on('click', function (event) {
    event.preventDefault();
    addItem();

});



