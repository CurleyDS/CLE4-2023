import {Actor, Vector, Label, Font, FontUnit, Color, CollisionType} from "excalibur";
import { Resources } from "./resources.js";

export class Box extends Actor {

    constructor(xpos, ypos) {
        super({width: Resources.Box1.width, height: Resources.Box1.height});

        this.xpos = xpos
        this.ypos = ypos

        this.sprite = Resources.Box1.toSprite()
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);

        this.graphics.use(this.sprite)
        this.pos = new Vector(this.xpos, this.ypos)
    }

}