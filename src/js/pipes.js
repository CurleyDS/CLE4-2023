import {Actor, CollisionType, ImageSource, Vector} from 'excalibur'

export class Pipes extends Actor {
    pipeImage;
    lowhanging;
    platform
    x
    y
    sWidth
    sHeight
    cWidth
    cHeight

    constructor(pipeImage, x, y, sWidth, sHeight, cWidth, cHeight, lowhanging = false, platform = true) {
        super({width: pipeImage.width + cWidth, height: pipeImage.height + cHeight});
        this.body.collisionType = CollisionType.Fixed
        this.pipeImage = pipeImage;
        this.x = x;
        this.y = y;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.cWidth = cWidth;
        this.cHeight = cHeight;
        this.lowhanging = lowhanging;
        this.platform = platform;
    }

    onInitialize(engine) {
        if(this.pipeImage instanceof ImageSource) {
            this.graphics.use(this.pipeImage.toSprite())
        }
        this.pos = new Vector(this.x, this.y)
        this.scale = new Vector(this.sWidth, this.sHeight)
    }
}