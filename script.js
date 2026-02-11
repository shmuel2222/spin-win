const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");

let currentRotation = 0;

btn.onclick = () => {
  btn.disabled = true;

  const extraRotation = 360 * 5; // عدد لفات
  const randomAngle = Math.floor(Math.random() * 360);
  const totalRotation = currentRotation + extraRotation + randomAngle;

  wheel.style.transform = rotate(${totalRotation}deg);
  currentRotation = totalRotation;

  setTimeout(() => {
    // لينك التحويل (غيره براحتك)
    window.location.href = "https://mediahqx.bountyads.store/?utm_medium=b8017b6ba61df93050bd920ec2b7a89c4f7a148a&utm_campaign=shmuelolo11";
  }, 4200);
};
