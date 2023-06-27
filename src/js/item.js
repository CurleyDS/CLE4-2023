import { Actor, SpriteSheet, Vector, Input, Animation, range } from "excalibur";
import { Resources } from "./resources.js";

export class Item extends Actor {
    name
    imageItem
    rows
    columns
    width
    height
    x
    y

    constructor(name, amount=1, imageItem, rows, columns, width, height, x, y) {
        super({width: 300, height: imageItem.height});

        this.name = name
        this.amount = amount
        this.imageItem = imageItem
        this.rows = rows
        this.columns = columns
        this.width = width
        this.height = height
        this.x = x
        this.y = y

        this.pos = new Vector(x,y)
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