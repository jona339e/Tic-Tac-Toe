const gameboard = document.querySelector('.gameboard');
const resetBtn = document.querySelector('.reset');

let xTurn = true;
let gameOver = false;



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
                if(CheckWinner() !== '') {
                    alert(CheckWinner() + ' wins!')
                    gameOver = true
                }
            }, 1)
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
    })

})




init();