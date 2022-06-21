class Quadrado {

   constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
   }

   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.moveTo(this.x, this.y);
      ctx.fillRect(this.x, this.y, this.x, this.x);
   }


   update() {

      

      if ((this.y + this.size) >= height) {
         this.velY = -(this.velY);
      }

      if ((this.y - this.size) <= 0) {
         this.velY = -(this.velY);
      }


      this.y += this.velY;
   }
   
   collisionDetect(Quadrados) {
      for (var quadrado of Quadrados) {
         if (!(this === quadrado)) {
            const dx = this.x - quadrado.x;
            const dy = this.y - quadrado.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + quadrado.size) {
              quadrado= this.color = randomRGB();
            }
         }
      }
   }

}
