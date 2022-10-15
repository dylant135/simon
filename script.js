const start = document.getElementById('start');
const scoreDisplay = document.getElementById('scoreDisplay');
const cells = document.querySelectorAll('.cell');

let arr = ['red', 'green', 'blue', 'yellow'];
let answer = [];

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
    let i = 0;
    while(i < answer.length) {
        let theCell = answer[i];
        switch(theCell) {
            case 'red':
                document.getElementById('red').style.backgroundColor = '#F5473F';
                break;
            case 'green':
                document.getElementById('green').style.backgroundColor = '#5CE160';
                break;
            case 'blue':
                document.getElementById('blue').style.backgroundColor = '#7C92D9';
                break;
            case 'yellow':
                document.getElementById('yellow').style.backgroundColor = '#DBEA91';
                break;
        }
        setTimeout(() => {
            document.getElementById('red').style.backgroundColor = 'red';
            document.getElementById('green').style.backgroundColor = 'green';
            document.getElementById('blue').style.backgroundColor = 'blue';
            document.getElementById('yellow').style.backgroundColor = 'yellow';
        }, 1500)
        i++;
    }
    cells.forEach(cell => {
        cell.addEventListener('click', guess);
    })
}

function guess() {
    
}