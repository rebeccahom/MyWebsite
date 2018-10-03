/*tslint:disable*/
export default function background(p) {
  let triangles = [];

  class FloatyTriangle {
    constructor() {
      this.x1 = p.random(0, p.windowWidth);
      this.y1 = p.random(0, p.windowHeight);
  
      this.x2 = this.x1 + p.random(-50, 50);
      this.y2 = this.y1 + p.random(-50, 50);
  
      this.x3 = this.x2 + p.random(-50, 50);
      this.y3 = this.y2 + p.random(-50, 50);
  
      this.r = p.random(0, 150);
      this.g = p.random(0, 150);
      this.b = p.random(0, 150);
  
      this.floatX = p.random(-0.5, 0.5);
      this.floatY = p.random(-0.5, 0.5);
    }
  
    display() {
      p.noStroke();
      p.fill(this.r, this.g, this.b);
      p.triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
      this.x1 += this.floatX;
      this.y1 += this.floatY;
  
      this.x2 += this.floatX;
      this.y2 += this.floatY;
  
      this.x3 += this.floatX;
      this.y3 += this.floatY;
    }
  
    isOffScreen() {
      if (this.x1 <= 0 || this.x2 <= 0 || this.x3 <= 0 || this.x1 >= p.width || this.x2 >= p.width || this.x3 >= p.width
        || this.y1 <= 0 || this.y2 <= 0 || this.y3 <= 0 || this.y1 >= p.height || this.y2 >= p.height || this.y3 >= p.height) {
          return true;
        }
      
      return false;
    }
  }

  p.setup = function() {
    //Initialize the canvas
    p.createCanvas(p.windowWidth, p.windowHeight);

    for (var i = 0; i < 250; i++) {
      var tempTriangle = new FloatyTriangle();
      triangles.push(tempTriangle);
    }
  }

  p.draw = function() {
    p.background(255);
    
    for (var i = 0; i < triangles.length; i++) {
      triangles[i].display();

      if (triangles[i].isOffScreen()) {
        triangles.splice(i, 1);
        
        var tempTriangle = new FloatyTriangle();
        triangles.push(tempTriangle);
      }
    }

    p.background(255, 230);
  }
}