let x = 0;

// Declare the setup function
function setup() {

  // create a canvas 500px wide and 600px high
  createCanvas( 500, 600 );

  // color the background 'green'
  background( 'green');
}
// Declare the draw function
function draw() {

// Create arcs behind head for horns.
fill('white')
arc(300, 60, 50, 35, TWO_PI, PI);
arc(200, 60, 50, 35, TWO_PI, PI);

// Color ellipses with integer RGBA notation
// Create ellipse positioned at ( x: 250, y: 100 ), with (w: 100, h: 100)
fill('rgba(0,255,0, 1)')
ellipse( 250, 100, 130, 130 );
//Create ellipse at ( x: 250, y: 300 ), with (w: 75, h: 260)
ellipse( 250, 300, 75, 269 )
// Color eyeball light pink
fill('rgba(255, 200, 200, 1)')
ellipse( 250, 80, 40, 40 );
// Color iris blue, semi-transparent
fill('rgba(0,100,125, .6)')
ellipse( 250, 80, 28, 28 )
// Create black pupil
fill('black')
ellipse( 250, 80, 16, 16 );

// Create white gleam on pupil. Rotate.  Elongate ellipse so rotation can be seen.
push();
translate(249, 79)
rotate(x);
fill('white')
ellipse( 0, 0, 5, 2 );
pop();

// Create arc for smile
fill('white')
arc(250, 120, 50, 30, TWO_PI, PI);
// Create ellipses for monster ears
fill('rgba(150, 255, 0, 1)')
ellipse(195, 95, 15, 25 );
ellipse(305, 95, 15, 25 );

// Legs
stroke(255);
line(250, 433, 245, 598);
line(245, 435, 240, 596);
line(260, 430, 290, 590);
line(256, 430, 284, 590);

// Feet
fill('black')
arc(220, 600, 60, 40, PI, TWO_PI)
arc(305, 600, 60, 40, PI, TWO_PI)

// Arms
line(285, 250, 350, 230)
line(285, 245, 350, 225);
line(350, 225, 380, 165);
line(352, 230, 385, 165);
line(215, 250, 150, 280);
line(215, 255, 150, 285);
line(152, 285, 170, 335);
line(145, 280, 165, 340);

//Create nubs for hands. Poor guy lost all 100 fingers in a tragic space accident.
push();
strokeWeight(20);
point( 380, 165 );
point( 167, 337 );
pop();

// Create elbows.
push();
strokeWeight(15);
point( 350, 227 );
point( 150, 282 );
pop();

// Define velocity of rotation for gleam in pupil
x = x + .1;

// Create option to click and draw a continuous line (to add my signature for screenshot)
stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
