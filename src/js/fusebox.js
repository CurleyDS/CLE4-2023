import { Actor, Vector, Label, Font, FontUnit, Color, CollisionType, SpriteSheet, Animation, range, Input } from "excalibur";
import {Resources} from "./resources.js";
import {Player} from "./player.js";

export class Fusebox extends Actor {
    isRepaired

    constructor(x, y) {
        super({width: 500, height: 500});

        const fuseboxsheet = SpriteSheet.fromImageSource({
            image: Resources.Fusebox,
            grid: {rows: 1, columns: 4, spriteWidth: 500, spriteHeight: 500},
        });

        const broken = Animation.fromSpriteSheet(fuseboxsheet, range(1, 3), 200);
        const repaired = fuseboxsheet.sprites[0]

        this.graphics.add("broken", broken);
        this.graphics.add("repaired", repaired);

        this.pos = new Vector(x, y)
        this.scale = new Vector(0.25, 0.25)
        this.isRepaired = false;
    }

    onInitialize(engine) {
        this.game = engine;
        this.graphics.use('broken')

        this.on('collisionstart', (event) => this.inFrontOfSomething(event))
        this.on('precollision', (event) => this.touchSomething(event))
        this.on('collisionend', (event) => this.detachSomething(event))
    }

    onPreUpdate(_engine, _delta) {
        super.onPreUpdate(_engine, _delta);
        if(this.isRepaired) {
            if (this.game.currentScene.button.buttonPushed) {
                if (this.game.currentScene.fence.pos.y >= 650) {
                    console.log('!');
                    this.game.currentScene.fence.vel.y = 0;
                } else {
                    this.game.currentScene.fence.vel.y = 100;
                }
            } else {
                if (this.game.currentScene.fence.pos.y <= 420) {
                    this.game.currentScene.fence.vel.y = 0;
                } else {
                    this.game.currentScene.fence.vel.y = -100;
                }
            }
        }
    }


    inFrontOfSomething(event) {
        if (event.other instanceof Player) {
            console.log('hit the door');
            this.game.currentScene.glint.graphics.use('thinking')
            this.game.currentScene.glint.scale = new Vector(0.35, 0.30);
            this.game.currentScene.glint.anchor = new Vector(0.5, 1.5);
            this.infoFusebox = new Label({
                text: 'Looks like this needs to be fixed',
                font: new Font({
                    unit: FontUnit.Px,
                    family: 'Arial',
                    size: 15,
                    color: Color.White,
                }), pos: new Vector(this.game.currentScene.glint.pos.x - 275, this.game.currentScene.glint.pos.y - 50)
            })

            this.game.currentScene.add(this.infoFusebox)
        }
    }

    touchSomething(event) {
        // wanneer de speler iets aanraakt
        if (event.other instanceof Player) {
            if (this.game.currentScene.player.inventory.hasItem('tool')) {
                if (this.game.input.keyboard.isHeld(Input.Keys.E)) {
                    this.graphics.use('repaired')
                    this.isRepaired = true;
                    console.log(this.isRepaired);
                    console.log(this.game.currentScene.button.buttonPushed);
                }
            }
        }
    }

    detachSomething(event) {
        if (event.other instanceof Player) {
            this.game.currentScene.remove(this.infoFusebox);
            this.game.currentScene.glint.graphics.use('idle')
            this.game.currentScene.glint.scale = new Vector(0.2, 0.2);
            this.game.currentScene.glint.anchor = new Vector(0.5, 2)
        }
    }
}