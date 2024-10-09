const hiddenValue = document.getElementById('hdChoice');
const txtDisplayResult = document.getElementById('display-result')

rps = {
    1:'rock',
    2:'scissors',
    3:'paper'
}

async function getRandomChoice(){
    let random = Math.random() * 3;
    let num = Math.ceil(random)
    AIChoice = rps[num]

    return await AIChoice;
}

function compareRPS(playerChoice, randomChoice){
    if(playerChoice === randomChoice){
        return 'draw'
    }   

    switch (playerChoice){
        case 'scissors':
            if(randomChoice === 'paper'){
                return 'win'
            };
            break
        case 'paper':
            if(randomChoice === 'rock'){
                return 'win'
            };
            break
        case 'rock':
            if(randomChoice === 'scissors'){
                return 'win'
            };
            break
        default:
            return 'loss'
    }
}

async function challengerps(numChoice){
    var choice = rps[numChoice];
    console.log('> Your Choice: ',choice)
    randomSelect = await getRandomChoice();

    var result = compareRPS(choice, randomSelect);

    console.log('> AI choice: ' + randomSelect)
    
    if(result === 'win'){
        //win
        console.log('You win!')
        return 'win'
    } else if(result === 'draw'){
        //draw
        console.log('Its a draw :o')
        return 'draw'
    } else {
        //loss
        console.log('You lost :(')
        return 'loss'
    }
}

function challenge(){
    playerChoice = hiddenValue.value
    challengerps(parseInt(playerChoice)).then((result) => {
        switch (result){
            case 'win':
                txtDisplayResult.textContent = 'AI Choice: ' + AIChoice + '. You won :D';
                break

            case 'draw':
                txtDisplayResult.textContent = 'AI Choice: ' + AIChoice + '. You drew :o';
                break

            case 'loss':
                txtDisplayResult.textContent = 'AI Choice: ' + AIChoice + '. You loss D:';
                break
            default:
                txtDisplayResult.textContent = 'Unexpected error!';
                break
        }
    });
}

function updateChoice(){
    document.getElementById('display-choice').innerHTML = 'Your choice: ' + rps[hiddenValue.value];
}

function initListeners(){
    const rockcard = document.getElementById('rock-card');
    const papercard = document.getElementById('paper-card');
    const scissorscard = document.getElementById('scissors-card');

    rockcard.addEventListener("click", function(){
        console.log('> You chose rock!')
        hiddenValue.value = 1;
        updateChoice()
    })

    papercard.addEventListener("click", function(){
        console.log('> You chose paper!')
        hiddenValue.value = 3;
        updateChoice()
    })

    scissorscard.addEventListener("click", function(){
        console.log('> You chose scissors!')
        hiddenValue.value = 2;
        updateChoice()
    })
}

document.addEventListener('DOMContentLoaded', () =>{
    initListeners();
})