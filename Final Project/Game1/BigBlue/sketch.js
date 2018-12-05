
//define spheres array
let thirdspheres = [];
//define number of spheres to be generated
const numOfthirdSpheres = 10;

function setup() {

    createCanvas(600, 600);

  //define original positions of spheres
    let start_x2 = 60;
    let start_y2 = 60;
    for (let e = 0; e < numOfthirdSpheres; e++) {
        thirdspheres.push(new thirdSphere(start_x2, start_y2));

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

    for (let e = 0; e < spheres2.length; e++) {

            // define sphere methods
            spheres2[e].sphereCheck(spheres2, e);
            spheres2[e].edgeCheck();
            spheres2[e].move();
            spheres2[e].display();
        }
    }

//define Sphere2 class
    class Sphere {
        constructor(x2, y2, size2) {
            this.color2 = 'green';
            this.size2 = (15, 50);
            this.rad2 = this.size2 / 2;
            this.posX2 = x2;
            this.posY2 = y2;
            this.deltaX2 = random(-1, 1);
            this.deltaY2 = random(-1, 1);
        }

//show spheres
        display() {

            push();

            fill(this.color2);
            translate(this.posX2, this.posY2);
            ellipse(0, 0, this.size2);

            pop();
        }

//move spheres from original positions
        move() {
               this.posX2 += this.deltaX2;
               this.posY2 += this.deltaY2;
           }

//keep spheres within the confines of the canvas by limiting to 600 pixels in both x and y direction
           edgeCheck() {

               if (this.posX2 + this.rad2 >= width || this.posX2 - this.rad2 <= 0) {
                   this.deltaX2 *= -1;
                   this.color2 = 'rgb(70, 250, 170)';
               }

               if (this.posY2 + this.rad2 >= height || this.posY2 - this.rad2 <= 0) {
                   this.deltaY2 *= -1;
                   this.color2 = 'rgb(130, 240, 170)';

                if (this.posY2 + this.rad2 < height || this.posY2 - this.rad2 <= 0) {
                     this.deltaY2 *= 1;
                      this.color2 = 'rgb(100, 220, 190)';
                    }

                    if (this.posX2 + this.rad2 < width || this.posX2 - this.rad2 <= 0) {
                        this.deltaX2 *= -1;
                        this.color2 = 'rgb(70, 200, 110)';
                    }

               }
           }
           sphereCheck(otherSpheres2, presentsphere2) {
                //loop applying to all spheres contained in array
                   for (let m = 0; m < otherSpheres2.length; m++) {

                      //if check returns yes for sphere being itself, skip
                      //if returns false, it's a different sphere
                 if (m != presentsphere2) {
                        let t = dist(this.posX2, this.posY2, otherSpheres2[m].posX2, otherSpheres2[m].posY2);
                        let radii = this.rad2 + otherSpheres2[m].rad2;

                    //if distance between spheres is less than or equal to other sphere (touching), then reverse trajectory
                        if (t <= radii) {
                               this.deltaX2 *= -1;
                               this.deltaY2 *= -1;



                           }
                       }
                   }
               }
           }
