
var shooter;
var alien;

function setup() {
  createCanvas(600, 400);
  shooter = new Shooter();
  alien = new Alien();
}

function draw() {
  background('black');
  shooter.show();
  alien.show();
}



function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    shooter.left();
  } else if (keyCode === LEFT_ARROW) {
    shooter.right();

  }
}
