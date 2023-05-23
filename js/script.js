const gameboard = document.querySelector('.gameboard');
const resetBtn = document.querySelector('.reset');
const rePlayBtn = document.querySelector('.replay');

const clock = document.querySelector('.clock');

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

let xTurn = true;
let gameOver = false;

let winner = '';

let score1 = 0;
let score2 = 0;


const init = () => {
    for (let i = 0; i < 9; i++) {
        let btn = document.createElement('button')
        btn.className = 'field'

        
        gameboard.appendChild(btn)
    }
    const fields = document.querySelectorAll('.field')
    createEvt(fields)
}

const createEvt = (fields) => {

    fields.forEach((field) => {
        field.addEventListener('click', (e) => {
            if (e.target.innerText !== ''|| gameOver) return
            e.target.innerText = xTurn ? 'X' : 'O'
            xTurn = !xTurn

            // allows x or o to be placed before I check for a winner
            setTimeout(() => {
                winner = CheckWinner()
                if(winner !== '') {
                    alert(winner + ' wins!')
                    gameOver = true
                    updateScore()
                }
            }, 0)
        })
    })
}






function CheckWinner(){
const fields = document.querySelectorAll('.field')
let combos = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ]

let winner = ''

for (let i = 0; i < combos.length; i++) {
    let [a, b, c] = combos[i]
    if (fields[a].innerText === fields[b].innerText && fields[a].innerText === fields[c].innerText) winner = fields[a].innerText
}

return winner
}


resetBtn.addEventListener('click', () => {
    const fields = document.querySelectorAll('.field')
    
        fields.forEach((field) => {
            field.innerText = ''
            gameOver = false
            xTurn = true
            winner = ''
            score1 = 0
            score2 = 0
            player1.innerText = `Player 1 Score: ${score1}`
            player2.innerText = `Player 2 Score: ${score2}`
    })

})

rePlayBtn.addEventListener('click', () => {
    const fields = document.querySelectorAll('.field')
    
        fields.forEach((field) => {
            field.innerText = ''
            gameOver = false
            xTurn = true
            winner = ''
    })

})


function updateScore(){
    if(winner === 'X')
    {
        score1++
        player1.innerText = `Player 1 Score: ${score1}`

    }
    else {
        score2++
        player2.innerText = `Player 2 Score: ${score2}`
    }
}



function showTime(){
    clock.innerText = new Date().toLocaleTimeString()
}
setInterval(showTime, 1000)



init();