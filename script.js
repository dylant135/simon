const start = document.getElementById('start');
const scoreDisplay = document.getElementById('scoreDisplay');
const cells = document.querySelectorAll('.cell');

let arr = ['red', 'green', 'blue', 'yellow'];
let answer = [];
let guesses = [];
let colus = [];
let score = 0;
let turn = false;

start.addEventListener('click', startGame);
function startGame() {
    start.style.display = 'none';
    scoreDisplay.style.display = 'block';
    round();
}

function round() {
    let color = arr[Math.floor(Math.random() * arr.length)];
    answer.push(color);
    displayColor();
}

function displayColor() {
    colus = [...answer];
    function flash() {
        let theCell = colus[0];
        const it = document.getElementById(theCell);it.classList.add('white');
        setTimeout(() => {
            it.classList.remove('white');
            colus.shift();
            if(colus.length > 0) {
                setTimeout(flash, 250);
            }
        }, 1000);
    }
    flash();
    

    turn = true;
    if(turn) {
        guesses = [...answer];
        console.log(guesses);
        cells.forEach(cell => {
            cell.addEventListener('click', guess);
        })
}}

function guess(e) {
    let targ = e.target;
    let atrib = targ.getAttribute('id');
    console.log(atrib);
    if(atrib == guesses[0]) {
        guesses.shift();
        targ.classList.add('black');
        setTimeout(() => {
            targ.classList.remove('black');
        }, 75);
    } else if(atrib != guesses[0]) {
        alert('you lose, your score was ' + score);
        turn = false;
        location.reload();
    }

    if(guesses.length == 0) {
        score++;
        scoreDisplay.innerText = 'Score: ' + score;
        turn = false;
        round();
    }

    /*for(let i = 0; i < answer.length; i++) {
        if(atrib == answer[i]) {
            count--;
            if(count == 0) {
                score++;
                scoreDisplay.innerText = 'Score: ' + score;
                round();
            } 
        } else if(atrib != answer[0]) {
            alert('you lose');
        }
    }*/
}