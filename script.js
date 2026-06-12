
//Genevieve's Birthday!!!

const happybday = "Happy Birthday Genevieve <3";
const startText = document.getElementById("typing");
const startButton = document.getElementById("startBtn");
const landing = document.getElementById("landing");
const mems = document.getElementById("mems");

const photoPage = document.getElementById("mems");
const keepClicking = "Keep Clicking ->";
const typeClick = document.getElementById("clickButtonReminder");
const photoButton = document.getElementById("photoButton");

const letters = document.getElementById("letters");
const photoContainer = document.getElementById("photoContainer");

const envQ = document.getElementById("envQ");
const envL = document.getElementById("envL");
const envA = document.getElementById("envA");

const letterQ = document.getElementById("letterQ");
const letterL = document.getElementById("letterL");
const letterA = document.getElementById("letterA");

let bdayIndex = 0;
function typeBday() {
    
    if (bdayIndex < happybday.length) {
        startText.textContent += happybday[bdayIndex];

        bdayIndex++;

        setTimeout(typeBday, 100);

    }
    else {
        setTimeout(function() {
            startButton.style.display = "inline-block";
        }, 500);
    }
}

typeBday();

/* START BUTTON */

startButton.addEventListener("click", function() {
    
    landing.style.display = "none";
    mems.style.display = "block";
    photoButton.style.display = "inline-block";
    typeClick.style.display = "block";

    clickReminder();


})


/* KEEP CLICKING */


let reminderIndex = 0;
function clickReminder() {
    
    if (reminderIndex < keepClicking.length) {
        typeClick.textContent += keepClicking[reminderIndex];

        reminderIndex++;

        setTimeout(clickReminder, 100);

    }
}


/* PHOTOS */
const photos = [
    "assets/gwuGym.PNG",
    "assets/gwuBlackDay.PNG",
    "assets/gwuMidwinter.PNG",
    "assets/gwuProm.PNG",
    "assets/gwuSrirachaz.PNG",
    "assets/gwuGradParty.PNG",
    "assets/gwuGrad.PNG"
];

photos.forEach(function(photo) {

    const img = new Image();

    img.src = photo;

});

/* PHOTO BUTTON */


let currentPhoto = 0;
const rotations = [
    -8,
    5,
    -6,
    7,
    -4,
    6,
    -7
];

photoButton.addEventListener("click", function() {
    
    typeClick.style.display = "none";

    if (currentPhoto < photos.length) {
        const newPhoto = document.createElement("img");
        
        newPhoto.src =
            photos[currentPhoto];

        newPhoto.classList.add(
            "memoryPhoto"
        );

        newPhoto.style.transform =
            `rotate(${rotations[currentPhoto]}deg)`;

        photoContainer.appendChild(
            newPhoto
        );

        currentPhoto++;

    } else {
        photoButton.style.display = "none";
        mems.style.display = "none";
        letters.style.display = "block";

        typePrompt();
    }

}
)

envQ.addEventListener("click", function() {

    envQ.style.display = "none";
    letterQ.style.display = "block";

});

envL.addEventListener("click", function() {

    envL.style.display = "none";
    letterL.style.display = "block";

});

envA.addEventListener("click", function() {

    envA.style.display = "none";
    letterA.style.display = "block";

});

const scrollPrompt =
    document.getElementById("scrollPrompt");

const promptText = "Click & Scroll";

let promptIndex = 0;

function typePrompt() {

    if (promptIndex < promptText.length) {

        scrollPrompt.textContent +=
            promptText[promptIndex];

        promptIndex++;

        setTimeout(typePrompt, 100);

    }

    else {

        setTimeout(deletePrompt, 2000);

    }

}

function deletePrompt() {

    if (scrollPrompt.textContent.length > 0) {

        scrollPrompt.textContent =
            scrollPrompt.textContent.slice(0, -1);

        setTimeout(deletePrompt, 50);

    }

}





