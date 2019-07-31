const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 2048, 2048 ]
};

let points = 10000

let x = 0
let y = 2048

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < points; i++) {
      context.beginPath()
      context.arc(x / 2, y / 2 , 2, 1, Math.PI* 2)
      x = x + random.range(-10, 10)
      y = y + random.range(-10, 10)
      context.fillStyle = 'black'
      context.fill()
      console.log(x)
    }
  };
};

canvasSketch(sketch, settings);
