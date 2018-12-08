// Declare an array
var sentence = ["why", "are", "you", "clicking", "on", "this?"];

// Start at first index
var indices = 0;

// Declare the setup function
function setup() {

  // create a canvas 500px wide and 500px high
  createCanvas( 500, 500 );

  // color the background black
  background( 'black');
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



face2(400, 100);
face2(300, 200);
face2(200, 300);
face2(100, 400);

function face2(t, j) {

push();
// Create purple ellipse
fill('rgba(90, 190 ,140, 1)')
ellipse( t, j, 150, 150 );


// Create red ellipse
fill('rgba(100, 50, 50, 1)')
ellipse( t, j, 80, 80 );

// Create blue-purple ellipse
fill('rgba(50,70,50, 1)')
ellipse( t, j, 56, 56 )

// Create yellow ellipse
fill('yellow')
ellipse( t, j, 32, 32 );

pop();
}


// Make a one-time sentence, one word per click

fill('rgba(100,110,210, .8)');
textSize(70);
text(sentence[indices], 10, 250);

}

function mousePressed() {
  indices = indices + 1;

if (indices == 6) {
  indices = 0;
}

}
