const board = document.querySelector('.container');
const SQUARE_COUNT = 439;

const colors = ['#00CED1', '#00FA9A', '#8FBC8F', '#8B008B', '#6A5ACD', '#4B0082'];

for(let i = 0; i < SQUARE_COUNT; i++){
    
    let square = document.createElement('div');

    square.classList.add('square');

    square.addEventListener('mouseover', () =>{
       let color = colors[changeColor()];
        square.style.background = `${color}`;
        square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    });
    square.addEventListener('mouseleave', () =>{
        square.style.background = `silver`;
        square.style.boxShadow = `none`;
    });

    board.append(square);
}

function changeColor(){
    let color = Math.floor(Math.random() * colors.length);
    return color;
}