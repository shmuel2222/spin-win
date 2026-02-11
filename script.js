const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");

const prizes = ["Gift Card", "Airtime", "iPhone", "Cash"];
const colors = ["#3498db", "#2ecc71", "#f1c40f", "#e67e22"];

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 200;

let rotation = 0;
let spinning = false;

function drawWheel() {
    const arcSize = (2 * Math.PI) / prizes.length;

    for (let i = 0; i < prizes.length; i++) {
        const angle = i * arcSize;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, angle, angle + arcSize);
        ctx.fillStyle = colors[i];
        ctx.fill();
        ctx.closePath();

        // كتابة مستقيمة في منتصف كل جزء
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle + arcSize / 2);

        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.font = "bold 20px Arial";

        ctx.fillText(prizes[i], 0, -radius / 1.5);

        ctx.restore();
    }
}

drawWheel();

spinBtn.onclick = function () {
    if (spinning) return;

    spinning = true;

    const spinAngle = Math.floor(Math.random() * 360) + 720;
    rotation += spinAngle;

    canvas.style.transition = "transform 4s ease-out";
    canvas.style.transform = "rotate(" + rotation + "deg)";

    setTimeout(() => {
        spinning = false;
    }, 4000);
};
