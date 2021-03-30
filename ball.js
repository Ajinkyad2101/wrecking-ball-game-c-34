class Ball {
    constructor(x,y) {
      var options = {
          'frictionAir':0.005,
          'density':1.0,
      }
      this.body = Bodies.rectangle(x,y,80,80,options);
      this.width = 80;
      this.height = 80;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      ellipseMode(RADIUS);
      fill("green");
      ellipse(0,0,this.width,this.height);
      pop()
    }
  };