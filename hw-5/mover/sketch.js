
/** Define variables to base off for rate of rotation
let x = 0;
let y = .1;
let z = .1;
*/

// Declare an array
var c = [];

// Declare the setup function
function setup() {

  // create a canvas 500px wide and 500px high
  createCanvas( 500, 500 );

  // color the background black
  background( 'black');
}

void draw()
  if (mousePressed == true) {
    noCursor();
  }

// Declare the draw function
function draw() {

// Background command after draw function to reset background each frame
background( 'black');



// Allow movement of mouse to affect image scale and stretch both horizontally and vertically
scale(mouseX / 100, mouseY / 100);

// Draw overlapping line of "faces"
face(50, 50);
face(100, 100);
face(150, 150);
face(200, 200);
face(250, 250);
face(300, 300);
face(350, 350);
face(400, 400);

// Create new function "face"
function face(a, b) {

push();
// Create purple ellipse
fill('rgba(90, 40 ,100, 1)')
ellipse( a, b, 100, 100 );


// Create red ellipse
fill('rgba(255, 50, 50, 1)')
ellipse( a, b, 40, 40 );

// Create blue-purple ellipse
fill('rgba(50,50,150, 1)')
ellipse( a, b, 28, 28 )

// Create yellow ellipse
fill('yellow')
ellipse( a, b, 16, 16 );

pop();
}



/**
push();
translate(width/2, height/2);
fill('rgba(70, 200, 70, 1)')
ellipse( 0, 0, 500, 500 );
fill('rgba(100, 170, 100, 1)')
ellipse( 0, 0, 400, 400 );

// Draw ellipse that looks like it's stretching and rotating, independent of mouse
fill('rgba(100, 255, 200, .8)')
ellipse(0, 0, (frameCount % 95)*3, 200);

// Create series of semi-transparent ellipses emanating from center
fill('rgba(200, 255, 100, .8)')
ellipse(frameCount % 400, 0, 100, 100);
ellipse(frameCount % 300, 0, 80, 80);
ellipse(frameCount % 200, 0, 60, 60);
ellipse(frameCount % 100, 0, 40, 40);

// End translate based on width and height of canvas
pop();


// Create elongated black ellipse rotating at constant rate of motion
push();
translate(249, 79)
rotate(x);
fill('black')
ellipse( 0, 0, 7, 3 );
pop();

// Create bright green ellipse rotating clockwise
push();
translate(200, 90)
rotate(y);
fill('rgba(150, 255, 0, 1)')
ellipse(0, 0, 15, 25 );
pop();

// Create identical ellipse rotating same velocity opposite direction
push();
translate(300, 90)
rotate(z)
fill('rgba(150, 255, 0, 1)')
ellipse(0, 0, 15, 25 );
pop();



// Define velocity of rotation for black inside ellipse
x = x + .1;

// Define velocity of rotation for first green ellipse
y = y + .2

// Define velocity of rotation for second green ellipse
z = z - .2
*/


  }
