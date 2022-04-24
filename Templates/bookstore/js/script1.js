/*var searchInput = document.getElementById("search-form").firstElementChild;
var searchButton = document.getElementById("search-form").lastElementChild;

searchButton.onclick = function() {
    value = searchInput.value;
    text = "http://127.0.0.1:8000/books/search/" + value;
    window.location.href = text;
}*/

function publisher(url = "http://127.0.0.1:8000/api/books") {
    let loaderObj = new Loader();
    loaderObj.dataLoader(url);
}

window.onload = publisher();