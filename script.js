const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");

const prizes = ["Gift Card", "Airtime", "Cash", "iPhone"];
const colors = ["#2196f3", "#4caf50", "#ff9800", "#ffeb3b"];

const radius = canvas.width / 2;
const centerX = radius;
const centerY = radius;

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

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle + arcSize / 2);
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.font = "bold 18px Arial";
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

        const actualDeg = rotation % 360;
        const segment = Math.floor((360 - actualDeg) / (360 / prizes.length)) % prizes.length;
        const winner = prizes[segment];

        // تحويل حسب الجائزة
        if (winner === "Gift Card") {
            window.location.href = "https://example.com/gift";
        }
        else if (winner === "Airtime") {
            window.location.href = "https://example.com/airtime";
        }
        else if (winner === "Cash") {
            window.location.href = "https://example.com/cash";
        }
        else if (winner === "iPhone") {
            window.location.href = "https://example.com/iphone";
        }

    }, 4000);
};
