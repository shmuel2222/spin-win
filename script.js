const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

let rotation = 0;

spinBtn.onclick = function() {
  const randomDegree = Math.floor(Math.random() * 360);
  rotation += 360 * 5 + randomDegree;
  wheel.style.transform = "rotate(" + rotation + "deg)";
};
