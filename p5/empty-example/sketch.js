/*tslint:disable*/
var triangles = [];
var triangle1;

function setup() {
  //Initialize the canvas
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 250; i++) {
    var tempTriangle = new floatyTriangle();
    triangles.push(tempTriangle);
  }
}

function draw() {
  background(255);
  
  for (var i = 0; i < triangles.length; i++) {
    triangles[i].display();

    if (triangles[i].isOffScreen()) {
      triangles.splice(i, 1);
      
      var tempTriangle = new floatyTriangle();
      triangles.push(tempTriangle);
    }
  }

  background(255, 230);
}

class floatyTriangle {
  constructor() {
    this.x1 = random(0, windowWidth);
    this.y1 = random(0, windowHeight);

    this.x2 = this.x1 + random(-50, 50);
    this.y2 = this.y1 + random(-50, 50);

    this.x3 = this.x2 + random(-50, 50);
    this.y3 = this.y2 + random(-50, 50);

    this.r = random(0, 150);
    this.g = random(0, 150);
    this.b = random(0, 150);

    this.floatX = random(-5, 5);
    this.floatY = random(-5, 5);
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    this.x1 += this.floatX;
    this.y1 += this.floatY;

    this.x2 += this.floatX;
    this.y2 += this.floatY;

    this.x3 += this.floatX;
    this.y3 += this.floatY;
  }

  isOffScreen() {
    if (this.x1 <= 0 || this.x2 <= 0 || this.x3 <= 0 || this.x1 >= width || this.x2 >= width || this.x3 >= width
      || this.y1 <= 0 || this.y2 <= 0 || this.y3 <= 0 || this.y1 >= height || this.y2 >= height || this.y3 >= height) {
        return true;
      }
    
    return false;
  }
}