class Iron{
 constructer(x,y)
{
	var options={
		resititution:0.8,
		friction:3,
		density:30
    }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
		this.x=x;
		this.y=y;
        this.width = 300;
        this.height = 100;
		World.add(world, this.body);

	}
	display()
	{
        
        strokeWeight(3);
        stroke('white')
        fill('black')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        
	}














}