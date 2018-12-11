
var sun;

function preload() {


sun = loadAnimation('Gross_A13_gifanimation0000.jpg, Gross_A13_gifanimation0001.jpg');

}

function setup() {
  createCanvas(800, 800);
}

  function draw() {
    background(255);

    animation(sun, 100, 100);

  }
