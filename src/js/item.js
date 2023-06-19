import { Actor, SpriteSheet, Vector, Input, Animation, range } from "excalibur";
import { Resources } from "./resources.js";

export class Item extends Actor {
    name

    constructor(name, amount=1) {
        super({width: Resources.Item.width, height: Resources.Item.height});

        this.name = name
        this.amount = amount
    }

    onInitialize(engine) {
        this.sprite = Resources.Item.toSprite()
        this.graphics.use(this.sprite)

        this.pos = new Vector(400, 575)
    }
}