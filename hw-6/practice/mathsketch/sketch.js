

// Spiral drawing
var angle = 0.0;
var offset = 60;
var scalar = 2;
var speed = 0.05;



function setup() {


    createCanvas( 500, 500 );


    background( 'rgb(50, 150, 70)' );
}

function draw() {


  // Spiral
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  ellipse(x, y, 2, 2 );
  angle += speed;
  scalar += speed;



}
