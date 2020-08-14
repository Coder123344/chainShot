class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.chain);
    }
    display() {
        strokeWeight(4)
        if (this.chain.bodyA) {
            var pointA=this.chain.bodyA.position;
            var pointB=this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
        
    }
    fly() {
        this.chain.bodyA=null;
    }
}
 