import { Actor, SpriteSheet, Vector, Input, Animation, range } from "excalibur";
import { Resources } from "./resources.js";
import { Inventory } from "./inventory.js"
import { Item } from "./item.js"

export class Player extends Actor {
    inventory

    constructor() {
        super({width: 500, height: 750});
        // de player heeft zelf de hele spritesheet omdat er maar 1 player is
        this.scale = new Vector(0.15, 0.15)
        const walkSheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: {rows: 8, columns: 3, spriteWidth: 500, spriteHeight: 750},
        });
        // test of alle sprites er zijn
        console.log(walkSheet.sprites);

        const walkRight = Animation.fromSpriteSheet(walkSheet, range(3, 4), 200);
        const walkLeft = Animation.fromSpriteSheet(walkSheet, range(15, 16), 200);
        const idleRight = Animation.fromSpriteSheet(walkSheet, range(0, 2), 150);
        const idleLeft = Animation.fromSpriteSheet(walkSheet, range(12, 14), 150);
        const crouchRight = Animation.fromSpriteSheet(walkSheet, range(6, 9), 150);
        const crouchLeft = Animation.fromSpriteSheet(walkSheet, range(18, 21), 150);


        this.graphics.add("walkright", walkRight);
        this.graphics.add("walkleft", walkLeft);
        this.graphics.add("crouchright", crouchRight);
        this.graphics.add("crouchleft", crouchLeft);
        this.graphics.add("idleright", idleRight);
        this.graphics.add("idleleft", idleLeft);


    }

    onInitialize(engine) {
        this.inventory = new Inventory();
        this.pos = new Vector(35, 545);
        this.vel = new Vector(0, 0);

        this.on('collisionstart', (event) => this.hitSomething(event))
        this.graphics.use('idleright');
    }

    hitSomething(event) {
        if (event.other instanceof Item) {
            // pak item op
            this.inventory.addToInventory(event.other)
            // zorg ervoor dat item verdwijnt na oppakken
            event.other.kill()
        }
    }
    
    onPreUpdate(engine) {
        let xspeed = 0

        if ((engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) && engine.input.keyboard.isHeld(Input.Keys.ControlLeft)) {
            xspeed = 100
            this.graphics.use('crouchright')
        } else if ((engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) && engine.input.keyboard.isHeld(Input.Keys.ControlLeft)) {
            xspeed = -100
            this.graphics.use('crouchleft')
        } else if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
            xspeed = -300
            this.graphics.use('walkleft')

        } else if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
            xspeed = 300
            this.graphics.use('walkright')

        } else if (engine.input.keyboard.wasReleased(Input.Keys.A) || engine.input.keyboard.wasReleased(Input.Keys.Left)) {
            this.graphics.use('idleleft');
        } else if (engine.input.keyboard.wasReleased(Input.Keys.D) || engine.input.keyboard.wasReleased(Input.Keys.Right)) {
            this.graphics.use('idleright');
        }

        this.vel = new Vector(xspeed, 0)

    }
}