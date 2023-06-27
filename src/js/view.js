import { Actor, Engine, Vector, Sprite, Color } from "excalibur"
import { Resources } from './resources'
import { Player } from "./player"

export class View extends Actor {
    sprite
    constructor() {
        super({width: 1500, height: 750})
    }

    onInitialize(engine) {
        this.game = engine;
        this.sprite = Resources.View.toSprite()
        this.sprite.width = 1500
        this.sprite.height = 750
        this.sprite.tint = new Color(255,255,0)
        
        this.on('collisionstart', (event) => this.noticeSomething(event))
        this.on('collisionend', (event) => this.loseSomething(event))
        this.graphics.use(this.sprite)
    }

    noticeSomething(event) {
        if (event.other instanceof Player) {
            if (!event.other.isHiding) {
                this.parent.aggro = true
                this.game.currentScene.glint.shocked()
            }
        }
    }

    loseSomething(event) {
        if (event.other instanceof Player) {
            this.parent.aggro = false
            this.game.currentScene.glint.idle()
        }
    }

    onPreUpdate(engine) {
        if (this.parent.direction) {
            this.pos = new Vector(1000, 0)
            this.sprite.flipHorizontal = true
        } else {
            this.pos = new Vector(-1000, 0)
            this.sprite.flipHorizontal = false
        }
    }
}