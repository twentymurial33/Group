var nameInput = "";
var descriptionInput = "";
var urlInput = "";
var email = '';
var password = '';
var oldEmail = '';
var oldPassword = '';
$(document).ready(function () {
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
    function newUserData() {
        newAccount();
        database.ref().push({
            email: email,
            password: password,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        database.ref().on("child_added", function (childSnapshot) {
            console.log(childSnapshot.val().email);
            console.log(childSnapshot.val().password);
        });
    };
    $("#createAccount").on('click', function (event) {
        event.preventDefault();
        $('#new-user-modal').show();
        $('#signIn').hide();
        $('#createAccount').hide();
    });
    $('#signupUser').on('click', function(event) {
        newAccount(email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                console.log(error);
            };
            newUserData();
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
function addItem(event) {
    //event.preventDefault();
    var itemInput = $('#item-name').val().trim();
    var descriptionInput = $('#item-description').val().trim();
    var urlInput = $('#item-url').val().trim();
    var categoryInput = $('#category').val().trim();
    console.log("about to do ajax call!");
    var newItem = {
        product_name: itemInput,
        product_description: descriptionInput,
        img_url: urlInput,
        category: categoryInput,
        price: 10.10,
        price_negotiable: true,
        sold: false
    }
    $.post("/api/posts", newItem);
    $('#item-name').empty();
    $('#item-description').empty();
    $('#item-url').empty();
};
$('#uploadBtn').on('click', function (event) {
    event.preventDefault();
    console.log("button clicked!!");
    addItem();
});
});


