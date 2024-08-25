
const flags = [
    { country: "United States Of America", src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
    { country: "Canada", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg" },
    { country: "United Kingdom", src: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" },
    { country: "Germany", src: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" },
    { country: "France", src: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { country: "India", src: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" },
    { country: "Japan", src: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" },
    { country: "China", src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_China.svg" },
    { country: "Australia", src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg" },
    { country: "Brazil", src: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg" },
    { country: "Italy", src: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" },
    { country: "Mexico", src: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" },
    { country: "Russia", src: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg" },
    { country: "South Korea", src: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" },
    { country: "South Africa", src: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" },
    { country: "Argentina", src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" },
    { country: "Saudi Arabia", src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" },
    { country: "Spain", src: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" },
    { country: "Turkey", src: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" },
    { country: "Sweden", src: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg" },
    { country: "Norway", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" },
    { country: "Netherlands", src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" },
    { country: "Switzerland", src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg" }
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
