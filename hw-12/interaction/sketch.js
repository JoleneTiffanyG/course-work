
//define spheres array
let spheres = [];
//define number of spheres to be generated
const numOfSpheres = 30;

function setup() {

    createCanvas(600, 600);

  //define original positions of spheres
    let start_x = 60;
    let start_y = 60;
    for (let i = 0; i < numOfSpheres; i++) {
        spheres.push(new Sphere(start_x, start_y));

    //make sure spheres don't overlap at the beginning
        start_x += 100;
        if (start_x > width) {
            start_x = 60;
            start_y += 100;
        }
    }
}

function draw() {
    background('black');

//keep code within the draw function so that the image refreshes with each iteration

    for (let i = 0; i < spheres.length; i++) {

            // define sphere methods
            spheres[i].sphereCheck(spheres, i);
            spheres[i].edgeCheck();
            spheres[i].move();
            spheres[i].display();
        }
    }

//define Sphere class
    class Sphere {
        constructor(x, y, size) {
            this.color = 'purple';
            this.size = random(10, 40);
            this.rad = this.size / 2;
            this.posX = x;
            this.posY = y;
            this.deltaX = random(-2, 2);
            this.deltaY = random(-2, 2);
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
                   this.color = 'rgb(70, 90, 200)';
               }

               if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
                   this.deltaY *= -1;
                   this.color = 'rgb(100, 70, 170)';

                if (this.posY + this.rad < height || this.posY - this.rad <= 0) {
                     this.deltaY *= 1;
                      this.color = 'rgb(200, 100, 90)';
                    }

                    if (this.posX + this.rad < width || this.posX - this.rad <= 0) {
                        this.deltaX *= -1;
                        this.color = 'rgb(100, 200, 90)';
                    }

               }
           }
           sphereCheck(otherSpheres, presentsphere) {
                //loop applying to all spheres contained in array
                   for (let n = 0; n < otherSpheres.length; n++) {

                      //if check returns yes for sphere being itself, skip
                      //if returns false, it's a different sphere
                 if (n != presentsphere) {
                        let d = dist(this.posX, this.posY, otherSpheres[n].posX, otherSpheres[n].posY);
                        let radii = this.rad + otherSpheres[n].rad;

                    //if distance between spheres is less than or equal to other sphere (touching), then reverse trajectory
                        if (d <= radii) {
                               this.deltaX *= -1;
                               this.deltaY *= -1;




                           }
                       }
                   }
               }
           }
