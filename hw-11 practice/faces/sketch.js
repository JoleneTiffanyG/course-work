
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

  background(orb_color);
  frameRate(20);

  for ( i = 0; i < orb.size; i++){
    let beginX = random(0, 600);
    let beginY = random(-600, 0);
    orb[i].frame(beginX, beginY);
  }
}

class Orbs{

  constructor(){

    this.orb_color = 'rgb(200, 255, 160)';
    this.x = random (0, 600);
    this.y = random (-600, 0);
    this.size_w = random(5, 20);
    this.size_h = random(5, 20);
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
  show(){
    fill(this.orb_color);
    ellipse(this.x, this.y, this.size_w, this.size_h);
  }
}
