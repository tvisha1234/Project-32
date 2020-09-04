class Polygon {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.7
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("yellow")
      strokeWeight(2);
      stroke("green");
      circle(0, 0, this.radius);
      pop();
    }
  };