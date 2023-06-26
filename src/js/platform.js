import {Actor, Vector, CollisionType, ImageSource} from 'excalibur'
import { Resources } from './resources.js'

export class Platform extends Actor {
    x
    y
    xS
    yS
    platformImage

    constructor(platformImage, x = 0, y = 0, xS, yS){
        super({ width: Resources.Floor.width, height: Resources.Floor.height})
        this.body.collisionType = CollisionType.Fixed
        this.platformImage = platformImage;
        this.x = x
        this.y = y
        this.xS = xS;
        this.yS = yS;
    }

    onInitialize(engine) {
        if(this.platformImage instanceof ImageSource) {
            this.graphics.use(this.platformImage.toSprite())
        }
        const floorImage = Resources.Floor.toSprite()
        this.graphics.use(floorImage);
        this.scale = new Vector(this.xS, this.yS)
        this.pos = new Vector(this.x, this.y)
    }
}