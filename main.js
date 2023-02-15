// Get all the circles
const circles = document.querySelectorAll("circle");

// Add event listeners to each circle
circles.forEach(circle => {
  circle.addEventListener("mouseover", () => {
    circle.style.stroke = "black";
    circle.style.strokeWidth = "2px";
  });

  circle.addEventListener("mouseout", () => {
    if (!circle.style.border) {
      circle.style.stroke = "none";
    }
  });

  circle.addEventListener("click", () => {
    if (circle.style.border) {
      circle.style.border = "";
      document.getElementById("coordinates").textContent = "";
    } else {
      circles.forEach(circle => {
        circle.style.border = "";
      });
      circle.style.border = "2px solid black";
      const x = circle.getAttribute("cx");
      const y = circle.getAttribute("cy");
      document.getElementById("coordinates").textContent = `(${x}, ${y})`;
    }
  });
});

// Add event listener to the form submit button
const form = document.getElementById("add-point-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  addPoint();
});

// Function to add a new point to the visualization
function addPoint() {
  // Get the x and y coordinates from the form
  const x = document.getElementById("x-coordinate").value;
  const y = document.getElementById("y-coordinate").value;

  // Create a new circle element with the given coordinates
  const newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  newCircle.setAttribute("cx", x * 50);
  newCircle.setAttribute("cy", 550 - y * 50);
  newCircle.setAttribute("r", "8");
  newCircle.setAttribute("class", "point");

  // Add event listeners to the new circle element
  newCircle.addEventListener("mouseover", () => {
    newCircle.style.stroke = "black";
    newCircle.style.strokeWidth = "2px";
  });

  newCircle.addEventListener("mouseout", () => {
    if (!newCircle.style.border) {
      newCircle.style.stroke = "none";
    }
  });

  newCircle.addEventListener("click", () => {
    if (newCircle.style.border) {
      newCircle.style.border = "";
      document.getElementById("coordinates").textContent = "";
    } else {
      circles.forEach(circle => {
        circle.style.border = "";
      });
      newCircle.style.border = "2px solid black";
      document.getElementById("coordinates").textContent = `(${x}, ${y})`;
    }
  });

  // add the new circle element to the visualization
  const scatterplot = document.getElementById("scatterplot");
  scatterplot.appendChild(newCircle);

  // clears form inputs
  document.getElementById("x-coordinate").value = "";
  document.getElementById("y-coordinate").value = "";
}




//gavin code
// get all elements with id "point"
// let points = document.querySelectorAll('#point');
// // add an event listener for each point
// for (let i = 0; i < points.length; i++) {
// 	points[i].addEventListener("mouseenter", () => {
// 		points[i].setAttribute("fill", "blue");
// 	});
// 	points[i].addEventListener("mouseleave", () => {
// 		points[i].setAttribute('fill', 'red');
// 	});
// 	points[i].addEventListener("click", () => {
// 		points[i].setAttribute('border', points[i].getAttribute('border') === 'none' ? '2px solid black' : 'none');
// 	});
// }

// // Method to toggle the highlight
// function toggleHighlight(point) {
// 	point.fill = point.fill === 'yellow' ? 'red' : 'yellow';
// }

// // Method to toggle the border
// function toggleBorder(point) {
// 	point.style.border = point.style.border === 'none' ? '2px solid black' : 'none';
// }	

// // OK IDK WHY NONE OF THIS IS ACTUALLY DOING ANYTHING
// // the listeners are being added, the color just isn't changing

