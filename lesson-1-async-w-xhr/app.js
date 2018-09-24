(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
    });
})();

const searchedForText = 'hippos';
const unsplashRequest = new XMLHttpRequest();

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;
unsplashRequest.setRequestHeader('Authorization', '9b5a7605c9c527d8785bda29f1a34098e9f0a916350e11911d3b738d03b13f38');
unsplashRequest.send();

function addImage(){
}