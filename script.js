document.addEventListener("DOMContentLoaded", () => {
  const wheel = document.querySelector(".wheel");
  const btn = document.getElementById("spinBtn");

  let spinning = false;
  let rotation = 0;

  const prizes = [
    {
      name: "Gift Card",
      link: "https://mediahqx.bountyads.store/?utm_medium=b8017b6ba61df93050bd920ec2b7a89c4f7a148a&utm_campaign=shmuelolo11"
    },
    {
      name: "Airtime",
      link: "https://mediahqx.bountyads.store/?utm_medium=b8017b6ba61df93050bd920ec2b7a89c4f7a148a&utm_campaign=shmuelolo11"
    },
    {
      name: "Cash",
      link: "https://mediahqx.bountyads.store/?utm_medium=b8017b6ba61df93050bd920ec2b7a89c4f7a148a&utm_campaign=shmuelolo11"
    },
    {
      name: "iPhone",
      link: "https://mediahqx.bountyads.store/?utm_medium=b8017b6ba61df93050bd920ec2b7a89c4f7a148a&utm_campaign=shmuelolo11"
    }
  ];

  btn.addEventListener("click", () => {
    if (spinning) return;
    spinning = true;

    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const sliceAngle = 360 / prizes.length;

    const extraSpin = 720 + prizeIndex * sliceAngle;
    rotation += extraSpin;

    wheel.style.transition = "transform 4s ease-out";
    wheel.style.transform = rotate(${rotation}deg);

    setTimeout(() => {
      window.location.href = prizes[prizeIndex].link;
    }, 4500);
  });
});
