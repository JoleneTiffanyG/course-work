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
This defines the variable for the original positional x-value of the ball.

    ball.y = 10;
This defines the variable for the original positional y-value of the ball.

    ball.delta_x = 1;
This defines the variable for the angle of movement of the ball along the x-axis.

    ball.delta_y = 1;
This defines the variable for the angle of movement of the ball relative to the y-axis.

    ball.scale_x = 1;
This defines the variable for the velocity of movement in the x direction

    ball.scale_y = 1;
This defines the variable for the velocity of movement in the y direction



    function setup() {
    createCanvas(windowWidth, 400);
    background( 'rgb(10, 45, 10)' );
    }
This defines the setup function, sets the width of the canvas equal to the width of the entirety of the window, and the height of the canvas is set at 400 pixels.  Background color is declared before the draw function so that it doesn't reset each iteration.

    function draw() {
Declare the draw function to begin the sketch

    ball.x += ball.delta_x * ball.scale_x;

This states that the x position of the ball is equal to or greater than the variables representing the angle of movement multiplied by the velocity of movement along the x axis.

    ball.y += ball.delta_y * ball.scale_y;


This states that the y position of the ball is equal to or greater than the variables representing the angle of movement multiplied by the velocity of movement along the y axis.

    if (ball.x >= width || ball.x <= 0) {
This line is a conditional statement using variables.  It means that if the x axis position of the ball becomes equal to or greater than the width of the canvas, then the x axis value of the ball then becomes less than the width of the canvas.  Meaning when the ball hits the edge, it must go back.  It is constrained horizontally.

    if (ball.y >= height || ball.y <= 0) {

This line is also a conditional statement using variables.  It means that if the y axis position of the ball becomes equal to or greater than the height of the canvas, then the y axis value of the ball then becomes less than the height of the canvas.  Meaning when the ball hits the top or bottom, it must go back.  It is constrained vertically.


    ball.delta_y = -1 * ball.delta_y;
This is the part of the code responsible for the change in direction when the ball hits its parameter limits.  **ball.delta_y** is the variable defining the angle of movement in a vertical direction.  Multiplying it by -1 reverses direction.

    ball.delta_x = -1 * ball.delta_x;
This is the part of the code responsible for the change in direction when the ball hits its parameter limits.  **ball.delta_x** is the variable defining the angle of movement in a horizontal direction.  Multiplying it by -1 reverses direction.

    fill(random(255), random(255), random(255));
    ellipse(ball.x, ball.y, ball.width, ball.width);
This defines the color of the ball (I altered it from white to a random color generator so it changes color with each iteration) and the shape and position of the ellipse is defined by the previously stipulated global variables.

    function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
This uses the map function and pairs it with the clicking of the mouse, dependant on its x and y position in relation to the height and width of the defined canvas space.  Clicking to the right of the halfway point of the width of the canvas causes the angle of the ball's movement to become more shallow. Clicking before, or to the left, of the horizontal halfway point causes the angle of movement to move closer to vertical, or become steeper/more acute angles of movement.  Clicking in the upper half of the canvas causes decreases the velocity of the ball's movement.  Clicking in the lower half increases the velocity.

### How To Make the Ball Change Direction

Since the movement of the ball is constrained by the parameters of the canvas, it already changes direction when it hits the limit of the parameters.  So to make the ball change direction I simply altered the variable for **ball.x** and changed it to equal the width of the window.  That way when the animation begins, it's already at the right side of the canvas and begins moving immediately to the left, rather than to the right as the original sketch did.  I also altered the variable for **ball.y** to 400 (the height of the canvas) to move the starting position to the bottom of the canvas.  For this to work I also had to alter the variable for **ball.delta_y** (see further explanation below).

### How I Altered the Sketch

The first thing I did was to change the background to a deep green and then to change the ball color to a random color generator resetting every frame.  It made the overall image much more interesting as the velocity of the ball changed.  I also changed the size of the ball just for my own personal preference.  Once the image looked the way I liked, I started looking into changing the direction of the ball's movement.
I ended up just figuring out the width of the canvas (since I din't use pre-defined variable **width** this wouldn't hold steady if the size of the canvas were to change, but it works for what I'm trying to do for now).  I input the width into global variable **ball.x** so that when the animation starts it begins at the right side of the canvas and is moving left, rather than beginning at the left side and moving right, as the original code dictated.
I also had to alter the variable for **ball.delta_y** because when I altered the variable for **ball.y** to 400 (the height of the canvas) to move the starting position to the opposite corner, it wanted to move downward and couldn't, so it wouldn't move without clicking.  So by changing **ball.delta_y** from a 1 to a -1, I changed the vertical direction of movement, allowing the ball to start in the opposite corner and begin its bouncing from there and move in the opposite direction from the standpoint of both the x and y axis.
