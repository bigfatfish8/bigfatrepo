// script.js
function toggleMenu() {
    var menu = document.getElementById('dropdown-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var welcomeMessage = "find your creativity";
    var element = document.getElementById('welcome-message');
    var index = 0;
    var typingSpeed = 75; 

    function typeFirstLine() {
        if (index < welcomeMessage.length) {
            element.innerHTML += welcomeMessage.charAt(index);
            index++;
            setTimeout(typeFirstLine, typingSpeed);
        } else {
            index = 0; 
            element.innerHTML += "<br>";
            typeSecondLine();
        }
    }

    function typeSecondLine() {
        if (index < secondLineMessage.length) {
            element.innerHTML += secondLineMessage.charAt(index);
            index++;
            setTimeout(typeSecondLine, typingSpeed);
        }
    }

    typeFirstLine();
});
