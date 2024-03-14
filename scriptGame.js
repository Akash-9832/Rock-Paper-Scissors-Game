let userScore = 0;
let botScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const playGame = (userChoiceId) => {
    console.log("User", userChoiceId);
    const botChoice = genBotChoice();
    console.log("Bot", botChoice);
    if (userChoiceId === botChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoiceId === "rock") {
            userWin = botChoice === "paper" ? false : true
        } else if (userChoiceId === "paper") {
            userWin = botChoice === "scissors" ? false : true
        } else {
            userWin = botChoice === "rock" ? false : true
        }
    }
    showWinner(userWin, userChoiceId, botChoice);
};

const showWinner = (userWin, userChoiceId, botChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoiceId} beats ${botChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = botScore;
        msg.innerText = `You lost. ${botChoice} beats your ${userChoiceId}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const genBotChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const ranIndex = Math.floor(Math.random() * 3);
    return options[ranIndex];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoiceId = choice.getAttribute("id");
        playGame(userChoiceId);
    });
});

