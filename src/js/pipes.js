import {Actor, CollisionType, ImageSource, Vector} from 'excalibur'
import { Resources } from './resources.js'

export class Pipes extends Actor {
    pipeImage;
    lowhanging;

    constructor(pipeImage, xP, yP, xS, yS, lowhanging = false) {
        super({width: pipeImage.width, height: pipeImage.height});
        this.body.collisionType = CollisionType.Fixed
        this.pipeImage = pipeImage;
        this.xP = xP;
        this.yP = yP;
        this.xS = xS;
        this.yS = yS;
        this.lowhanging = lowhanging;
    }

    onInitialize(engine) {
        if(this.pipeImage instanceof ImageSource) {
            this.graphics.use(this.pipeImage.toSprite())
        }
        this.pos = new Vector(this.xP, this.yP)
        this.scale = new Vector(this.xS, this.yS)
    }
}