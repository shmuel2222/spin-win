const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");

const prizes = [
    { text: "Gift Card", img: "images/gift.png", link: "https://example.com/gift" },
    { text: "Airtime", img: "images/airtime.png", link: "https://example.com/airtime" },
    { text: "Cash", img: "images/cash.png", link: "https://example.com/cash" },
    { text: "iPhone", img: "images/iphone.png", link: "https://example.com/iphone" }
];

const colors = ["#2196f3", "#4caf50", "#ff9800", "#ffeb3b"];

const radius = canvas.width / 2;
const centerX = radius;
const centerY = radius;

let rotation = 0;
let spinning = false;

const images = [];

prizes.forEach(prize => {
    const img = new Image();
    img.src = prize.img;
    images.push(img);
});

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

        // الصورة
        ctx.drawImage(images[i], -30, -radius / 1.4, 60, 60);

        // النص
        ctx.fillStyle = "black";
        ctx.font = "bold 18px Arial";
        ctx.textAlign = "center";
        ctx.fillText(prizes[i].text, 0, -radius / 1.1);

        ctx.restore();
    }
}

window.onload = function() {
    drawWheel();
};

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

        window.location.href = winner.link;

    }, 4000);
};
