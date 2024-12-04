// Array of images and corresponding correct words
const images = [
    { src: "images/1.jpg", word: "chillguy" },
    { src: "images/2.jpg", word: "fwog" },
    { src: "images/3.jpg", word: "luce" },
    { src: "images/4.jpg", word: "vvaifu" },
    { src: "images/5.jpg", word: "moodeng" },
    { src: "images/6.jpg", word: "pnut" },
    { src: "images/8.jpg", word: "michi" },
    { src: "images/9.jpg", word: "act" },
    { src: "images/10.jpg", word: "goat" },
    { src: "images/11.jpg", word: "fred" },
    { src: "images/12.jpg", word: "ban" },
    { src: "images/13.jpg", word: "shoggoth" },
    { src: "images/14.jpg", word: "billy" },
    { src: "images/15.jpg", word: "sigma" },
    { src: "images/16.jpg", word: "bert" },
    { src: "images/17.jpg", word: "daddy" },
    { src: "images/18.jpg", word: "memesai" },
    { src: "images/19.jpg", word: "catana" },
    { src: "images/20.jpg", word: "zerebro" },
    { src: "images/21.jpg", word: "fartcoin" },
    { src: "images/30.jpg", word: "opus" },
    { src: "images/40.png", word: "forest" },
    { src: "images/50.jpg", word: "lester" },
    { src: "images/60.jpg", word: "suwi" },
    { src: "images/80.jpg", word: "mini" },
];

let currentIndex = 0;
let score = 0;

// DOM elements
const currentImage = document.getElementById("current-image");
const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const scoreDisplay = document.getElementById("score-display");
const message = document.getElementById("message");
const winMessage = document.getElementById("win-message");
const celebratoryPhoto = document.getElementById("celebratory-photo");
const restartBtn = document.getElementById("restart-btn");

// Function to load the current image
function loadImage(index) {
    currentImage.src = images[index].src;
    guessInput.value = "";
    message.textContent = "";
}

// Function to handle the user's guess
function handleGuess() {
    const userGuess = guessInput.value.trim().toLowerCase();
    const correctWord = images[currentIndex].word.toLowerCase();

    if (userGuess === correctWord) {
        score++;
        currentIndex++;
        if (currentIndex >= images.length) {
            // Game win
            winMessage.classList.remove("hidden");
            celebratoryPhoto.classList.remove("hidden");
            restartBtn.classList.remove("hidden");
            return;
        }
        scoreDisplay.textContent = `Score: ${score}`;
        loadImage(currentIndex);
    } else {
        message.textContent = "Wrong guess! Starting over.";
        score = 0;
        currentIndex = 0;
        scoreDisplay.textContent = `Score: ${score}`;
        loadImage(currentIndex);
    }
}

// Restart the game
function restartGame() {
    score = 0;
    currentIndex = 0;
    winMessage.classList.add("hidden");
    celebratoryPhoto.classList.add("hidden");
    restartBtn.classList.add("hidden");
    scoreDisplay.textContent = `Score: ${score}`;
    loadImage(currentIndex);
}

// Event listeners
submitBtn.addEventListener("click", handleGuess);
restartBtn.addEventListener("click", restartGame);

// Load the first image on page load
loadImage(currentIndex);
