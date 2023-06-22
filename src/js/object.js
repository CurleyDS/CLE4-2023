import {
    Actor,
    SpriteSheet,
    Vector,
    Input,
    Animation,
    range,
    Shape,
    CollisionType,
    Collider,
    EdgeCollider,
    CompositeCollider
} from "excalibur";
import { Resources } from "./resources.js";

export class Barrel extends Actor {

    constructor() {
        super({width: Resources.Barrel1.width, height: Resources.Barrel1.height});

        this.body.collisionType = CollisionType.Active

        this.scale = new Vector(0.25, 0.25)
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);

        this.sprite = Resources.Barrel1.toSprite()
        this.graphics.use(this.sprite)

        this.pos = new Vector(700, 400)
    }

}