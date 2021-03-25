class Ball{
    constructor(x,y,width,height){
        var options={
            density:1,
            frictionAir:0.005            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("dragon1.gif");
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}