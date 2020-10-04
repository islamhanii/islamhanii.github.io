/*global document*/

/*Define canvas and get the place to be appended to*/
var toAppend = document.getElementById('canvas'),
    myCanvas = document.createElement('canvas');

/*Give the canvas an id*/
myCanvas.id = 'myCanvas';

/*Coordinate the canvas*/
myCanvas.width = 600;
myCanvas.height = 300;
myCanvas.style.display = 'block';
myCanvas.style.margin = '20px auto';
myCanvas.style.borderRadius = '10px';

/*Append the canvas to place*/
toAppend.appendChild(myCanvas);

/*Define a context, width and height*/
var myContext = myCanvas.getContext('2d'),
    myCanvasWidth = myCanvas.width,
    myCanvasHeight = myCanvas.height;

//Draw in the canvas
myContext.fillStyle = '#333';
myContext.fillRect(0, 0, myCanvasWidth, myCanvasHeight);

myContext.fillStyle = '#865599';
myContext.fillRect(50, 25, 50, 25);

myContext.fillStyle = '#459899';
myContext.fillRect(100, 50, 50, 25);

myContext.strokeStyle = '#cfd800';
myContext.lineWidth = 10;
myContext.strokeRect(100, 100, 100, 25);

myContext.strokeStyle = "#EEE";
myContext.lineWidth = 3;
myContext.moveTo(myCanvasWidth-myCanvasWidth/8, 0);
myContext.lineTo(myCanvasWidth, myCanvasHeight/5);
myContext.stroke();

myContext.clearRect(100, 100, 50, 25);

myContext.font = '60px cursive';

myContext.fillStyle = '#aa4545';
myContext.fillText('islam', 250, 200);

myContext.strokeStyle = '#ae89df';
myContext.lineWidth = 2;
myContext.strokeText('islam', 250, 200);