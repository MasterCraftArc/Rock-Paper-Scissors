let playerScore = 0
let computerScore = 0

//computer choice
function computerPlay () {
    const options = ['rock','paper','scissors']
    const randomNum = Math.floor(Math.random () * 3)
    const compChoice = options[randomNum]
    return compChoice
}
computerSelection = computerPlay()

//playround function///////////////////////////////////////

function playRound (computerSelection,playerSelection)
{

    if (playerSelection == 'rock' &&  computerSelection == 'rock') {return 'You tied'}
    else if (playerSelection == 'paper' && computerSelection == 'paper') {return 'You tied'}
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {return 'You tied'}
    else if (playerSelection == 'rock' && computerSelection == 'scissors') { playerScore++
        return 'you win rock beats scissors!'}
    else if (playerSelection == 'paper' && computerSelection == 'rock') {playerScore++
        return 'you win paper beats rock!'}
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {playerScore++
        return 'you win scissors cut paper!'}
    else if (playerSelection == 'scissors' && computerSelection == 'rock') { computerScore++
        return 'you loose rock beats scissors!'}
    else if (playerSelection == 'paper' && computerSelection == 'scissors') { computerScore++
        return 'you loose scissors cut paper!'}
    else if (playerSelection == 'rock' && computerSelection == 'paper') { computerScore++
        return 'you loose paper beats rock'}
    }

       //game function
       function game () {
        for ( let i = 0 ; i < 5 ; i++ )
         playerSelection = prompt ('choose what to throw', 'Rock Paper Scissors'. toLowerCase()) 
         computerSelection = computerPlay()
        playRound(playerSelection,computerSelection)
    
    if (playerScore > computerScore) {return ' You beat the machine'} else if (playerScore < computerScore) {return 'You lost to the machine'} else if (computerScore === playerScore) {return 'you tied with the machine'}
    
    
    
    }
    console.log (game())
