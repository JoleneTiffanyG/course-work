
//define spheres array
let spheres1 = [];
let spheres2 = [];
//define number of spheres to be generated
const numOfSpheres2 = 10;
const numOfSpheres1 = 20;

function setup() {

    createCanvas(600, 600);

  //define original positions of spheres
    let start_x2 = 60;
    let start_y2 = 60;
    for (let e = 0; e < numOfSpheres2; e++) {
        spheres2.push(new Sphere2(start_x2, start_y2));

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

        start_x2 += 100;
        if (start_x2 > width) {
            start_x2 = 60;
            start_y2 += 100;

          }

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

    for (let e = 0; e < spheres2.length; e++) {

            // define sphere methods
            spheres2[e].sphereCheck(spheres2, e);
            spheres2[e].edgeCheck();
            spheres2[e].move();
            spheres2[e].display();
        }
    }

//define Sphere2 class

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

    class Sphere2 {
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

              fill(this.color);
              translate(this.posX, this.posY);
              ellipse(0, 0, this.size);

              pop();

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

               this.posX += this.deltaX;
               this.posY += this.deltaY;

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
