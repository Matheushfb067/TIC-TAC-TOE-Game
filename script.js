const boxes = document.querySelectorAll('.box')
const resetbtn = document.getElementById('reset');
const messagediv = document.getElementById('mensagem');

let player1 = 'X';
let player2 = 'O';

let playerAtual = player1;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

function handleClick(event){
    const box = event.target;

    if(box.textContent != ''){
        return;
    }

    box.textContent = playerAtual;

    if(playerAtual === player1)
        playerAtual = player2;
    else
        playerAtual = player1;

    let JogoEmAndamento = true;

    for(let i = 0; i < winPatterns.length; i++){
        let pattern = winPatterns[i];

        let box1 = boxes[pattern[0]].textContent;
        let box2 = boxes[pattern[1]].textContent;
        let box3 = boxes[pattern[2]].textContent;

        if(box1 !== '' && box1 == box2 && box2 == box3){
            messagediv.textContent = `${box1} WIN!`;
            JogoEmAndamento = false;
            break;
        }

        if(JogoEmAndamento){
            let gridCompleto = true;
            boxes.forEach(box => {
                if(box.textContent === ''){
                    gridCompleto = false;
                }
            });
        if(gridCompleto){
            messagediv.textContent = "It's a draw!";
        }
        }
    }
}

function resetGame(){
    boxes.forEach(box => {
        box.textContent = '';
    });

    playerAtual = player1;

    messagediv.textContent = '';
}

boxes.forEach(box => {
    box.addEventListener('click', handleClick);
});

resetbtn.addEventListener('click', resetGame)