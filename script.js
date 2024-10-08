rps = {
    1:'rock',
    2:'scissors',
    3:'paper'
}

async function getRandomChoice(){
    let random = Math.random() * 3;
    let num = Math.floor(random)
    let result = rps[num]

    return await result;
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
        case 'paper':
            if(randomChoice === 'rock'){
                return 'win'
            };
        case 'rock':
            if(randomChoice === 'scissors'){
                return 'win'
            }
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
        return
    } else if(result === 'draw'){
        //draw
        console.log('Its a draw :o')
        return
    } else {
        //loss
        console.log('You lost :(')
        return
    }
}

function challenge(){
    tfChoice = document.getElementById('tfPlayerChoice');
    playerChoice = tfChoice.value
    challengerps(parseInt(playerChoice));
}