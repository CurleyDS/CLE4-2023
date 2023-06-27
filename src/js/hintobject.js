import { Actor, Engine, Vector, Color, Label, Font, FontUnit, TextAlign } from "excalibur"
import { Player } from "./player.js"

export class HintObject extends Actor {
    scaleNumber
    ogScale
    text
    x
    y
    hint
    textAlign

    constructor(x = 0, y = 0, text, textAlign = TextAlign.Left) {
        super({width: 500, height: 750})
        this.scaleNumber = 0.12
        this.scale = new Vector(this.scaleNumber, this.scaleNumber)
        this.ogScale = (1 / this.scaleNumber)
        this.text = text
        this.x = x
        this.y = y
        this.textAlign = textAlign
    }

    onInitialize(engine) {
        this.game = engine;
        this.pos = new Vector(this.x, this.y)

        this.hint = new Label({
            text: '',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Arial',
                size: (36 * this.ogScale),
                bold: true,
                color: Color.White,
                lineWidth: 10,
                strokeColor: Color.Black,
                textAlign: this.textAlign
            }),
            pos: new Vector(0, -((this.height * this.ogScale)))
        })

        this.on('precollision', (event) => this.touchSomething(event))
        this.on('collisionend', (event) => this.detachSomething(event))
    }
    
    touchSomething(event) {
        if (event.other instanceof Player) {
            this.game.currentScene.glint.thinking()
            if (!this.children.includes(this.hint, 0)) {
                this.hint.text = this.text
                this.addChild(this.hint)
            }
        }
    }

    detachSomething(event) {
        if (event.other instanceof Player) {
            this.game.currentScene.glint.idle()
            this.hint.text = ""
            this.removeChild(this.hint)
        }
    }
}