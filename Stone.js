class Stone {
    constructor(x,y){
        var option={
            'restitution' : 0.8,
            'friction': 0.3,
            'density': 12
        }
        this.body=Bodies.rectangle(x,y,60,60,option);
        World.add(world,this.body);
        
        this.width=60;
        this.height=60;
    }
    
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("black");
        rect(0,0,this.width,this.height);
        pop();     
    
    
    }


}