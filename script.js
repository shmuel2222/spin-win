const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

// ✨ غير اللينك هنا
const REDIRECT_URL = "https://mediahqx.bountyads.store/?utm_medium=b8017b6ba61df93050bd920ec2b7a89c4f7a148a&utm_campaign=shmuelolo11";

let spinning = false;

spinBtn.addEventListener("click", () => {
  if (spinning) return;
  spinning = true;

  const spins = Math.floor(Math.random() * 3) + 4;
  const degrees = spins * 360 + Math.floor(Math.random() * 360);

  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = rotate(${degrees}deg);

  setTimeout(() => {
    window.location.href = REDIRECT_URL;
  }, 4200);
});
