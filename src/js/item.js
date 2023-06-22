import { Actor, SpriteSheet, Vector, Input, Animation, range } from "excalibur";
import { Resources } from "./resources.js";

export class Item extends Actor {
    name

    constructor(name, amount=1) {
        super({width: 200, height: 200});

        this.name = name
        this.amount = amount

        this.pos = new Vector(320, 360)
        this.scale = new Vector( 0.25, 0.25)

        const sparkleSheet = SpriteSheet.fromImageSource({
            image: Resources.Keys,
            grid: {rows: 1, columns: 2, spriteWidth: 250, spriteHeight: 281},
        });

        const sparkle = Animation.fromSpriteSheet(sparkleSheet, range(0, 1), 200);
        this.graphics.add("sparkle", sparkle);
    }

    onInitialize(engine) {
        this.sprite = Resources.Keys.toSprite()
        this.graphics.use('sparkle')
    }
}