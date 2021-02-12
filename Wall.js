class Wall {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };

    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x, y, 5, 300, options);
    World.add(world, this.body);
  }
  display() {
    stroke("green");
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, 5, 300);
  }
}
