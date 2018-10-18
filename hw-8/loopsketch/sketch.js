
// Declare the setup function
function setup() {

  // create a canvas 500px wide and 500px high
  createCanvas( 500, 500 );

  // color the background black
  background( 'black');
}
//declare draw function
function draw() {

// write a for loop for ellipses along x axis
for (var a = 0; a <= height; a = a + 20) {
  //write a for loop for ellipses each iteration of above for loop to be executed each iteration
  for(var b = 0; b <= width; b = b + 20) {
    //draw blue circles with a and b as x and y values respectively
    fill(100, 170, 200);
    ellipse(a, b, 18);
   }
 }

//map x axis position of mouse to size of canvas and diameter of circle
map(mouseX, 0, 500, 0, 500);

//draw circle with mouseX as diameter
fill(200, 70, 80);
ellipse(250, 250, mouseX);

}
