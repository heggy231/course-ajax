1) Made jsBin http://jsbin.com/makebah/edit?html,output
  this is very start.
  when I press search, nothing happes.


You can clone the project by running the following Git command in your terminal:

git clone https://github.com/udacity/course-ajax.git
Once you've cloned the project, you'll notice that it has three separate folders:

lesson-1-async-w-xhr
lesson-2-async-w-jQuery
lesson-3-async-w-fetch
Make sure to work on the files for the correct lesson. Since this is the first lesson, we'll be working in the lesson-1-async-w-xhr directory.

- Create Your Accounts
To complete these final steps, you'll need accounts with Unsplash and The New York Times.

1) Unsplash
- Create a developer account here - https://unsplash.com/developers
 - I can see my developer dev Unsplash profile and app here: https://unsplash.com/oauth/applications
- Next, create an application here - https://unsplash.com/oauth/applications
  * this will give you an "Application ID" that you'll need to make requests

  - https://blog.ghost.org/unsplash/

2) The New York Times
Create a developer account here - https://developer.nytimes.com/
They'll email you your api-key (you'll need this to make requests)

Unsplash Request
In our app, the variable searchedForText contains the text we're interested in, and we'll set the onload property to a function called addImage (which is a do-nothing function that we'll flesh out in a moment). If we temporarily set searchedForText to "hippos", the code for the XHR call to Unsplash is:

```
function addImage(){}
const searchedForText = 'hippos';
const unsplashRequest = new XMLHttpRequest();

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;

unsplashRequest.send()
```

but if you try running this code, you'll get an error.

  The request for Unsplash doesn't work because it needs an HTTP header to be sent along. What is the XHR method to add a header to the request? Check out the documentation for help!
   - .setRequestHeader()

XMLHttpRequest
  https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

### Setting a Request Header: .setRequestHeader()
The XHR method to include a header with the request is setRequestHeader. So the full code needs to be:

```
const searchedForText = 'hippos';
const unsplashRequest = new XMLHttpRequest();

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;
unsplashRequest.setRequestHeader('Authorization', 'Client-ID <your-client-id>');
unsplashRequest.send();

function addImage(){
}
```

Note: https://unsplash.com/documentation
- Client-ID here is app access key under the dev account