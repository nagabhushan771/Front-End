const typingText = document.querySelector(".typing-text p");
const inputField = document.querySelector(".wrapper .input-field");
const mistakesEl = document.querySelector(".mistakes span b");
const timeEl = document.querySelector(".time span b");
const cpmEl = document.querySelector(".cpm span b");
const wpmEl = document.querySelector(".wpm span b");
const buttonEl = document.querySelector("button");

let charIndex = 0;
let mistakes = 0;
let timer,
    maxTime = 60,
    timeLeft = maxTime;
let isTyping = false;

function randomParagraph() {
    //getting random paragraph from the array and splitting it into characters and
    //adding them in the p tag inside the typing-text
    var ind = Math.floor(Math.random() * paragraphs.length);
    paragraphs[ind].split("").forEach((char) => {
        var spanTag = `<span>${char}</span>`;
        typingText.innerHTML += spanTag;
    });
    //if you type anything or if you click on the typing-text area
    //input field get focused
    document.addEventListener("keydown", () => inputField.focus());
    typingText.addEventListener("click", () => inputField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inputField.value.split("")[charIndex];

    if (!isTyping) {
        timer = setInterval(initTimer, 1000);
        isTyping = true;
    }
    if (typedChar == null) {
        //if user dosen't entered any characters or pressed backspace
        characters[charIndex].classList.remove("active");
        charIndex--;
        //if user clears the wrongly entered character decrement the mistakes
        if (characters[charIndex].classList.contains("incorrect")) mistakes--;
        characters[charIndex].classList.remove("correct", "incorrect");
        characters[charIndex].classList.add("active");
    } else {
        if (characters[charIndex].innerText == typedChar) {
            characters[charIndex].classList.add("correct");
        } else {
            //if user tyoes wrong character increment the mistakes
            mistakes++;
            characters[charIndex].classList.add("incorrect");
        }
        characters[charIndex].classList.remove("active");
        charIndex++;
        if (charIndex < characters.length)
            characters[charIndex].classList.add("active");
    }
    let wpm = Math.round(
        ((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60
    );
    mistakesEl.innerText = mistakes;
    wpmEl.innerText = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    cpmEl.innerText = charIndex - mistakes;
    if (charIndex == characters.length) {
        clearInterval(timer);
        inputField.disabled = true;
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeEl.innerText = timeLeft;
    } else {
        clearInterval(timer);
        inputField.disabled = true;
    }
}

buttonEl.addEventListener("click", () => {
    location.reload();
});

randomParagraph();
inputField.addEventListener("input", initTyping);
