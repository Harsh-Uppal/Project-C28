// JavaScript source code
class Tree {
    constructor(x, y, scale) {
        this.scale = scale;
        this.body = Bodies.rectangle(x, y, scale * 100, scale * 100, { isStatic: true });
        this.image = loadImage("tree.png");
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        image(this.image, 0, 0, this.scale * (100 / 2), this.scale * (100 / 1.75));
        pop();
    }
}