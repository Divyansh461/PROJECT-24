class Paper {
	constructor(x,y) {

		var options = {
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
			}

		
		this.body = Bodies.circle(x,y,15,options);
		this.radius = 15;
		World.add(world,this.body);

	}	
	display() {	

			
			fill(193,27,102);
			ellipseMode(CENTER);
			ellipse(this.body.position.x,this.body.position.y,30,30);
			
			
	}

}