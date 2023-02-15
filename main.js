const scatterplot = document.querySelector("#scatterplot");
const circles = document.querySelectorAll("circle");

circles.forEach(circle => {
  circle.addEventListener("mouseover", () => {
    circle.style.stroke = "black";
    circle.style.strokeWidth = "2px";
  });

  circle.addEventListener("mouseout", () => {
    if (!circle.classList.contains("selected")) {
      circle.style.stroke = "none";
    }
  });

  circle.addEventListener("click", () => {
    if (circle.classList.contains("selected")) {
      circle.classList.remove("selected");
      document.getElementById("coordinates").textContent = "";
    } else {
      circle.classList.add("selected");
      const selectedCircles = document.querySelectorAll(".selected");
      selectedCircles.forEach(selectedCircle => {
        selectedCircle.style.stroke = "black";
        selectedCircle.style.strokeWidth = "2px";
      });
      const x = circle.getAttribute("cx");
      const y = circle.getAttribute("cy");
      document.getElementById("coordinates").textContent += `(${x / 60 | 0}, ${10 - y / 60 | 0}) `;
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
    newCircle.setAttribute("cx", x * 60);
    newCircle.setAttribute("cy", (10 - y) * 60);
    newCircle.setAttribute("r", "8");
    newCircle.setAttribute("class", "point");
    scatterplot.appendChild(newCircle);

    newCircle.addEventListener("mouseover", () => {
      newCircle.style.stroke = "black";
      newCircle.style.strokeWidth = "2px";
    });

    newCircle.addEventListener("mouseout", () => {
      if (!newCircle.classList.contains("selected")) {
        newCircle.style.stroke = "none";
      }
    });

    newCircle.addEventListener("click", () => {
      if (newCircle.classList.contains("selected")) {
        newCircle.classList.remove("selected");
        document.getElementById("coordinates").textContent = "";
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

