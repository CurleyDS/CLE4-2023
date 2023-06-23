import {Actor, Engine, Vector, Sprite, Color} from "excalibur"
import {Pipes} from "./pipes.js"

export class StandingupCollider extends Actor {
    sprite

    constructor() {
        super({width: 500, height: 750})
    }

    onInitialize(engine) {
        this.on('precollision', (event) => this.hitSomething(event))
        this.on('collisionend', (event) => this.loseSomething(event))
    }

    loseSomething(event) {
        if (this.parent.currentGraphic.includes('crouch')) {
            if (event.other instanceof Pipes) {
                this.parent.canStand = true;
            }
        }
    }

    hitSomething(event) {
        if (this.parent.currentGraphic.includes('crouch')) {
            if (event.other instanceof Pipes) {
                this.parent.canStand = false;
            }
        }
    }
}