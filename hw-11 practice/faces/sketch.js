let orb;

function setup() {
    // create canvas
    createCanvas( 600, 600 );

    // create a new ball object of class type "Ball"
    orb = new Orb(0, 0, 50, 'green');
}

function draw() {
    background(0);

    // call the ball's methods
    orb.display();
    orb.move();
    orb.edgeCheck();
  //  orb.implode();
}
class Orb {
    constructor(x, y, size, color) {
        this.color = color;
        this.size = size;
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = (-2, 2);
        this.deltaY = (-2, 2);
    }

    display() {
        push();
        // remove the balls outer stroke
        noStroke();
        // set the balls fill color
        fill(this.color);
        // set the position of the ball
        translate(this.posX, this.posY);
        ellipse(300, 300, this.size);
        pop();
    }
    move() {
           this.posX += this.deltaX;
           this.posY += this.deltaY;
       }

       /*implode() {
         if (this.posX = width/2 || this.size = 0) {
           this.deltaX *= -1;
         }
         if (this.posY = height/2 || this.size = 0) {
           this.deltaY *= -1;
         }
*/
      edgeCheck() {
           // check if the ball has hit a vertical wall (left or right walls)
           if( this.posX + this.rad >= width || this.posX - this.rad <= 0) {
               this.deltaX *= -1;
           }
           // check if the ball has hit a horizontal wall (top or bottom walls)
           if( this.posY + this.rad >= height || this.posY - this.rad <= 0) {
               this.deltaY *= -1;
           }

       }
     }
