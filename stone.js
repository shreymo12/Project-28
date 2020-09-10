class Stone{
    constructor(x,y){
        var options ={
            isStatic:false,
            restitution: 0.3,
            friction:0.2,
            density:1.2

        }
        this.x=x;
        this.y=y;
        this.r=60;
        this.image=loadImage("image/stone.png");
        this.body=Bodies.circle(this.x,this,y,60,options);
        World .add(world, this.body);
    }
    display(){
        var stonepos = this.body.position;
        push ()
        translate(stonepos.x,stonespos,y);
        fill ()
        imageMode (CENTER);
        this.image(this.image,0,0,60,60);
        pop ();
    }
}