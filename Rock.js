// JavaScript source code
class Rock {
    constructor(x, y, scale) {
        this.scale = scale;
        this.coords = { x: x, y: y };
        this.bodyScale = { w: scale, h: scale }
        this.body = Bodies.rectangle(x, y, this.bodyScale.w, this.bodyScale.h, {isStatic:true});
        this.image = loadImage("mango.png");
        this.addedToWorld = false;
    }

    display() {
        image(this.image, this.body.position.x, this.body.position.y, this.scale, this.scale);
    }

    checkForCollision(rock) {
        var This = { x: this.body.position.x, y: this.body.position.y, width: 20, height: 20 };
        var Rock = { x: rock.body.position.x, y: rock.body.position.y, width: 20, height: 20 };

        if (new Functions().isTouching(Rock , This,true)) {
            Matter.Body.setStatic(this.body, false);
            this.addToWorld();
        }
    }

    addToWorld() {
        if (this.addedToWorld)
            return;
        World.add(world, this.body);
        this.addedToWorld = true;
    }
}