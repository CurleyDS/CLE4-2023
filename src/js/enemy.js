import {Actor, SpriteSheet, Vector, Input, Animation, range, CollisionType} from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./player.js";

export class Enemy extends Actor {

    constructor() {
        super({width: 500, height: 750});
        // de player heeft zelf de hele spritesheet omdat er maar 1 player is
        this.body.collisionType = CollisionType.Active
        this.scale = new Vector(0.17, 0.17)
        const walkSheet = SpriteSheet.fromImageSource({
            image: Resources.Enemy,
            grid: {rows: 6, columns: 3, spriteWidth: 500, spriteHeight: 750},
        });

        const walkRight = Animation.fromSpriteSheet(walkSheet, range(2, 4), 200);
        const angryRight = Animation.fromSpriteSheet(walkSheet, range(5, 7), 150);
        const walkLeft = Animation.fromSpriteSheet(walkSheet, range(10, 12), 200);
        const angryLeft = Animation.fromSpriteSheet(walkSheet, range(13, 15), 150);
        const idleRight = Animation.fromSpriteSheet(walkSheet, range(0, 1), 400);
        const idleLeft = Animation.fromSpriteSheet(walkSheet, range(8, 9), 400);

        // const jumpRight = walkSheet.sprites[10]
        // const jumpLeft = walkSheet.sprites[23]


        this.graphics.add("walkright", walkRight);
        this.graphics.add("walkleft", walkLeft);
        this.graphics.add("angryright", angryRight);
        this.graphics.add("angryleft", angryLeft);
        this.graphics.add("idleright", idleRight);
        this.graphics.add("idleleft", idleLeft);


    }

    onInitialize(engine) {
        this.vel = new Vector(0, 0);
        this.graphics.use("idleright");
        this.pos = new Vector(200, 300);
    }


    onPreUpdate(engine) {
        let xspeed = 0
        if (engine.input.keyboard.isHeld(Input.Keys.Key8)) {
            this.graphics.use('walkright')
            xspeed = 100
        }
        if (engine.input.keyboard.isHeld(Input.Keys.Key7)) {
            this.graphics.use('walkleft')
            xspeed = -100
        }
        if (engine.input.keyboard.isHeld(Input.Keys.Key0)) {
            this.graphics.use('angryright')
            xspeed = 200
        }

        if (engine.input.keyboard.isHeld(Input.Keys.Key9)) {
            this.graphics.use('angryleft')
            xspeed = -200
        }

        if (engine.input.keyboard.isHeld(Input.Keys.Backspace)) {
            this.graphics.use('idleleft')
            xspeed = 0;
        }

        this.vel = new Vector(xspeed, 0)
    }
}