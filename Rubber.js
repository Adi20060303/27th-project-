class Rubber{
    constructor(x,y,r){
        var option={
            'restitution' : 1,
            'friction': 0.3,
            'density': 0.1
        }
        this.body=Bodies.rectangle(x,y,(this.r-20)/2,option);
        World.add(world,this.body);
        
        this.r=(this.r-20)/2;
        
    }
    
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0,0,(this.r-20)/2);
        pop();     
    
    
    }








}