class Tree {
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
        this.image = loadImage("sprites/tree.png");
        
        World.add(world, this.body);
    }
    
	display() {
        var groundPos = this.body.position;
        
        push();
        translate(groundPos.x, groundPos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
		pop();
	}
}