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

context.strokeStyle = 'white';
context.beginPath();
context.moveTo(25, 0);
context.lineTo(25, canvasEl.height);
context.stroke();
