
//define spheres array
let spheres1 = [];
//define number of spheres to be generated
const numOfSpheres1 = 20;



function setup() {

    createCanvas(600, 600);

  //define original positions of spheres
    let start_x = 60;
    let start_y = 60;
    for (let i = 0; i < numOfSpheres1; i++) {
        spheres1.push(new Sphere1(start_x, start_y));

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

    for (let i = 0; i < spheres1.length; i++) {

            // define sphere methods
            spheres1[i].sphereCheck(spheres1, i);
            spheres1[i].edgeCheck();
            spheres1[i].move();
            spheres1[i].display();
        }
    }

//define Sphere class
    class Sphere1 {
        constructor(x, y, size) {
            this.color = 'purple';
            this.size = (5, 20);
            this.rad = this.size / 2;
            this.posX = x;
            this.posY = y;
            this.deltaX = random(-4, 4);
            this.deltaY = random(-4, 4);
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
                   this.color = 'rgb(140, 90, 250)';
               }

               if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
                   this.deltaY *= -1;
                   this.color = 'rgb(170, 70, 240)';

                if (this.posY + this.rad < height || this.posY - this.rad <= 0) {
                     this.deltaY *= 1;
                      this.color = 'rgb(140, 40, 210)';
                    }

                    if (this.posX + this.rad < width || this.posX - this.rad <= 0) {
                        this.deltaX *= -1;
                        this.color = 'rgb(100, 20, 240)';
                    }

               }
           }
           sphereCheck(otherSpheres1, presentsphere1) {
                //loop applying to all spheres contained in array
                   for (let n = 0; n < otherSpheres1.length; n++) {

                      //if check returns yes for sphere being itself, skip
                      //if returns false, it's a different sphere
                 if (n != presentsphere1) {
                        let d = dist(this.posX, this.posY, otherSpheres1[n].posX, otherSpheres1[n].posY);
                        let radii = this.rad + otherSpheres1[n].rad;

                    //if distance between spheres is less than or equal to other sphere (touching), then reverse trajectory
                        if (d <= radii) {
                               this.deltaX *= -1;
                               this.deltaY *= -1;




                           }
                       }
                   }
               }
           }
