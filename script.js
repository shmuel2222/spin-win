const wheel = document.querySelector(".wheel");
const spinBtn = document.getElementById("spinBtn");

// اللينك اللي هيتحول عليه بعد اللفة
const redirectLink = "https://mediahqx.bountyads.store/?utm_medium=b8017b6ba61df93050bd920ec2b7a89c4f7a148a&utm_campaign=shmuelolo11"; // ← غيره باللينك بتاعك

let isSpinning = false;

spinBtn.addEventListener("click", () => {
  if (isSpinning) return;
  isSpinning = true;

  // رقم عشوائي للدوران
  const spins = Math.floor(Math.random() * 360) + 1440; // 4 لفات على الأقل
  wheel.style.transform = rotate(${spins}deg);

  // بعد ما اللفة تخلص
  setTimeout(() => {
    window.location.href = redirectLink;
  }, 4200); // لازم نفس مدة الـ CSS
});
