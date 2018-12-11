function Alien() {
  this.x = width/2;
  this.y = 50;

  this.show = function() {
    fill('red');
    ellipse(this.x, this.y, 60, 60);
  }
}
