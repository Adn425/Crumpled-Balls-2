class Paper {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.r = 30;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        
        this.image = loadImage("sprites/CP-2-master/paper.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image, 100, 680, 20, 20);
        pop();
    }
    
}