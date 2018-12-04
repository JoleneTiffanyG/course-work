let myFirstSphere ;
let mySecondSphere ;

function setup() {
    createCanvas(800, 600);
    myFirstSphere = new firstSphere(100,100,100) ;
    mySecondSphere = new secondSphere(50,50,100) ;


}

function draw() {
  background('black');
    noLoop()
    myFirstSphere.display();
    mySecondSphere.display();
}



class Sphere {
   constructor(x,y,radius,color) {
        this.x = x ;
        this.y = y ;
        this.radius = radius;
        this.color = color ;
        this.stroke = 2.0 ;



    }

    display() {
        push() ;
            fill(this.color) ;
            strokeWeight(this.stroke)
            ellipse(this.x,this.y, this.radius,this.radius) ;
        pop() ;
    }

}





class firstSphere extends Sphere {
    constructor(x,y,size) {
        const radius = size/2
        super(x,y,radius,"purple") ;
    }
}

class secondSphere extends Sphere {
    constructor(x,y,size) {
        const radius = (size/2) ;
        super(x,y,radius,"green") ;
        this.stroke = 1.0 ;
    }
}
