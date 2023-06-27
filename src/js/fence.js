import { Actor, SpriteSheet, Vector, Input, Animation, CollisionType, range } from "excalibur";
import { Resources } from "./resources.js";


export class Fence extends Actor {

    x
    y

    constructor(x = 0, y = 0) {
        super({width: 500, height: 750});
        this.sprite = Resources.MetalFence.toSprite()
        this.graphics.use(this.sprite);

        this.pos = new Vector(x, y)
        this.scale = new Vector(0.3, 0.3)
        this.body.collisionType = CollisionType.Fixed
    }
}

