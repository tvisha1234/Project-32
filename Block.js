class Block {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, 30, options);
      this.width = 20;
      this.height = 30;
      this.image = loadImage("block.jpg");
      this.Visibility = 255;
      
      World.add(world, this.body);
    }

    display(){  
      if(this.body.speed < 3) {      
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(2);
        fill("white")
        stroke("green");
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      else {
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 10;
        tint(255, this.Visibility);
        image(this.image, this.body.position.x, this.body.position.y,20,30);
        pop();
      }
    }
    score() {
      if(this.Visibility < 0 && this.Visibility >- 105) {
        score++;
      }
    }
  };