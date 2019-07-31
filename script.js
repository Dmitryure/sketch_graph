const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 2048, 2048 ]
};

let points = 1000

let x = 0
let y = 2048

let lineArr = []

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < points; i++) {
      lineArr.push([x, y])
      context.beginPath()
      context.arc(x / 2, y / 2 , 3.5, 0, Math.PI* 2)
      x = x + Math.abs(random.range(-100, 100))
      y = y + Math.abs(random.range(-100, 100))
      context.fillStyle = 'black'
      context.fill()
    }
    for (let i = 0; i < lineArr.length - 1; i++) {
      console.log(lineArr)
      console.log(lineArr[i + 1][0], lineArr[i + 1][1])
      context.beginPath()
      context.moveTo(lineArr[i][0] / 2, lineArr[i][1] / 2)
      context.lineTo(lineArr[i + 1][0] / 2, lineArr[i + 1][1] / 2)
      context.stroke()
    }
  };
};

canvasSketch(sketch, settings);
