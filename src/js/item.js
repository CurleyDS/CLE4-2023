import { Actor, SpriteSheet, Vector, Input, Animation, range } from "excalibur";
import { Resources } from "./resources.js";

export class Item extends Actor {
    name
    imageItem
    rows
    columns
    width
    height

    constructor(name, amount=1, imageItem, rows, columns, width, height) {
        super({width: 300, height: imageItem.height});

        this.name = name
        this.amount = amount
        this.imageItem = imageItem

        this.pos = new Vector(320, 360)
        this.scale = new Vector( 0.25, 0.25)

        const sparkleSheet = SpriteSheet.fromImageSource({
            image: imageItem,
            grid: {rows: 1, columns: 2, spriteWidth: 250, spriteHeight: 281},
        });

        const sparkle = Animation.fromSpriteSheet(sparkleSheet, range(0, 1), 200);
        this.graphics.add("sparkle", sparkle);
    }

    onInitialize(engine) {
        this.graphics.use('sparkle')
    }
}