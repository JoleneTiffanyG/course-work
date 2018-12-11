
// Declare an array
var sentence = ["click a ball to start", "points:2", "points:4", "points:6", "points:8", "points:10", "points:12", "points:14", "points:16", "points:18", "points:20","points:22", "points:24", "Bonus Level!!", "bonus! +10", "bonus! +10", "bonus! +10", "bonus! +10","bonus! +10", "bonus! +10", "VICTORY!" ];

// Start at first index
var indices = 0;

//define spheres array
let spheres = [];


//let myFirstSphere ;


//define number of spheres to be generated
const numOfSpheres = 8;

function setup() {

    createCanvas(600, 600);

    //define original positions of spheres
    let start_x2 = 60;
    let start_y2 = 150;
    for (let e = 0; e < numOfSpheres; e++) {
        spheres.push(new firstSphere(start_x2, start_y2));
        spheres.push(new secondSphere(start_x2/2, start_y2/2))
        spheres.push(new thirdSphere(start_x2/5, start_y2/5))
        //spheres2.push(new firstSphere(start_x2, start_y2));

//for (let e = 0; e < numOfSpheres; e++) {
  //spheres.push(new secondSphere(start_x2, start_y2))

        //make sure spheres don't overlap at the beginning
        start_x2 += 100;
        if (start_x2 > width) {
            start_x2 = 60;
            start_y2 += 100;
        }
    }
}

function draw() {
    background('black');



//keep code within the draw function so that the image refreshes with each iteration


fill('rgba(100,110,210, .8)');
textSize(70);
text(sentence[indices], 10, 520);

    for (let e = 0; e < spheres.length; e++) {

        // define sphere methods
        spheres[e].sphereCheck(spheres, e);
        spheres[e].edgeCheck();
        spheres[e].move();
        spheres[e].display();
    }
}

function mousePressed() {
    // make the spheres check themselves
    // to see if the mouse is within them.
    for (let i = spheres.length - 1; i >= 0; i--) {
        let destroy = spheres[i].mouseCheck();
        if (destroy) {
            spheres.splice(i, 1);

//referring to the text indices defined above, create a point counter for when spheres are spliced out of the array
            indices += 1
            if (indices > sentence.length) {
              indices = 0;
          }

          console.log(sentence[indices]);
        }
    }
}



//define Sphere superclass
class Sphere {
    constructor(x2, y2, rad, color) {
        this.color = color;
        this.size = (15, 30);
        this.rad = this.size / 2;
        this.posX = x2;
        this.posY = y2;
        this.deltaX = random(-1, 1);
        this.deltaY = random(-1, 1);
    }

//show spheres
    display() {

        push();

        fill(this.color);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);

        pop();
    }

//move spheres from original positions
    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

//keep spheres within the confines of the canvas by limiting to 600 pixels in both x and y direction
    edgeCheck() {

        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
            this.color = 'rgb(70, 100, 170)';
        }

        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
            this.color = 'rgb(130, 70, 170)';

            if (this.posY + this.rad < height || this.posY - this.rad <= 0) {
                this.deltaY *= 1;
                this.color = 'rgb(100, 220, 190)';
            }

            if (this.posX + this.rad < width || this.posX - this.rad <= 0) {
                this.deltaX *= -1;
                this.color = 'rgb(70, 200, 110)';
            }

        }
    }

    mouseCheck() {
        // get distance between mouse and sphere center
        let d = dist(this.posX, this.posY, mouseX, mouseY);
        // check if distance is less than radius of sphere
        // if yes, mouse is inside
        if (d < this.rad) {
            return true;
        } else {
            return false;
        }
    }


    sphereCheck(otherSpheres2, presentsphere2) {
        //loop applying to all spheres contained in array
        for (let m = 0; m < otherSpheres2.length; m++) {

            //if check returns yes for sphere being itself, skip
            //if returns false, it's a different sphere
            if (m != presentsphere2) {
                let t = dist(this.posX, this.posY, otherSpheres2[m].posX, otherSpheres2[m].posY);
                let radii = this.rad + otherSpheres2[m].rad;

                //if spheres are touching, reverse
                if (t <= radii) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;

                }
            }
        }
    }
}

class firstSphere extends Sphere {
    constructor(x2,y2,size2) {
        const rad2 = size2/2 ;
        super(x2,y2,rad2,"green") ;
    }
}

class secondSphere extends Sphere {
    constructor(x2,y2,size2) {
        const rad2 = size2/2 ;
        super(x2,y2,rad2,"purple") ;
        this.size = (15, 40);
        this.posX = x2*4;
        this.posY = y2*4;
        this.deltaX = random(-3, 3);
        this.deltaY = random(-3, 3);
    }
}

class thirdSphere extends Sphere {
    constructor(x2,y2,size2) {
        const rad2 = size2/2 ;
        super(x2,y2,rad2,"yellow") ;
        this.size = (9, 12);
        this.posX = x2*6;
        this.posY = y2*6;
        this.deltaX = random(-4, 4);
        this.deltaY = random(-4, 4);
      }
    }


    fill('rgba(130,110,210, .8)');
    textSize(20);
    text(sentence[indices], 10, 250);


    function splice() {
      indices = indices + 1;

    if (indices == 6) {
      indices = 0;


// This part is an animation. The code is not broken but it returns the message "Loading.." in my browser.
// *Leaving it in just in case it works in your browser, because in theory this bit is all correctly done.
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

    }

    }
