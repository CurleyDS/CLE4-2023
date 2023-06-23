import {Actor, CollisionType, ImageSource, Vector} from 'excalibur'
import { Resources } from './resources.js'

export class Pipes extends Actor {
    pipeImage;
    lowhanging;
    platform
    xP
    yP
    xS
    yS
    xC
    yC

    constructor(pipeImage, xP, yP, xS, yS, xC, yC, lowhanging = false, platform = true) {
        super({width: pipeImage.width + xC, height: pipeImage.height + yC});
        this.body.collisionType = CollisionType.Fixed
        this.pipeImage = pipeImage;
        this.xP = xP;
        this.yP = yP;
        this.xS = xS;
        this.yS = yS;
        this.xC = xC;
        this.yC = yC;
        this.lowhanging = lowhanging;
        this.platform = platform;
    }

    onInitialize(engine) {
        if(this.pipeImage instanceof ImageSource) {
            this.graphics.use(this.pipeImage.toSprite())
        }
        this.pos = new Vector(this.xP, this.yP)
        this.scale = new Vector(this.xS, this.yS)
    }
}