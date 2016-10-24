// JavaScript Document


// Use JS to add header text into 'main-header' without button click.
document.getElementById("main-header").innerHTML = "<h1>JS Practice</h1>";



// Use JS to add paragraph text into 'action1-message' with button click from 'action1-btn'. -->
document.getElementById("action1-btn").addEventListener("click", function(){
    document.getElementById("action1-message").innerHTML = "Action #1 Button was Clicked!";
});



// Use JS to add an h2 into 'heading2' with button click.
// The HTML has been created, this is your chance to add JS.
document.getElementById("mainHeader4").innerHTML = "<h1>Text Change</h1>";

document.getElementById("header2-btn").addEventListener("click", function(){
    document.getElementById("header2-message").innerHTML = "Heading for Header 2"
})




// Create 3 examples of JS being added to the HTML page immediately.
// You'll need to create both the HTML and JS for this.
document.getElementById("mainHeader3").innerHTML = "<h1>Text Change part 2</h1>";

document.getElementById("mainHeader3Button").addEventListener("click", function(){
    document.getElementById("header3message").innerHTML = "Heading for Header 3"
})







// Create 3 examples of JS being added to the HTML page based on button clicks.
// You'll need to create both the HTML and JS for this.
document.getElementById("mainHeader3Button").addEventListener("click", function(){
    document.getElementById("header3message").innerHTML = "Click me i dare you!"
})

document.getElementById("header3message").addEventListener("click", function(){
    document.getElementById("youClickedMe").innerHTML = "<h1>Hey you Clicked me...Click me again.</h1>"
})
document.getElementById("youClickedMe").addEventListener("click", function(){
  document.getElementById("OK").innerHTML = "<h6>OK!... Maybe I like it.</h6>"
})
