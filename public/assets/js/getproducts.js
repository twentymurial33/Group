$(document).ready(function(){

var url;

function displayNewItem (response) {
    // console.log(response)
    for (let index = 0; index < response.length; index++) {
        let item = response[index];
        var newDiv = $('<div class = "jumbotron col-md-offset-1">');
        var newHeading = $('<h2>');
        var newBody = $('<p>');
        var detailButton = $('<a class = "btn btn-default">')
        var itemName = item.product_name;
        var itemInfo = item.product_description;
        var verticalSpace = $('<br>')
        newHeading.text(itemName);
        newDiv.append(newHeading);
        newBody.text(itemInfo); 
        newDiv.append(newBody);
        detailButton.text('Details');
        newDiv.append(detailButton);
        $('#results-field').append(newDiv)
        $('#results-field').append(verticalSpace)

    }}
    
function getItems () {
// var url = "/api/posts"

$.ajax({
    url: url,
    method: 'GET'
}).then(function (response) {
    displayNewItem(response)
}) 
}

$('#get-items').on('click', function (event) {
    event.preventDefault();
    $('#result-field').empty();
    url = "/api/posts"
    getItems();
    
  })

$('#find-items').on('click', function (event){
    event.preventDefault();
    $('#results-field').empty();
    let cat = $('#category').val();
    console.log(cat)
    url = "/api/posts/category/" + cat
    getItems()
})



})