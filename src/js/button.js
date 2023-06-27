import {Actor, SpriteSheet, Vector, Input, Animation, range, CollisionType} from "excalibur";
import {Resources} from "./resources.js";
import {Player} from "./player.js";
import {Box} from "./box.js";
import {Enemy} from "./enemy.js";

export class Button extends Actor {
    x
    y
    buttonPushed

    constructor(x, y) {
        super({width: 250, height: 250});

        this.x = x
        this.y = y

        this.pos = new Vector(this.x, this.y)
        this.scale = new Vector(0.25, 0.25)

        this.buttonPushed = false;

        const buttonSheet = SpriteSheet.fromImageSource({
            image: Resources.Button,
            grid: {rows: 3, columns: 3, spriteWidth: 250, spriteHeight: 250},
        });

        const notPushed = buttonSheet.sprites[0]
        const pushed = buttonSheet.sprites[1]

        this.body.collisionType = CollisionType.Passive

        this.graphics.add("notpushed", notPushed);
        this.graphics.add("pushed", pushed);
    }

    onPreUpdate(_engine, _delta) {
        super.onPreUpdate(_engine, _delta);
        if(this.buttonPushed){
            if (this.game.currentScene.elevator.pos.y >= 300) {
                console.log('platform stop')
                console.log(this.game.currentScene.elevator.pos.y )
                this.game.currentScene.elevator.vel.y = 0;
            } else {
                this.game.currentScene.elevator.vel.y = 100;
            }
        } else {
            if (this.game.currentScene.elevator.pos.y <= 50) {
                console.log('platform stop')
                console.log(this.game.currentScene.elevator.pos.y )
                this.game.currentScene.elevator.vel.y = 0;
            } else {
                this.game.currentScene.elevator.vel.y = -100;
            }
        }
    }

    onInitialize(engine) {
        this.game =engine;
        this.graphics.use('notpushed')

        this.on('collisionstart', (event) => this.pushed(event))
        this.on('collisionend', (event) => this.notPushed(event))
    }

    pushed(event) {
        if (event.other instanceof Box || event.other instanceof Player || event.other instanceof Enemy) {
            this.graphics.use('pushed')
                this.buttonPushed = true;

        }
    }

    notPushed(event) {
        if (event.other instanceof Box || event.other instanceof Player || event.other instanceof Enemy) {
            this.graphics.use('notpushed')
            this.buttonPushed = false;
        }
    }
}


