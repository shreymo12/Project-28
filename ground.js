class Ground{
    constructor(x,y,whidth,height){
        var options ={
            isStatic:true

        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body =Body.rectangle(x,y,width,height,options);
        World . add (world,this.body);
    }
    display(){
        var groundPos=this.body
        push ()
        translate(groundPos.x,groundPos.y);
        rectMode(CENTER);
        fill (gray);
        rect(0,0,this.width,this.height);
        pop ()


    }
}