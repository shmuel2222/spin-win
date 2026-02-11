const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");

let spinning = false;

btn.onclick = () => {
  if (spinning) return;
  spinning = true;

  const randomDeg = Math.floor(Math.random() * 360) + 1440;
  wheel.style.transform = rotate(${randomDeg}deg);

  setTimeout(() => {
    // مثال تحويل بعد اللف
    window.location.href = "https://mediahqx.bountyads.store/?utm_medium=b8017b6ba61df93050bd920ec2b7a89c4f7a148a&utm_campaign=shmuelolo11";
  }, 4000);
};
