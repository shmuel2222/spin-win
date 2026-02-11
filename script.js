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
    window.location.href = "https://example.com";
  }, 4000);
};
