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
        newHeading.text(itemName);
        newDiv.append(newHeading);
        newBody.text(itemInfo); 
        newDiv.append(newBody);
        detailButton.text('Details');
        newDiv.append(detailButton);
        $('#results-field').append(newDiv)

    }
    
    
    



}

function getItems () {
var url = "/api/posts"

$.ajax({
    url: url,
    method: 'GET'
}).then(function (response) {
    displayNewItem(response)
}) 
}