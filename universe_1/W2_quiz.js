// Get the SVG element and log it
const svg = document.getElementById("base_svg");
console.log(svg);



// Background Planet
let circle = document.getElementById('myCircle');
console.log(circle);
circle.setAttribute("cx", "400");
circle.setAttribute("cy", "1200");
circle.setAttribute("r", "700");

// fill color with random blue shades
let r = Math.round(Math.random() * 255);
let g = Math.round(Math.random() * 40);
let b = Math.round(Math.random() * 40);
circle.setAttribute('fill', `rgb(${r}, ${g}, ${b})`);
svg.appendChild(circle);



// Main Planet's Parameter Settings
let centerX = 400; 
let centerY = 400;
let radius = 200; 
let squareSize = 20;

// Calculate the Number of Squares
let numSquaresX = Math.round(radius * 2 / squareSize); // Number of squares in X direction
let numSquaresY = Math.round(radius * 2 / squareSize); // Number of squares in Y direction

// Create Square Function
function createSquare(x, y, color) {
    let newSquare = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newSquare.setAttribute("x", x);
    newSquare.setAttribute("y", y);
    newSquare.setAttribute("width", squareSize);
    newSquare.setAttribute("height", squareSize);
    newSquare.setAttribute('fill', color);

    svg.appendChild(newSquare);
}
// Generate Square Background
for (let i = 0; i < numSquaresX; i++) {
    for (let j = 0; j < numSquaresY; j++) {
        let x = centerX - radius + i * squareSize; // Calculate x-coordinate
        let y = centerY - radius + j * squareSize; // Calculate y-coordinate
        // Check if the current square's center is within the circle
        let distanceFromCenter = Math.sqrt((x + squareSize / 2 - centerX) ** 2 + (y + squareSize / 2 - centerY) ** 2);
        if (distanceFromCenter <= radius) {
            let randomValue = Math.random();
            if (x <= centerX && y <= centerY && randomValue <= 0.3) {
                // Black squares in the left upper quadrant
                createSquare(x, y, "black");
            } else {
                let grayValue = Math.round(Math.random() * 255); // Generate random gray value
                createSquare(x, y, `rgb(${grayValue}, ${grayValue}, ${grayValue})`);
            }
        }
    }
}




// Generate random colors in the white color spectrum
function getRandomWhiteColor() {
    const brightness = Math.floor(Math.random() * 156) + 100; // Brightness range between 100 and 255
    return `rgb(${brightness}, ${brightness}, ${brightness})`;
}

// Generate random colors in the black color spectrum
function getRandomBlackColor() {
    const brightness = Math.floor(Math.random() * 56); // Brightness range between 0 and 55
    return `rgb(${brightness}, ${brightness}, ${brightness})`;
}

// Biggest Orbit
let ellipse1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
ellipse1.setAttribute("cx", "400");
ellipse1.setAttribute("cy", "400");
ellipse1.setAttribute("rx", "500");
ellipse1.setAttribute("ry", "50");
ellipse1.setAttribute("fill", getRandomWhiteColor()); 
ellipse1.setAttribute("fill-opacity", "0.7");
svg.appendChild(ellipse1);

// Orbit
let ellipse2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
ellipse2.setAttribute("cx", "400");
ellipse2.setAttribute("cy", "385");
ellipse2.setAttribute("rx", "380");
ellipse2.setAttribute("ry", "25");
ellipse2.setAttribute("fill", getRandomBlackColor());
ellipse2.setAttribute("fill-opacity", "0.5");
svg.appendChild(ellipse2);


// Text
let textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
textElement.setAttribute("x", "240"); 
textElement.setAttribute("y", "725"); 
textElement.setAttribute("fill", "white"); 
textElement.setAttribute("font-size", "40"); 
textElement.setAttribute("font-family", "Arial Black");
textElement.textContent = "TO THE MOON";
svg.appendChild(textElement);
