import { Actor, Vector, Label, Font, FontUnit, Color } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./player.js";

export class Barrel extends Actor {

    constructor(x, y) {
        super({width: Resources.Barrel1.width, height: Resources.Barrel1.height})

        this.sprite = Resources.Barrel1.toSprite()

        this.pos = new Vector(x, y)
        this.scale = new Vector(0.2, 0.2)
    }

    onInitialize(engine) {
        this.game = engine
        this.graphics.use(this.sprite)
    }
}

