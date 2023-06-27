import {Actor, Vector, CollisionType, Input} from "excalibur";
import { Resources } from "./resources.js";
import {Player} from "./player.js";

export class Box extends Actor {

    constructor(xpos, ypos) {
        super({width: Resources.Box1.width, height: Resources.Box1.height});

        this.xpos = xpos
        this.ypos = ypos

        this.sprite = Resources.Box1.toSprite()
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true

        this.scale = new Vector(0.2, 0.2)
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine

        this.on('precollision', (event) => this.dragBox(event))

        this.graphics.use(this.sprite)
        this.pos = new Vector(this.xpos, this.ypos)
    }

    dragBox(event) {
        if (event.other instanceof Player) {
            if ((this.game.input.keyboard.isHeld(Input.Keys.E))) {
                this.actions.follow(this.game.currentScene.player, 100)
            } else {
                this.actions.clearActions()
            }
        }

    }

}