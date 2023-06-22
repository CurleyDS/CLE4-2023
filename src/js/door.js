import {
    Actor,
    Vector,
    CollisionType, SpriteSheet, Animation, range
} from "excalibur";
import { Resources } from "./resources.js";

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

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.graphics.use('closed')
    }

}