class Boy {
    constructor(x, y, scale) {
        this.coords = { x: x, y: y };
        this.scale = scale;
        this.collider = Bodies.rectangle(x, y, 100, 150);
        World.add(world, this.collider);
        this.image = loadImage("boy.png");
    }

    display() {
        image(this.image, this.coords.x, this.coords.y, this.scale * 10, this.scale * 10);
    }
}