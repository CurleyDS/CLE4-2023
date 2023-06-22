import { Actor, Vector, CollisionType } from 'excalibur'
import { Resources } from './resources.js'

export class Platform extends Actor {
    x
    y

    constructor(x = 0, y = 0){
        super({ width: Resources.Floor.width, height: Resources.Floor.height})
        this.body.collisionType = CollisionType.Fixed
        this.x = x
        this.y = y
    }

    onInitialize(engine) {
        const floorImage = Resources.Floor.toSprite()
        this.graphics.use(floorImage);
        this.scale = new Vector(1, 0.90)
        this.pos = new Vector(this.x, this.y)
    }
}