const scatterplot = document.querySelector("#scatterplot");
const circles = document.querySelectorAll("circle");

circles.forEach(circle => {
  circle.addEventListener("mouseover", () => {
    circle.style.fill = "red";
  });

  circle.addEventListener("mouseout", () => {
    circle.style.fill = "blue";
  });

  circle.addEventListener("click", () => {
    if (circle.classList.contains("selected")) {
      circle.classList.remove("selected");
      document.getElementById("coordinates").textContent = "";
      circle.style.stroke = "none";
    } else {
      circle.classList.add("selected");
      const selectedCircles = document.querySelectorAll(".selected");
      selectedCircles.forEach(selectedCircle => {
        selectedCircle.style.stroke = "black";
        selectedCircle.style.strokeWidth = "2px";
      });
      const x = circle.getAttribute("cx");
      const y = circle.getAttribute("cy");
      document.getElementById("coordinates").textContent = `(${x / 60 | 0}, ${10 - y / 60 | 0}) `;
    }
  });
});

const form = document.querySelector("form");
const xInput = document.querySelector("#x-coordinate");
const yInput = document.querySelector("#y-coordinate");

form.addEventListener("submit", event => {
  event.preventDefault();
  const x = xInput.value;
  const y = yInput.value;

  if (x >= 1 && x <= 9 && y >= 1 && y <= 9) {
    const newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCircle.setAttribute("cx", (x * 50) + 50);
    newCircle.setAttribute("cy", 550 - (50*y));
    newCircle.setAttribute("r", "8");
    newCircle.setAttribute("class", "point");
    scatterplot.appendChild(newCircle);

    newCircle.addEventListener("mouseover", () => {
      newCircle.style.fill = "red";
    });
  
    newCircle.addEventListener("mouseout", () => {
      newCircle.style.fill = "blue";
    });

    newCircle.addEventListener("click", () => {
      if (newCircle.classList.contains("selected")) {
        newCircle.classList.remove("selected");
        document.getElementById("coordinates").textContent = "";
        newCircle.style.stroke = "none";
      } else {
        newCircle.classList.add("selected");
        const selectedCircles = document.querySelectorAll(".selected");
        selectedCircles.forEach(selectedCircle => {
          selectedCircle.style.stroke = "black";
          selectedCircle.style.strokeWidth = "2px";
        });
        const x = newCircle.getAttribute("cx");
        const y = newCircle.getAttribute("cy");
        document.getElementById("coordinates").textContent += `(${x / 60 | 0}, ${10 - y / 60 | 0}) `;
      }
    });
  }
  xInput.value = "";
  yInput.value = "";
});

