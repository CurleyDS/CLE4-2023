import {Actor, Engine, Vector, Sprite, Color, Label, Font, FontUnit} from "excalibur"
import {Pipes} from "./pipes.js"
import {Player} from "./player.js";

export class StandingupCollider extends Actor {
    sprite

    constructor() {
        super({width: 500, height: 750})
    }

    onInitialize(engine) {
        this.game = engine;
        this.on('precollision', (event) => this.hitSomething(event))
        this.on('collisionend', (event) => this.loseSomething(event))
        this.on('collisionstart', (event) => this.inFrontOfSomething(event))
    }


    inFrontOfSomething(event) {
        if (event.other instanceof Pipes) {
            this.game.currentScene.glint.graphics.use('thinking')
            this.game.currentScene.glint.scale = new Vector(0.35, 0.30);
            this.game.currentScene.glint.anchor = new Vector(0.5, 1.5);
            this.infoCrouch = new Label({
                text: 'looks like a narrow space. Try crouching.',
                font: new Font({
                    unit: FontUnit.Px,
                    family: 'Arial',
                    size: 15,
                    color: Color.White,
                }), pos: new Vector(this.game.currentScene.glint.pos.x + 30, this.game.currentScene.glint.pos.y -75)
            })

            this.game.currentScene.add(this.infoCrouch)
        }
    }

    loseSomething(event) {
        if (event.other instanceof Pipes){
            this.game.currentScene.remove(this.infoCrouch);
            this.game.currentScene.glint.graphics.use('idle')
            this.game.currentScene.glint.scale = new Vector(0.2, 0.2);
            this.game.currentScene.glint.anchor = new Vector(0.5,2)
        }
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