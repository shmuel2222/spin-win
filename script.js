const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");

let spinning = false;

btn.onclick = () => {
  if (spinning) return;
  spinning = true;

  const deg = Math.floor(3000 + Math.random() * 2000);
  wheel.style.transform = rotate(${deg}deg);

  setTimeout(() => {
    spinning = false;
  }, 4000);
};
