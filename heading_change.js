// Using DOM to select the button element
const changeButton = document.getElementById('changeBtn');

// Using DOM to select the heading element
const heading = document.getElementById('mainHeading');

// Add event listener to the button
changeButton.addEventListener('click', function() {
    // Change the heading text using DOM
    heading.textContent = 'Heading Changed Successfully!';
});