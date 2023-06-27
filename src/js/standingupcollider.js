import {Actor, Engine, Vector, Sprite, Color, Label, Font, FontUnit} from "excalibur"
import {Pipes} from "./pipes.js"

export class StandingupCollider extends Actor {

    constructor() {
        super({width: 500, height: 750})
    }

    onInitialize(engine) {
        this.game = engine;

        this.on('precollision', (event) => this.hitSomething(event))
        this.on('collisionend', (event) => this.loseSomething(event))
    }

    hitSomething(event) {
        if (this.parent.currentGraphic.includes('crouch')) {
            if (event.other instanceof Pipes) {
                if (event.other.lowhanging === true) {
                    this.parent.canStand = false;
                }
            }
        }
    }

    loseSomething(event) {
        if (this.parent.currentGraphic.includes('crouch')) {
            if (event.other instanceof Pipes) {
                if (event.other.lowhanging === true){
                    this.parent.canStand = true;
                }
            }
        }
    }
}