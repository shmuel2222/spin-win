document.addEventListener("DOMContentLoaded", function () {

  const wheel = document.getElementById("wheel");
  const spinBtn = document.getElementById("spinBtn");

  if (!wheel || !spinBtn) {
    alert("العجلة أو الزرار مش متوصلين");
    return;
  }

  let spinning = false;
  const REDIRECT_URL = "https://mediahqx.bountyads.store/?utm_medium=b8017b6ba61df93050bd920ec2b7a89c4f7a148a&utm_campaign=shmuelolo11"; // غيره براحتك

  spinBtn.addEventListener("click", () => {
    if (spinning) return;
    spinning = true;

    const rotateDeg = 360 * 5 + Math.floor(Math.random() * 360);

    wheel.style.transition = "transform 4s ease-out";
    wheel.style.transform = rotate(${rotateDeg}deg);

    setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, 4200);
  });

});
