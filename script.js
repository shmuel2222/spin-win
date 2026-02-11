const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");

let currentRotation = 0;
let spinning = false;

btn.addEventListener("click", () => {
  if (spinning) return;
  spinning = true;

  const randomDeg = Math.floor(Math.random() * 360);
  currentRotation += 1440 + randomDeg;

  wheel.style.transform = rotate(${currentRotation}deg);

  setTimeout(() => {
    spinning = false;
    alert("Finished spinning 🎉");
  }, 4200);
});
