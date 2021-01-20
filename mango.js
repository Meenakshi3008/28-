class Mango {
    constructor(x, y, diameter){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, diameter, options);
        this.image = loadImage("sprites/mango.png");
        this.scale = 0.5;
        this.diameter = diameter;
        
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