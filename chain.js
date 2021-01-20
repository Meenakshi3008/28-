class Chain{
	constructor(bodyA, pointB)
	{
		var options = {
			bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        
		World.add(world, this.chain);
    }
    
    attach(body){
        this.chain.bodyA = body;
    }
    
    fly(){
        this.chain.bodyA = null;
    }

	display()
	{
		var pointA = this.chain.bodyA.position;
		var pointB = this.chain.pointB.position;

		strokeWeight(2);

		var Anchor1X = pointA.x
		var Anchor1Y = pointA.y

		var Anchor2X = pointB.x + this.offsetX
		var Anchor2Y = pointB.y + this.offsetY

		line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
	}

}
