// display a welcome message to the user which pops up after a few seconds
// this is the main component of the website

// get the "welcome-message" div
var welcomeMessage = document.getElementById("welcome-message");
// hide the welcome message initially
welcomeMessage.style.display = "none";
// display the welcome message after 3 seconds
setTimeout(function() {
    console.log("3")
    welcomeMessage.style.display = "block";
    console.log("4")
}, 3000);

console.log("1");
// hide the welcome message after 6 seconds
setTimeout(function() {
    console.log("5");
    welcomeMessage.style.display = "none";
    console.log("6");
}, 10000);

console.log("2");





