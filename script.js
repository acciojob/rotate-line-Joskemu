//your JS code here. If required.
// Get the line element
const line = document.getElementById('line');

// Initialize the rotation angle
let angle = 0;

// Function to rotate the line continuously
function rotateLine() {
    // Increment the angle by 2 degrees
    angle += 2;
    
    // Apply the rotation transform
    line.style.transform = `rotate(${angle}deg)`;
}

// Set an interval to update the rotation every 20 milliseconds
setInterval(rotateLine, 20);
