class Ground {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };

    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x, y, 800, 5, options);
    World.add(world, this.body);
  }
  display() {
    rectMode(CENTER);
    fill("yellow");
    rect(this.body.position.x, this.body.position.y, 800, 5);
  }
}
