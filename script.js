const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const prizes = [
  { text: "Gift Card", color: "#3498db", img: "images/giftcard.png" },
  { text: "Airtime",   color: "#2ecc71", img: "images/airtime.png" },
  { text: "iPhone",    color: "#f1c40f", img: "images/iphone.png" },
  { text: "Cash",      color: "#e67e22", img: "images/cash.png" }
];

const total = prizes.length;
const angle = (2 * Math.PI) / total;
let rotation = 0;
let spinning = false;

const images = {};
let loaded = 0;

// تحميل الصور
prizes.forEach(p => {
  const img = new Image();
  img.src = p.img;
  img.onload = () => {
    loaded++;
    if (loaded === prizes.length) drawWheel();
  };
  images[p.text] = img;
});

function drawWheel() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  prizes.forEach((p, i) => {
    const start = rotation + i * angle;
    const end = start + angle;

    // الجزء
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.arc(250, 250, 240, start, end);
    ctx.fillStyle = p.color;
    ctx.fill();

    // الصورة
    ctx.save();
    ctx.translate(250, 250);
    ctx.rotate(start + angle / 2);
    ctx.drawImage(images[p.text], 120, -25, 50, 50);
    ctx.restore();

    // النص
    ctx.save();
    ctx.translate(250, 250);
    ctx.rotate(start + angle / 2);
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.fillText(p.text, 120, 40);
    ctx.restore();
  });
}

document.getElementById("spinBtn").onclick = () => {
  if (spinning) return;
  spinning = true;

  const spins = Math.random() * 5 + 5;
  const target = rotation + spins * 2 * Math.PI;
  const start = rotation;
  const duration = 4000;
  const startTime = performance.now();

  function animate(time) {
    const progress = Math.min((time - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    rotation = start + (target - start) * ease;
    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      spinning = false;
    }
  }

  requestAnimationFrame(animate);
};
