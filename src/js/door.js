import {
    Actor,
    Vector,
    Label,
    Font,
    FontUnit,
    Color,
    CollisionType, SpriteSheet, Animation, range, Input
} from "excalibur";
import {Resources} from "./resources.js";
import {Player} from "./player.js";
import {Pipes} from "./pipes.js";

export class Door extends Actor {

    constructor() {
        super({width: 500, height: 500});

        const doorSheet = SpriteSheet.fromImageSource({
            image: Resources.Door,
            grid: {rows: 3, columns: 3, spriteWidth: 500, spriteHeight: 500},
        });

        console.log(this.width);
        console.log(this.height);
        const open = Animation.fromSpriteSheet(doorSheet, range(0, 4), 200);
        const closed = doorSheet.sprites[0]

        this.graphics.add("open", open);
        this.graphics.add("closed", closed);

        this.pos = new Vector(1050, 685)
        this.scale = new Vector(0.3, 0.3)
    }

    onInitialize(engine) {
        this.game = engine;
        this.graphics.use('closed')

        this.on('collisionstart', (event) => this.inFrontOfSomething(event))
        this.on('precollision', (event) => this.touchSomething(event))
        this.on('collisionend', (event) => this.detachSomething(event))
    }


    inFrontOfSomething(event) {
        if (event.other instanceof Player) {
            this.game.currentScene.glint.graphics.use('thinking')
            this.game.currentScene.glint.scale = new Vector(0.35, 0.30);
            this.game.currentScene.glint.anchor = new Vector(0.5, 1.5);
            this.infoDoor = new Label({
                text: 'Hmmm... seems like you need a key for this',
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

    touchSomething(event) {
        // wanneer de speler iets aanraakt
        if (event.other instanceof Player) {
            if (this.game.currentScene.player.inventory.hasItem('keys')) {
                if (this.game.input.keyboard.isHeld(Input.Keys.E)) {
                    this.graphics.use('open')
                    this.game.clock.schedule(() => {
                        this.game.goToScene('gameover');
                    }, 1000)
                }
            }
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

}