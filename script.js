let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset-btn');
let result = document.querySelector('#msg');

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    let winner = "";

    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].textContent;
        let pos2Val = boxes[pattern[1]].textContent;
        let pos3Val = boxes[pattern[2]].textContent;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                winner = pos1Val;
                break;
            }
        }
    }

    if (winner === "O") {
        result.textContent = "Player O wins!";
    } else if (winner === "X") {
        result.textContent = "Player X wins!";
    }
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.textContent === "") {
            if (turn0) {
                box.textContent = 'O';
                turn0 = false;
            } else {
                box.textContent = 'X';
                turn0 = true;
            }

            box.disabled = true;
            checkWinner();
        }
    });
});

resetButton.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.textContent = "";
        box.disabled = false;
    });
    turn0 = true;
    result.textContent = "";
});