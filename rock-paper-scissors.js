const choices = ["rock", "paper", "scissors"];
 const playerDisplay = document.getElementById("playerDisplay");
 const computerDisplay = document.getElementById("computerDisplay");
 const resultDisplay = document.getElementById("resultDisplay");

 function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    /* a escolha do computador será um resultado aleatório entre 0 e 2. 
    Math.floor nos permite arredondar o resultado.*/
    console.log(computerChoice);

    let result = "";

    if(playerChoice == computerChoice){
        result = "It's a tie!"
    }
    else{
        switch(playerChoice){
            // avaliando e exibindo resultados
            case "rock":
                result = (computerChoice === "scissors") ?  "You Win!" : "You lose!"
            break;
            case "paper":
                result = (computerChoice === "rock") ?  "You Win!" : "You lose!"
            break;
            case "scissors":
                result = (computerChoice === "paper") ?  "You Win!" : "You lose!"
            break;

        }
        
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    playerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
}