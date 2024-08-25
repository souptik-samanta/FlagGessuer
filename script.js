const flags = [
    { country: "United States Of America", src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
    { country: "Canada", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg" },
    { country: "United Kingdom", src: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" },
    { country: "Germany", src: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" },
    { country: "France", src: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" }
];

let currentFlag = {};

function getRandomFlag() {
    const randomIndex = Math.floor(Math.random() * flags.length);
    return flags[randomIndex];
}

function displayNewFlag() {
    currentFlag = getRandomFlag();
    document.getElementById("flag-image").src = currentFlag.src;
    document.getElementById("guess-input").value = "";
    document.getElementById("result").textContent = "";
}

document.getElementById("guess-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const userGuess = document.getElementById("guess-input").value.trim().toLowerCase();
    if (userGuess === currentFlag.country.toLowerCase()) {
        document.getElementById("result").textContent = "Correct! Moving to the next flag...";
        setTimeout(displayNewFlag, 2000);
    } else {
        document.getElementById("result").textContent = "Wrong, try again.";
    }
});

displayNewFlag();
