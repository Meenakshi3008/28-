class Stone {
    constructor(x, y, width, height, angle){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("sprites/stone.png");
        this.width = width;
        this.height = height;
        
        World.add(world, this.body)
    }
  
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}