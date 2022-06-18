const colors = ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed','#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0']

const container = document.getElementById('container');
const SQUARES = 800;

for(var i = 0; i<SQUARES; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    
    container.appendChild(square);
}

function setColor(square){
    var color = colors[Math.floor(Math.random()*colors.length)];
    // console.log(ind);
    square.style.background = color;
}

function removeColor(square){
    square.style.background = '#1d1d1d';
}