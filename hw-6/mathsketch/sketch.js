// Define global variables outside of setup() so their scope is the entire program
let e1 = 30;
let e2 = 30;


var object = {};
object.xloc = 250;
object.yloc = 250;
object.size = 100;
object.color = ( 'rgba(75, 25, 85, .2)' );

// Spiral drawing
var angle = 0.0;
var offset = 60;
var scalar = 2;
var speed = 0.05;

//var speed = 2.5;
//var diameter = 20;
//var x;
//var y;


function setup() {
    createCanvas( 500, 500 );

    var e2g = 150;

    // create background outside of draw() so the image doesn't reset
      background( 'rgb(50, 150, 70)' );
}

//delete broken code to play with later
//x = width/2;
//y = height/2;


function draw() {


//delete broken code to play with later
  //x +- random(-speed, speed);
  //y +- random(-speed, speed);
  //ellipse(x, y, diameter, diameter);


  fill( object.color );
  ellipse( object.xloc, object.yloc, object.size );

// draw ellipses in each corner changing color randomly at current frameRate

push();
fill(random(255), random(255), random(255));
ellipse(40, 40, 50);
ellipse(460, 40, 50);
ellipse(40, 460, 50);
ellipse(460, 460, 50);
pop();

push();
    // draw an ellipse
    fill( 'rgb(200, 150, 50)' );
    ellipse( e1, 250, 100 );

    // move ellipse
    e1 = e1 + 4;
    // keep ellipse inside canvas bounds
    e1 = e1 % width;

  pop();

push();
      // draw an ellipse

translate(400, 0);

      fill( 'rgb(200, 150, 70)' );
      ellipse( e2, 450, 35 );

      // move ellipse opposite direction
      e2 -= 1;
      // keep ellipse inside canvas bounds
      e2 %= width;
    pop();

    push();
      // draw an ellipse

    translate(400, 0);
          fill( 'rgb(200, 150, 70)' );
          ellipse( e2, 100, 35 );
          // move ellipse opposite direction
          e2 = e2 - 3;
          // keep ellipse inside canvas bounds
          e2 = e2 % width;
        pop();

    // Draw center ellipse using object variables


// Use map function to affect defined object
    var ymov = map(mouseY * 5, 0, width, 0, 500);
    var xmov = map(mouseX / 2, 0, width, 0, 500);
    ellipse(250, ymov, 25, 25);
    ellipse(xmov, 325, 25, 25);
    ellipse(xmov, 175, 25, 25);


  // Spiral
        var x = offset + cos(angle) * scalar;
        var y = offset + sin(angle) * scalar;
        ellipse(x, y, 15, 15 );
        angle += speed;
        scalar += speed;

// Spiral
      push();
      translate(400, 400 );
        var x = offset + cos(angle) * scalar;
        var y = offset + sin(angle) * scalar;
        ellipse(x, y, 7, 7 );
        angle += speed;
        scalar += speed;
        pop();

  }
