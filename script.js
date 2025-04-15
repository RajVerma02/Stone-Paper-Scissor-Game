let userScore = 0;
let compScore = 0;
 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compScoreBoard = document.querySelector("#comp-score");
const userScoreBoard = document.querySelector("#user-score");


const genCompChoice = () => {
   const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3 );
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw😅");
    msg.innerText = "Game was Draw... paly again....😅";
    msg.style.backgroundColor ="";
}
const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScoreBoard.innerText = userScore;
        console.log("You Win.🥳");
        msg.innerText =`You Win.....🥳 your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScoreBoard.innerText = compScore;
        console.log("You lose..😥");
        msg.innerText =`You lose.....😥 ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};
 
const playGame = (userChoice) => {
    console.log("user Choice is = ",userChoice);
    // Generate compchoice
    const compChoice = genCompChoice();
    console.log("comp Choice is = ",compChoice);
   
    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            // comp choice is scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // scissor,rock
            userWin = compChoice === "scissor" ? false : true;
        }else{
        // paper,rock
        userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});