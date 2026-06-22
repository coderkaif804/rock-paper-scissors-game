let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
console.log("MSG ELEMENT:", msg);
const userScorePara = document.querySelector("#user-score")
const comScorePara = document.querySelector("#comp-score")
const pComChoice = () => {
    const option = ["rock", "paper", "scissor"]
    const randIdx = Math.floor(Math.random() *3)
    return option[randIdx];
};
const gameDraw = () =>{
    msg.innerText = "Game was draw. Play Again";
    msg.style.backgroundColor = "#081b31"
};
const playGame = (userChoice) => {
    const comChoice = pComChoice();
    const result = document.querySelector("#result")
    result.innerHTML = `
         <p> You choose :  ${userChoice}</p>
        <p>Computer Choose : ${comChoice} </p>
    `;     

if (userChoice === comChoice) {
    gameDraw();
} else {
    let userWin = false;
    if (userChoice === "rock") {
        userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        userWin = comChoice === "scissor" ? false : true;
    } else {
        userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, comChoice)

    }
}

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "Congratulations you win 🎉";
        msg.style.backgroundColor = "green";
    } else {
        comScore++
        comScorePara.innerText = comScore;
        msg.innerText = "Unfortunately You lose 🥲";
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
choice.addEventListener("click", () => {
const userChoice = choice.getAttribute("id");
playGame(userChoice)
})
});

