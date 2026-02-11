const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");

let spinning = false;

btn.onclick = () => {
  if (spinning) return;
  spinning = true;

  const prizes = [
    "https://mediahqx.bountyads.store/?utm_medium=b8017b6ba61df93050bd920ec2b7a89c4f7a148a&utm_campaign=shmuelolo11",
    "https://mediahqx.bountyads.store/?utm_medium=b8017b6ba61df93050bd920ec2b7a89c4f7a148a&utm_campaign=shmuelolo11",
    "https://mediahqx.bountyads.store/?utm_medium=b8017b6ba61df93050bd920ec2b7a89c4f7a148a&utm_campaign=shmuelolo11",
    "https://mediahqx.bountyads.store/?utm_medium=b8017b6ba61df93050bd920ec2b7a89c4f7a148a&utm_campaign=shmuelolo11"
  ];

  const index = Math.floor(Math.random() * prizes.length);
  const angle = 360 * 5 + index * 90;

  wheel.style.transform = rotate(${angle}deg);

  setTimeout(() => {
    window.location.href = prizes[index];
  }, 4000);
};
