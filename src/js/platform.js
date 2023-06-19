import { Actor, Vector } from 'excalibur'
import { Resources } from './resources.js'

export class Platform extends Actor {
    offset

    constructor(){
        super({ width: 1250, height: 100 })
        this.body.collisionType = CollisionType.Fixed
    }

    onInitialize(engine) {
        const floorImage = Resources.Floor.toSprite()
        this.offset = floorImage.width
        this.graphics.anchor = new Vector(0,0)
        this.graphics.use(floorImage); 
        this.pos = new Vector(0, 0)
    }
}

