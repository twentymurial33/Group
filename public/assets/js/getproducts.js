$(document).ready(function(){

function displayNewItem (response) {
    // console.log(response)
    for (let index = 0; index < response.length; index++) {
        let item = response[index];
        var newDiv = $('<div class = "jumbotron">');
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
var url = "/api/posts"

$.ajax({
    url: url,
    method: 'GET'
}).then(function (response) {
    displayNewItem(response)
}) 
}

$('#get-items').on('click', function (event) {
    event.preventDefault();
    console.log(event)
    getItems();
    
  })

})