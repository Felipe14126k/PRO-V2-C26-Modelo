class PlayerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    this.archerAngle = archerAngle;
    this.velocity = p5.Vector.fromAngle(archerAngle);
    World.add(world, this.body);
   }

  //  remove(index) {
  //   this.isRemoved = false;
  //   Matter.World.remove(world, this.body);
  //   delete playerArrows[index];
  // } 

    remove(index) {
     this.isRemoved = true;
     Matter.World.remove(world, this.body);
     delete playerArrows[index];
   } 

  //  remove(index) {
  //   this.isRemoved = true;
  //   Matter.World.remove(this.body);
  //   delete playerArrows[index];
  // } 

  //  remove(index) {
  //   this.isRemoved = true;
  //   Matter.World.remove(world, this.body);
  //   delete playerArrows[];
  // } 

  shoot(archerAngle) {
    this.velocity = p5.Vector.fromAngle(archerAngle + PI / 2);
    this.velocity.mult(55);

    Matter.Body.setVelocity(this.body, {
      x: this.velocity.x,
      y: this.velocity.y
    });

    Matter.Body.setStatic(this.body, false);
  }

  display() {
    var tmpAngle;
    if (this.body.velocity.y === 0) {
      tmpAngle = this.archerAngle + PI / 2;
    } else {
      tmpAngle = Math.atan(this.body.velocity.y / this.body.velocity.x);
    }

    Matter.Body.setAngle(this.body, tmpAngle);

    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
