function Shooter() {
  this.x = width/2;

  this.show = function() {
    fill('green');
    rect(this.x, height-20, 20, 20);
  }
}
