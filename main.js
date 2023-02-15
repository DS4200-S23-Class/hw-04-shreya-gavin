// get all elements with id "point"
let points = document.querySelectorAll('#point');
// add an event listener for each point
for (let i = 0; i < points.length; i++) {
	points[i].addEventListener("mouseenter", () => {
		points[i].setAttribute("fill", "blue");
	});
	points[i].addEventListener("mouseleave", () => {
		points[i].setAttribute('fill', 'red');
	});
	points[i].addEventListener("click", () => {
		points[i].setAttribute('border', points[i].getAttribute('border') === 'none' ? '2px solid black' : 'none');
	});
}

// Method to toggle the highlight
function toggleHighlight(point) {
	point.fill = point.fill === 'yellow' ? 'red' : 'yellow';
}

// Method to toggle the border
function toggleBorder(point) {
	point.style.border = point.style.border === 'none' ? '2px solid black' : 'none';
}	

// OK IDK WHY NONE OF THIS IS ACTUALLY DOING ANYTHING
// the listeners are being added, the color just isn't changing