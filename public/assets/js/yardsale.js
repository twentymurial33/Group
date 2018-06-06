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
    $('.close').on('click', function(event) {
      $('#new-user-modal').hide();
      $('#return-user-modal').hide();
      $('#signIn').show();
        $('#createAccount').show();
    })
    $("#createAccount").on('click', function (event) {
        event.preventDefault();
        $('#new-user-modal').show();
        $('#signIn').hide();
        $('#createAccount').hide();
    });
    $('#newclient-form').on('submit', function(event) {
      event.preventDefault();
        newAccount(email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            console.log(error)
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
    

  //JUST in case I fuck this up...this is where it all started

  // productContainer holds all of our products
  var productContainer = $(".product-container");
  var productCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleProductDelete);
  $(document).on("click", "button.edit", handleProductEdit);
  productCategorySelect.on("change", handleCategoryChange);
  var productPost;

  // This function grabs posts from the database and updates the view
  function getProducts(category) {
    var categoryString = category || "";
    if (categoryString) {
      categoryString = "/category/" + categoryString;
    }
    $.get("/api/posts" + categoryString, function(data) {
      console.log("Products", data);
      productPost = data;
      if (!productPost || !productPost.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete posts
  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id
    })
      .then(function() {
        getProducts(productCategorySelect.val());
      });
  }

  // Getting the initial list of products
  getProducts();
  // InitializeRows handles appending all of our constructed post HTML inside
  // productContainer
  function initializeRows() {
    productContainer.empty();
    var productsToAdd = [];
    for (var i = 0; i < productPost.length; i++) {
      productsToAdd.push(createNewRow(products[i]));
    }
    productContainer.append(productsToAdd);
  }

  // This function constructs a product's HTML
  function createNewRow(post) {
    var newPostCard = $("<div>");
    newPostCard.addClass("card");
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-default");
    var newPostTitle = $("<h2>");
    var newPostDate = $("<small>");
    var newPostCategory = $("<h5>");
    newPostCategory.text(post.category);
    newPostCategory.css({
      float: "right",
      "font-weight": "700",
      "margin-top":
      "-15px"
    });
    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    var newPostBody = $("<p>");
    newPostTitle.text(post.title + " ");
    newPostBody.text(post.body);
    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    newPostCardHeading.append(deleteBtn);
    newPostCardHeading.append(editBtn);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostCategory);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    return newPostCard;
  }

  // This function figures out which post we want to delete and then calls
  // deletePost
  function handleProductDelete() {
    var currentProduct = $(this)
      .parent()
      .parent()
      .data("post");
    deleteProduct(currentProduct.id);
  }

  // This function figures out which post we want to edit and takes it to the
  // Appropriate url
  function handleProductEdit() {
    var currentProduct = $(this)
      .parent()
      .parent()
      .data("product");
    window.location.href = "/cms?post_id=" + currentPost.id;
  }

  // This function displays a message when there are no posts
  function displayEmpty() {
    productContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No products yet for this category, navigate <a href='/seller'>here</a> in order to create a new product for this category.");
    productContainer.append(messageH2);
  }

  // This function handles reloading new posts when the category changes
  function handleCategoryChange() {
    var newProductCategory = $(this).val();
    getProducts(newProductCategory);
  }
  //THIS IS WHERE THE NIGHTMARE ENDS !!!!!!
});
function addItem(event) {
    //event.preventDefault();
    var itemInput = $('#item-name').val().trim();
    var descriptionInput = $('#item-description').val().trim();
    var urlInput = $('#item-url').val().trim();
    var categoryInput = $('#category').val().trim();
    console.log("about to do ajax call!");
    var newItem = {
        seller_name: email,
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