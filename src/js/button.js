import {Actor, SpriteSheet, Vector, Input, Animation, range} from "excalibur";
import {Resources} from "./resources.js";
import {Player} from "./player.js";
import {Enemy} from "./enemy.js";
import {Box} from "./Box.js";

export class Button extends Actor {
    x
    y

    constructor(x, y) {
        super({width: 250, height: 250});

        this.x = x
        this.y = y

        this.pos = new Vector(this.x, this.y)
        this.scale = new Vector(0.25, 0.25)

        const buttonSheet = SpriteSheet.fromImageSource({
            image: Resources.Button,
            grid: {rows: 3, columns: 3, spriteWidth: 250, spriteHeight: 250},
        });

        const notPushed = buttonSheet.sprites[0]
        const pushed = buttonSheet.sprites[1]

        this.graphics.add("notpushed", notPushed);
        this.graphics.add("pushed", pushed);
    }

    onInitialize(engine) {
        this.graphics.use('notpushed')

        this.on('collisionstart', (event) => this.pushed(event))
        this.on('collisionend', (event) => this.notPushed(event))
    }

    pushed(event) {
        if (event.other instanceof Player || event.other instanceof Enemy || event.other instanceof Box) {
            this.graphics.use('pushed')
        }
    }

    notPushed(event) {
        if (event.other instanceof Player || event.other instanceof Enemy || event.other instanceof Box) {
            this.graphics.use('notpushed')
        }
    }
}


