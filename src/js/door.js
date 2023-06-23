import {
    Actor,
    Vector,
    CollisionType, SpriteSheet, Animation, range, Input
} from "excalibur";
import { Resources } from "./resources.js";
import {Player} from "./player.js";

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

        this.on('precollision', (event) => this.touchSomething(event))
    }

    touchSomething(event) {
        // wanneer de speler iets aanraakt
        if (event.other instanceof Player) {
            if(this.game.currentScene.player.inventory.hasItem('keys')){
                if (this.game.input.keyboard.isHeld(Input.Keys.E)){
                    this.graphics.use('open')
                    this.game.clock.schedule(()=>{
                        this.game.goToScene('gameOver');
                    },1000)
                }
            }
        }
    }

}