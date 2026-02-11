const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

let rotation = 0;
let spinning = false;

spinBtn.addEventListener("click", function () {
  if (spinning) return;
  spinning = true;

  const extraRotation = Math.floor(Math.random() * 360);
  rotation += 1440 + extraRotation;

  wheel.style.transform = "rotate(" + rotation + "deg)";

  setTimeout(function () {
    spinning = false;
  }, 4200);
});
