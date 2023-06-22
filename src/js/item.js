import { Actor, SpriteSheet, Vector, Input, Animation, range } from "excalibur";
import { Resources } from "./resources.js";

export class Item extends Actor {
    name

    constructor(name, amount=1) {
        super({width: Resources.Keys.width, height: Resources.Keys.height});

        this.name = name
        this.amount = amount

        this.pos = new Vector(323, 360)
        this.scale = new Vector( 0.3, 0.3)

        const sparkleSheet = SpriteSheet.fromImageSource({
            image: Resources.Keys,
            grid: {rows: 1, columns: 2, spriteWidth: 250, spriteHeight: 250},
        });

        const sparkle = Animation.fromSpriteSheet(sparkleSheet, range(0, 1), 200);
        this.graphics.add("sparkle", sparkle);
    }

    onInitialize(engine) {
        this.sprite = Resources.Keys.toSprite()
        this.graphics.use('sparkle')


    }
}