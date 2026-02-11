const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");

const prizes = ["Gift Card", "Airtime", "Cash", "iPhone"];
const colors = ["#3498db", "#2ecc71", "#f1c40f", "#e67e22"];

let angle = 0;
let spinning = false;

function drawWheel() {
  const arc = (2 * Math.PI) / prizes.length;

  for (let i = 0; i < prizes.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = colors[i];
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 200, arc * i, arc * (i + 1));
    ctx.fill();
    ctx.closePath();

    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(arc * i + arc / 2);
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillText(prizes[i], 120, 0);
    ctx.restore();
  }
}

drawWheel();

spinBtn.addEventListener("click", function () {
  if (spinning) return;

  spinning = true;

  const randomDeg = 3600 + Math.floor(Math.random() * 360);
  angle += randomDeg;

  canvas.style.transition = "transform 4s ease-out";
  canvas.style.transform = rotate(${angle}deg);

  setTimeout(() => {
    spinning = false;

    // تحويل بعد اللف
    window.location.href = "https://google.com";

  }, 4000);
});
