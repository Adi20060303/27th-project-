class Hammer {
    constructor(x,y){
        var option={
            'restitution' : 0.8,
            'friction': 0.3,
            'density': 0.1
        }
        this.body=Bodies.rectangle(x,y,20,80,option);
        World.add(world,this.body);
        
        this.width=80;
        this.height=20;
    }
    
    display()
    {
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();     
    
    
    }
}















