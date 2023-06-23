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

    xpos
    ypos

    constructor(xpos, ypos) {
        super({width: Resources.Barrel1.width, height: Resources.Barrel1.height});

        this.xpos = xpos
        this.ypos = ypos

        this.vec1 = new Vector(0, 0)
        this.vec2 = new Vector(0, 400)
        this.edge1 = Shape.Edge(this.vec1, this.vec2)
        this.edge2 = Shape.Edge(new Vector(350, 0), new Vector(350, 400))

        this.edges = new CompositeCollider([
            this.edge1,
            this.edge2
        ])

        this.collider.set(this.edges)

        this.body.collisionType = CollisionType.Active

        this.scale = new Vector(0.2, 0.2)
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);

        this.graphics.anchor = new Vector(0, 0)

        this.sprite = Resources.Barrel1.toSprite()
        this.graphics.use(this.sprite)

        this.pos = new Vector(this.xpos, this.ypos)
    }

}

