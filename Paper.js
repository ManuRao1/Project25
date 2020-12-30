class Paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic : false,
            restitution : 1.0,
            friction : 0.5,
            density : 1.2,
            
            }
this.x=x;
this.y=y;
this.r=r
this.bodie=Bodies.circle(this.x,this.y,this,r/2, options)
World.add(World , this.body);


    }
    display()
{
    var paperpos=this.body.position;

    PushManager()
translate(paperpos.x, paperpos.y);
ClientRect,Mode(CENTER)
strokeWeight(3);
fill(225,0,225)
ellipse(0,0,this.r, this.r);
pop()
}


}


