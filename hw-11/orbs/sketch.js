//define variable for orbs for Orb class
let orb;

//define array for orbs
let o = [];
let numer_os = 10;
let each_color;

// Declare the setup function
function setup() {

  // create a canvas 600px wide and 600px high
  createCanvas( 600, 600 );




  // create new orb object of class type "Orb"
  orb = new Orb(width / 2, height / 2, 50, 'green');
}


// Declare the draw function
function draw() {

// Background command after draw function to reset background each frame
background( 'black');

// call methods for orb
orb.display();
orb.move();
orb.implode();

}


//define Orb class and methods
class Orb {
  constructor( x, y, size, color ) {
    this.color = color;
    this.size = size;
    this.posX = x;
    this.posY = y;
    this.deltaX = random(10, 10);
    this.deltaY = random(10, 10);

  }

//declare "show" method
show() {
  push();
  fill(this.color);
  translate(this.posX, this.posY);
  ellipse(0, 0, this.size);
  pop();

}

//declare "move" method
move() {
  this.posX +- this.deltaX;
  this.posY +- this.deltaY;

}


//cause orbs to disappear when they hit the center of the canvas
implode() {
  if( this.posX = width/2 || this.size = this.size - this.size )
  if ( this.posY = height/2 || this.size = this.size - this.size )

}

}

}
