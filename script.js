window.onload = function () {

    const wheel = document.getElementById("wheel");
    const spinBtn = document.getElementById("spin");

    if (!wheel || !spinBtn) {
        console.log("Element not found");
        return;
    }

    let isSpinning = false;

    spinBtn.addEventListener("click", function () {

        if (isSpinning) return;

        isSpinning = true;

        const randomDegree = Math.floor(Math.random() * 360) + 1440;

        wheel.style.transition = "transform 4s ease-out";
        wheel.style.transform = "rotate(" + randomDegree + "deg)";

        setTimeout(function () {
            window.location.href = "https://google.com";
        }, 4000);

    });

};
