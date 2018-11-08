let orb = [];
let numb = 17;

function setup(){
  createCanvas (600, 600);

background('black');

  for (let i = 0; i < numb; i++) {
    orb.push ( new Orbs());
  }
}

function draw(){

  background(0);
  frameRate(20);

  for ( i = 0; i < orb.length; i++){
    let beginX = random(0, 600);
    let beginY = random(-600, 0);
    orb[i].frame(beginX, beginY);
  }
}

//create class "Orbs"
class Orbs{

  constructor(){

    this.orb_color = 'rgba(200, 255, 160, 1)';
    this.x = random (0, 600);
    this.y = random (-600, 0);
    this.size_w = random(10, 40);
    this.size_h = random(15, 50);
    this.mov_x = random(0, 600);
    this.mov_y = random(0, 600);

  }

  frame(){
    this.orb();
    this.again();
    this.show();
  }

//move the orbs
  orb(){
    this.x -= 0.1;
    this.y += random (1, 5);
  }


//continue movement
  again(){

    if( this.y > height ){
     this.y = random( -100, 0 );
     this.x = random( 0, 600 );
   }
  }

//display the orbs
  show() {
    fill(this.orb_color);
    ellipse(this.x, this.y, this.size_w, this.size_h);


  }
}
