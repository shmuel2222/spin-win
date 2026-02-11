const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin");

let isSpinning = false;

spinBtn.addEventListener("click", () => {

    if (isSpinning) return;

    isSpinning = true;

    const randomDegree = Math.floor(Math.random() * 360) + 1440; 
    // 1440 = 4 لفات كاملة

    wheel.style.transition = "transform 4s ease-out";
    wheel.style.transform = "rotate(" + randomDegree + "deg)";

    setTimeout(() => {

        // هنا تحط لينك التحويل
        window.location.href = "https://google.com";

    }, 4000);

});
