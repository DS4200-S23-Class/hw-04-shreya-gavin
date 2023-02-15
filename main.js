const scatterplot = document.querySelector("#scatterplot");
const circles = document.querySelectorAll("circle");

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
    newCircle.setAttribute("id", "point");
    scatterplot.appendChild(newCircle);

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
        const x = newCircle.getAttribute("cx");
        const y = newCircle.getAttribute("cy");
        document.getElementById("coordinates").textContent = `(${x / 60}, ${10 - y / 60})`;
      }
    });
  }
  xInput.value = "";
  yInput.value = "";
});

