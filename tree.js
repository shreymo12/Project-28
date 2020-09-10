class Tree
{
    constructor(x,y)
    {
        
	
		
		
		this.image=loadImage("image/tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.Width, this.wallThickness, {isStatic:true})
		this.leftBody=Bodies.rectangle(0, this.y-this.Height/2, this.wallThickness, this.Height, {isStatic:false})
		this.rightBody=Bodies.rectangle(this.x+this.Width/2, this.y-this.Height/2, this.wallThickness, this.Height, {isStatic:false})
        this.x=x;
		this.y=y;
		this.Width=500;
		this.Height=600;
		this.wallThickness=10;
        

		World.add(world, this.bottomBody)
		World.add(world, this.leftBody)
		World.add(world, this.rightBody);

	}
	display()
	{
            var posBottom=this.bottomBody.position;
            push();
            translate(posBottom.x, posBottom.y+10)
			imageMode(CENTER);
            image(this.image, 0,-this.Height/2,this.Width, this.Height);
            pop();

			

			
	}

}

    
