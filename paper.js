class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		}
		this.x=x;
		this.y=y;
		this.r=70;
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		this.image = loadImage("paper.png");
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push();
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER);
			// set paper width and height to 80,80
			
        	image(this.image, 0,0, 80, 80);
			pop();
			
	}

}