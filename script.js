const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");

let spinning = false;

btn.addEventListener("click", function () {

  if (spinning) return;
  spinning = true;

  const links = [
    "https://google.com",
    "https://facebook.com",
    "https://youtube.com",
    "https://instagram.com"
  ];

  const index = Math.floor(Math.random() * links.length);

  const rotateDeg = 360 * 5 + (index * 90);

  wheel.style.transform = "rotate(" + rotateDeg + "deg)";

  setTimeout(function () {
    window.location.href = links[index];
  }, 4000);

});
