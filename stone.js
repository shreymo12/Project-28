class Stone{
    constructor(x,y){
        var options ={
            isStatic:false,
            restitution: 0,
            friction:1,
            density:1.2

        }
       
        this.image=loadImage("image/stone.png");
        this.body=Bodies.circle(this.x,this,y,60,options);
        this.x=x;
        this.y=y;
        this.r=60;
        World .add(world, this.body);
        
    }
    display(){
        var stonepos = this.body.position;
        push ();
        translate(stonepos.x,stonespos.y);
       fill (255,0,255);
        imageMode (CENTER);
        this.image(this.image,0,0,60,60);
        pop ();
    }
}