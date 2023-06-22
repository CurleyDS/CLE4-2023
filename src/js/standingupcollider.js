import {Actor, Engine, Vector, Sprite, Color} from "excalibur"
import {Resources} from './resources'
import {Pipes} from "./pipes.js"

export class StandingupCollider extends Actor {
    sprite

    constructor() {
        super({width: 500, height: 750})
    }

    onInitialize(engine) {
        this.sprite = Resources.View.toSprite()
        this.sprite.width = 500
        this.sprite.height = 750
        this.sprite.tint = new Color(255, 255, 0)

        this.on('precollision', (event) => this.hitSomething(event))
        this.on('collisionend', (event) => this.loseSomething(event))
        this.graphics.use(this.sprite)
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

    // onPreUpdate(engine, _delta) {
    //     console.log(this.parent.canStand);
    //     if (this.parent.canStand === false) {
    //         if ((this.parent.currentGraphic.includes('walk') || this.parent.currentGraphic.includes('idle')) && this.parent.currentGraphic.includes('left')) {
    //             this.parent.currentGraphic = 'crouchIdleleft';
    //             console.log('crouching')
    //         }
    //         if ((this.parent.currentGraphic.includes('walk') || this.parent.currentGraphic.includes('idle')) && this.parent.currentGraphic.includes('right')) {
    //             this.parent.currentGraphic = 'crouchIdleright';
    //             console.log('crouching')
    //         }
    //     }
    // }


}