

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}



const quadrados = [];

while (quadrados.length < 15) {
   const size = random(2,4);
   const quadrado = new Quadrado(
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-8,8),
      random(-8,8),
      randomRGB(),
      size
   );


  quadrados.push(quadrado);
}


function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0,  width, height);

   for (const quadrado of quadrados) {
    quadrado.draw();
    quadrado.update();
    quadrado.collisionDetect(quadrados);
   }

   requestAnimationFrame(loop);
}

loop();
