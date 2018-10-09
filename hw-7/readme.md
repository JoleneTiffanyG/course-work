Tiffany Gross,
Section A

[Altered Ball Sketch](https://jolenetiffanyg.github.io/course-work/hw-7/)




### Description of What the Original Code is Doing



Variables are defined outside of the setup function so they may be accessed globally.

    let ball = {};
This defines the object variable "ball"

    ball.width = 70;
This defines the variable for the size of the ellipse/ball

    ball.x = 10;
This defines the variable for the x-value of the ball.

    ball.y = 10;
This defines the variable y-value of the ball.

    ball.delta_x = 1;
This defines the variable for the x value of

    ball.delta_y = 1;
This defines the variable for the y value of

    ball.scale_x = 1;
This defines the variable for the x value of

    ball.scale_y = 1;
This defines the variable for the y value of



    function setup() {
    createCanvas(windowWidth, 400);
    background( 'rgb(10, 45, 10)' );
    }
This defines the setup function, sets the width of the canvas equal to the width of the entirety of the window, and the height of the canvas is set at 400 pixels.  Background color is declared before the draw function so that it doesn't reset each iteration.

    function draw() {
Declare the draw function to begin the sketch

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;
I don't know what delta is 


    if (ball.x >= width || ball.x <= 0) {

This line is a conditional statement using variables.  It means that if the x axis position of the ball becomes equal to or greater than the width of the canvas, then the x axis value of the ball then becomes less than the width of the canvas.  Meaning when the ball hits the edge, it must go back.  It is constrained horizontally.

    if (ball.y >= height || ball.y <= 0) {

This line is also a conditional statement using variables.  It means that if the y axis position of the ball becomes equal to or greater than the height of the canvas, then the y axis value of the ball then becomes less than the height of the canvas.  Meaning when the ball hits the top or bottom, it must go back.  It is constrained vertically.


    ball.delta_y = -1 * ball.delta_y;

    ball.delta_x = -1 * ball.delta_x;
I don't know what delta is

    fill(random(255), random(255), random(255));
    ellipse(ball.x, ball.y, ball.width, ball.width);
This defines the color of the ball (I altered it from white to a random color generator so it changes color with each iteration) and the shape and position of the ellipse is defined by the previously stipulated global variables.

    function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
This uses the map function and pairs it with the clicking of the mouse, dependant on its x and y position in relation to the height and width of the defined canvas space.  Clicking to the right of the halfway point of the width of the canvas causes the angle of the ball's movement to become more shallow. Clicking before, or to the left, of the horizontal halfway point causes the angle of movement to move closer to vertical, or become steeper/more acute angles of movement.  Clicking in the upper half of the canvas causes decreases the velocity of the ball's movement.  Clicking in the lower half increases the velocity.

### How To Make the Ball Change Direction

Since the movement of the ball is constrained by the parameters of the canvas, it already changes direction when it hits the limit of the parameters.  So to make the ball change direction I simply altered the variable for **ball.x** and changed it to equal the width of the window.  That way when the animation begins, it's already at the right side of the canvas and begins moving immediately to the left, rather than to the right as the original sketch did.

### How I Altered the Sketch

The first thing I did was to change the background to a deep green and then to change the ball color to a random color generator resetting every frame.  It made the overall image much more interesting as the velocity of the ball changed.  I also changed the size of the ball just for my own personal preference.  Once the image looked the way I liked, I started looking into changing the direction of the ball's movement.
