const listChoices = document.getElementsByClassName("choice");

function setupWheel() {
    const angle = 360 / listChoices.length;

    for (let i = 0; i < listChoices.length; i++) {
        listChoices[i].style.transform =
            `rotate(${i * angle}deg) skewY(${90 - angle}deg)`;
        listChoices[i].style.background =
            `hsl(${i * 60}, 70%, 60%)`;
    }
}

setupWheel();


let currentRotation = 0;

function play() {
    const randomSpin = Math.floor(Math.random() * 360) + 720;
    currentRotation += randomSpin;

    document.getElementById("main").style.transform =
        `rotate(${currentRotation}deg)`;
}