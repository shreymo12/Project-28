class Mango{
    constuctor(x,y){
        var options={
            isStatic: true,
            restitution:0,
            friction: 1
        }
       
       
        this.image=loadImage("image/mango.png");
        this.body=Bodies.circle(this.x,this,y,40,options);
        this.x=x;
        this.y=y;
        this.r=40;
        World . add(world,this.body);

    }
    display(){
        var mangoPos=this.body.position;
        push ();
        translate(mangoPos.x,mangoPos.y);
        rotate (this.body.angle)
        imageMode (CENTER);
            this.image(this.image,0,0,40,40);
            pop ();
    }


}

//40