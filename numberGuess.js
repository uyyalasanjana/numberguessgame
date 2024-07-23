let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100);
function checkGuess() 
{
    let guessNumber=parseInt(userInput.value);
    if(guessNumber>randomNumber)
    {
        gameResult.textContent="Too High! Try Again";
        gameResult.style.backgroundColor="white";
    }
     else if(guessNumber<randomNumber)
    {
        gameResult.textContent="Too Low! Try Again";
        gameResult.style.backgroundColor="white";
    }
    else if(guessNumber===randomNumber)
    {
        gameResult.textContent="Congratulations! you got it right";
        gameResult.style.backgroundColor="green";
    }
    else 
    {
        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "white";
    }
}
 