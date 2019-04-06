# Weekend Homework Recap: DOM

1. What is the return value of `document.createElement`? And what does it accept as an argument?

Creates a new html element of the type specified.
accepts as an argument an html element type


2. What is the return value of `document.querySelector`? And what does is accept as an argument?

Returns whatever is present in the html with specific the id class or element specified.
Accepts as an argument an id, class or element present in the HTML document.

3. What is the return value `document.querySelectorAll`?

Returns everything in the html document named with the argument passed into the function.

4. What is the difference between using `textContent` and `appendChild`?

textContent changes the text which appears within the HTML element specified. appendChild adds a new child element to the element specified and puts the requested information in that child element.

5. What is the event we handle to access the values of a form, and how do we access the values?

Need to preventDefault() action on the form, so that we don't lose the information submitted once the page automatically refreshes on hitting submission.
Access via the 'submit' keyword on the eventListener. Target the values by using event.target.'field_id'.value
