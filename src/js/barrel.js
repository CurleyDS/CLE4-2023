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

        this.on('collisionstart', (event) => this.inFrontOfSomething(event))
        this.on('collisionend', (event) => this.detachSomething(event))
        console.log(this)
    }

    inFrontOfSomething(event) {
        if (event.other instanceof Player) {
            this.game.currentScene.glint.graphics.use('thinking')
            this.game.currentScene.glint.scale = new Vector(0.35, 0.30);
            this.game.currentScene.glint.anchor = new Vector(0.5, 1.5);
            this.infoDoor = new Label({
                text: `Look! You can hide [E] here`,
                font: new Font({
                    unit: FontUnit.Px,
                    family: 'Arial',
                    size: 15,
                    color: Color.White,
                }), pos: new Vector(this.game.currentScene.glint.pos.x - 275, this.game.currentScene.glint.pos.y - 50)
            })

            this.game.currentScene.add(this.infoDoor)
        }
    }

    detachSomething(event) {
        if (event.other instanceof Player) {
            this.game.currentScene.remove(this.infoDoor);
            this.game.currentScene.glint.graphics.use('idle')
            this.game.currentScene.glint.scale = new Vector(0.2, 0.2);
            this.game.currentScene.glint.anchor = new Vector(0.5, 2)
        }
    }

    onPreUpdate(engine) {
        if (this.infoDoor) {
            if (this.game.currentScene.player.isHiding) {
                this.infoDoor.text = `When he's gone, jump [spacebar] to get out!`
            } else {
                this.infoDoor.text = `Look! You can hide [E] here.`
            }
        }
    }
}

