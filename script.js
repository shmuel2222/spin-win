document.addEventListener("DOMContentLoaded", () => {
  const wheel = document.querySelector(".wheel");
  const btn = document.getElementById("spinBtn");

  if (!wheel) {
    alert("Wheel not found");
    return;
  }

  if (!btn) {
    alert("Button not found");
    return;
  }

  let spinning = false;
  let rotation = 0;

  btn.addEventListener("click", () => {
    if (spinning) return;
    spinning = true;

    const extraSpin = Math.floor(Math.random() * 360) + 720;
    rotation += extraSpin;

    wheel.style.transition = "transform 4s ease-out";
    wheel.style.transform = rotate(${rotation}deg);

    setTimeout(() => {
      spinning = false;
    }, 4000);
  });
});
