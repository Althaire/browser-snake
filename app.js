var canvasEl = document.querySelector('canvas')

canvasEl.style.backgroundColor = 'palegreen';
canvasEl.style.display = 'block'; // to make our canvas an independent object
canvasEl.width = 500; //do not set in CSS as it gets treated as an image!
canvasEl.height = 500; // in px
canvasEl.style.margin = '0 auto'; //centers our canvas! :)

var context = canvasEl.getContext('2d');
// context.fillStyle = 'thistle';
// To draw a rectangle: (pos x, pos y, width, height)
// context.fillRect(0, 0, 250, 250);


//
var GRID_SIZE = 20; //All caps for emphasis on this constant
for (var i = GRID_SIZE; i < canvasEl.width; i += GRID_SIZE) {
  context.strokeStyle = 'black';
  context.beginPath();
  context.moveTo(i - 0.5, 0);
  context.lineTo(i - 0.5, canvasEl.height);
  context.closePath();
  context.stroke();

  context.beginPath();
  context.moveTo(0, i - 0.5);
  context.lineTo(canvasEl.width, i - 0.5);
  context.closePath();
  context.stroke();
}

//Snake snake |__|˚``
var SNAKE_COLOR = 'coral';
var SNAKE = [
  { // Footer
    x: 0,
    y: 0
  },
  {
    x: GRID_SIZE,
    y: 0
  },
  {
    x: GRID_SIZE * 2,
    y: 0
  },
  { // Head
    x: GRID_SIZE * 3,
    y: 0
  }
];


context.fillStyle = SNAKE_COLOR;
SNAKE.forEach(function(snakePart) {
  context.fillRect(snakePart.x, snakePart.y, GRID_SIZE, GRID_SIZE);
}); // This draws Snake  |__|ˆ``

var gameSpeed = 250; //in ms
var snakeDirection = 'right';
function gameManager() {
  
}
var gameLoop = setInterval(gameManager, gameSpeed);
