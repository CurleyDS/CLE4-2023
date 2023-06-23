import { Actor, SpriteSheet, Vector, Input, Animation, CollisionType, range } from "excalibur";
import { Resources } from "./resources.js";
import { Platform } from "./platform.js";
import { View } from "./view.js";
import { Pipes } from "./pipes.js";

export class Enemy extends Actor {
    platformStart
    platformEnd
    platformPosition
    direction
    aggro
    x
    y

    constructor(x = 0, y = 0) {
        super({width: 500, height: 750});
        this.platformPosition = 0
        this.direction = true
        this.aggro = false

        this.x = x
        this.y = y

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

        this.graphics.add("walkright", walkRight);
        this.graphics.add("walkleft", walkLeft);
        this.graphics.add("angryright", angryRight);
        this.graphics.add("angryleft", angryLeft);
        this.graphics.add("idleright", idleRight);
        this.graphics.add("idleleft", idleLeft);
    }

    onInitialize(engine) {
        this.pos = new Vector(this.x, this.y)
        this.addChild(new View)
        
        this.on('collisionstart', (event) => this.hitSomething(event))
        this.on('precollision', (event) => this.touchSomething(event))
        this.graphics.use("idleright")
    }

    hitSomething(event) {
        if (event.other instanceof Pipes) {
            this.direction = !this.direction
        }
    }

    touchSomething(event) {
        if (event.other instanceof Platform) {
            this.platformStart = (event.other.pos.x - (event.other.width / 2))
            this.platformEnd = (event.other.pos.x + (event.other.width / 2))
        }
    }

    onPreUpdate(engine) {
        let xspeed = 0
        
        if (this.aggro) {
            if (this.direction) {
                this.graphics.use('angryright')
                xspeed = 400
            } else {
                this.graphics.use('angryleft')
                xspeed = -400
            }
        } else {
            if (this.direction) {
                this.graphics.use('walkright')
                xspeed = 100
            } else {
                this.graphics.use('walkleft')
                xspeed = -100
            }
        }

        if (this.pos.x < this.platformStart) {
            this.direction = true
        }
        if (this.pos.x > this.platformEnd) {
            this.direction = false
        }

        this.vel = new Vector(xspeed, 0)
    }
}