const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 4096, 2048 ]
};

let points = 10000
const batchSize = 1000
const nBatches = 10

let x = 0
let y = 2048

let lineArr = []

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    for (let b = 0; b < nBatches; b++){
      for (let i = 0 + b * batchSize; i < points + b * batchSize; i++) {
        lineArr.push([x, y])
        context.beginPath()
        context.arc(x / 2, y / 2 , 3.5, 0, Math.PI* 2)
        x = x + random.range(1, 1)
        y = y + random.range(-1, 1)
        context.fillStyle = 'black'
        context.fill()
      }
      for (let i = 0; i < lineArr.length - 1; i++) {
        context.beginPath()
        context.moveTo(lineArr[i][0] / 2, lineArr[i][1] / 2)
        context.lineTo(lineArr[i + 1][0] / 2, lineArr[i + 1][1] / 2)
        context.stroke()
      }
    }
  };
};

canvasSketch(sketch, settings);
