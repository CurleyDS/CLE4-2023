import {Actor, CollisionType, ImageSource, Vector} from 'excalibur'
import { Resources } from './resources.js'

export class Pipes extends Actor {
    pipeImage;

    constructor(pipeImage, x, y) {
        super({width: Resources.Pipe1.width, height: Resources.Pipe1.height});
        this.body.collisionType = CollisionType.Fixed
        this.pipeImage = pipeImage;
        this.x = x
        this.y = y
    }

    onInitialize(engine) {
        if(this.pipeImage instanceof ImageSource) {
            this.graphics.use(this.pipeImage.toSprite())
        }
        this.pos = new Vector(this.x, this.y)
        this.scale = new Vector(0.27, 0.27)
    }
}