let walker;

class Walker {
  constructor() {
    this.tx = 0;
    this.ty = 500;
  }
  display() {
    stroke(0, 255, 0);
    fill(255, 0, 0);
    strokeWeight(4);
    circle(this.x, this.y, 20);
  }
  move() {
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    this.tx += 0.01;
    this.ty += 0.01;
  }
}

function setup() {
  createCanvas(500, 500);
  walker = new Walker();
}

function draw() {
  background(25);
  walker.move();
  walker.display();
}
