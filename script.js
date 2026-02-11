const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const spinBtn = document.getElementById("spinBtn");

const prizes = [
  { text: "Gift Card", img: "images/giftcard.png" },
  { text: "Airtime", img: "images/airtime.png" },
  { text: "Cash", img: "images/cash.png" },
  { text: "iPhone", img: "images/iphone.png" }
];

const colors = ["#3498db", "#2ecc71", "#f1c40f", "#e67e22"];

let angle = 0;
let spinning = false;

function drawWheel() {
  const arc = Math.PI / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < prizes.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = colors[i];
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 200, arc * i, arc * (i + 1));
    ctx.fill();
    ctx.closePath();

    const img = new Image();
    img.src = prizes[i].img;

    img.onload = function () {
      ctx.save();
      ctx.translate(200, 200);
      ctx.rotate(arc * i + arc / 2);
      ctx.drawImage(img, 60, -40, 80, 80);
      ctx.restore();
    };
  }
}

drawWheel();

spinBtn.addEventListener("click", function () {
  if (spinning) return;

  spinning = true;

  const randomDeg = Math.floor(3600 + Math.random() * 360);
  angle += randomDeg;

  canvas.style.transition = "transform 4s ease-out";
  canvas.style.transform = rotate(${angle}deg);

  setTimeout(() => {
    spinning = false;

    // 👇 التحويل على لينك
    window.location.href = "https://google.com";
  }, 4000);
});
