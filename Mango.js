
// JavaScript source code
class Mango {
    constructor(x, y, scale) {
        this.scale = scale;
        this.bodyScale = { width: scale*2, height: scale*2 };
        this.body = Bodies.rectangle(x, y, this.bodyScale.width, this.bodyScale.height, { friction:1, density: 1.2, restitution: 0 });
        this.sling = Constraint.create({ pointA: { x: x, y: y }, bodyB: this.body, stiffness: .4, length: 5 });
        this.image = loadImage("stone.png");
        this.slingCoords = { x: x, y: y };

        World.add(world, this.body, { isStatic: false });
        World.add(world, this.sling);
    }

    display() {

        var pA = this.slingCoords;
        var pB = this.body.position;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        image(this.image, 0, 0, (this.scale*2), (this.scale*2));
        pop();

        if (this.sling.pointA == null)
            return;

        strokeWeight(5);
        line(pB.x + (this.scale * .7), pB.y + (this.scale * 1.2), pA.x + (this.scale * .7), pA.y + (this.scale * 1.2));
        strokeWeight(1);
    }

    fly() {
        this.sling.pointA = null;
    }
}