//VARIABLES

//Both the player and the CPU will have their choices displayed
//Basically showing a rock, paper, scissors image
const RPSchoices = ["rock", "paper", "scissors"];
const YourChoiceDisplay = document.getElementById("playerchoice");
const CPUChoiceDisplay = document.getElementById("computerchoice");
const resultDisplayElement = document.getElementById("resultDisplay");
const PlayerScoreDisplay = document.getElementById("playerDisplay")
const CPUScoreDisplay = document.getElementById("computerDisplay")
let PlayerScore = 0;
let CPUScore = 0;

function choice(yourchoice){
    const cpuchoice = RPSchoices[Math.floor(Math.random() * 3)]; //Randomizes the RPSchoices for the CPU
    CPUChoiceDisplay.src = "images/" + cpuchoice + ".png"; //Displays image for CPU
    YourChoiceDisplay.src = "images/" + yourchoice + ".png"; //Displays image for player

    let result = "";

    if(yourchoice === cpuchoice){
        result = "TIE"
    }
    else{
        switch(yourchoice){
            case "rock":
                result = (cpuchoice === "scissors") ? "YOU WIN" : "CPU WINS";
                break;
            case "paper":
                result = (cpuchoice === "rock") ? "YOU WIN" : "CPU WINS";
                break;
            case "scissors":
                result = (cpuchoice === "paper") ? "YOU WIN" : "CPU WINS";
                break;
        }
    }

    switch(result){
        case "YOU WIN":
            PlayerScore++;
            PlayerScoreDisplay.textContent = `PLAYER: ${PlayerScore}`;
            break;
        case "CPU WINS":
            CPUScore++;
            CPUScoreDisplay.textContent = `COMPUTER: ${CPUScore}`;
            break;

    }

    resultDisplayElement.textContent = result;
}

function reset(){
    result = "";
    PlayerScore = 0;
    CPUScore = 0;

    PlayerScoreDisplay.textContent = `PLAYER: ${PlayerScore}`;
    CPUScoreDisplay.textContent = `COMPUTER: ${CPUScore}`;
    CPUChoiceDisplay.setAttribute('src', '');
    YourChoiceDisplay.setAttribute('src', '');
    resultDisplayElement.textContent = result;
}