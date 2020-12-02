class Bob{
    constructor(x, y, radius){
      var options ={
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
      }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      World.add(world, this.body);

    }

    display(){
       var posX = this.body.position.x;
       var posY = this.body.position.y;
       ellipseMode(CENTER);
     }

}

