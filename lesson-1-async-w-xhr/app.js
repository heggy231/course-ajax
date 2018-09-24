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

	const searchedForText = 'hippos';
	const unsplashRequest = new XMLHttpRequest();

	unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
	unsplashRequest.onload = addImage;
	unsplashRequest.setRequestHeader('Authorization', '9b5a7605c9c527d8785bda29f1a34098e9f0a916350e11911d3b738d03b13f38');
	unsplashRequest.send();

	function addImage(){
		// debugger; 
		// 'this' value is XMLHttpRequest XHR object itself
		// response is stored in responseText: {"total":13,"total_pages":1,...}
		// parse the JSON into JS response Text
		// Under Network>Response tab: see JSON response which show all text
		const data = JSON.parse(this.responseText);
		// get the first image
		const firstImage = data.results[0];

		// this ensures some image are returned
		if (data && data.results && data.results[0]){
			// add figure element to pg with image pointing its unsplash resource and a caption of artist name.  
			htmlContent = `<figure>
				<img src="${firstImage.urls.regular}" alt="${searchForText}">
				<figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
			</figure>`;
		// no image has returned we throw and No images available message
		} else {
			htmlContent = `<div class="error-no-image">No images available</div>`;
		}
		// Add this inside the responseContainer as the 1st element
		responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
	}

	function addArticles () {
		// debugger;
		let htmlContent = '';
		const data = JSON.parse(this.responseText);

		if (data.response && data.response.docs && data.response.docs.length > 1) {
			htmlContent = '<ul>' + data.response.docs
		}

	}
})();

