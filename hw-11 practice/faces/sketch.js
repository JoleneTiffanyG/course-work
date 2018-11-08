
let snow = [];
let flakes = 50;
let bg_color;

function setup(){
  createCanvas (windowWidth, 600);

bg_color = color(1, 0, 34);

  for (let i = 0; i < flakes; i++) {
    snow.push ( new Blizzard());
  }
}

function draw(){

  background(bg_color);
  frameRate(24);

  for ( i = 0; i < snow.length; i++){
    let beginX = random(0, windowWidth);
    let beginY = random(-600, 0);
    snow[i].frame(beginX, beginY);
  }
}

class Blizzard{


  constructor(){

    this.snow_color = 'rgb(255, 255, 245)';
    this.melted_color = 'rgb(200, 200, 255)';
    this.x = random (0, windowWidth);
    this.y = random (-600, 0);
    this.size_w = random(2, 10);
    this.size_h = random(2, 10);
    this.melt_x = random(0, windowWidth);
    this.melt_y = random(575, 600);

  }

  frame(){
    this.snow();
    this.continue();
    this.melt();
    this.show();
  }

//snow movement
  snow(){
    this.x -= 0.1;
    this.y += random (1, 5);
  }


//continue to snow
  continue(){

    if( this.y > height ){
     this.y = random( -100, 0 );
     this.x = random( 0, windowWidth );
   }
  }

//show the snow
  show(){
    fill(this.snow_color);
    ellipse(this.x, this.y, this.size_w, this.size_h);
  }

//melt effect that didnt take
    melt(){
      if (this.y > height){
        this.y = this.melt_y;
        this.x = this.melt_x;
      }
    }
}
