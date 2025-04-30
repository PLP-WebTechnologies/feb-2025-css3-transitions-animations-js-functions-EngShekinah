
// Store and Retrieve User Preferences
function storePreference(key, value) {
    localStorage.setItem(key, value);
}

function getPreference(key) {
    return localStorage.getItem(key);
}

// Animation triggered by user action
const myButton = document.getElementById('myButton');
const myImage = document.getElementById('myImage');

myButton.addEventListener('click', function() {
    myImage.classList.add('animate');

    // Remove the class after the animation completes
    setTimeout(() => {
        myImage.classList.remove('animate');
    }, 500); // Adjust time to match the animation duration
});

// Example of storing a preference
storePreference('theme', 'dark');
console.log('Theme preference:', getPreference('theme'));
