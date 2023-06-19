import { Actor, Vector, CollisionType } from 'excalibur'
import { Resources } from './resources.js'

export class Platform extends Actor {
    offset

    constructor(){
        super({ width: Resources.Floor.width, height: Resources.Floor.height })
        this.body.collisionType = CollisionType.Fixed
    }

    onInitialize(engine) {
        const floorImage = Resources.Floor.toSprite()
        this.offset = floorImage.width
        this.graphics.use(floorImage); 
        this.pos = new Vector(625, 675)
    }
}

