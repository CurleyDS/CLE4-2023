import {Actor, ImageSource, Vector} from 'excalibur'

export class Background extends Actor {
    backgroundImage;

    constructor(backgroundImage) {
        super();
        this.backgroundImage = backgroundImage;
    }

    onInitialize(engine) {
        this.graphics.anchor = new Vector(0, 0)
        this.scale = new Vector(1, 1)
        if(this.backgroundImage instanceof ImageSource) {
            this.graphics.use(this.backgroundImage.toSprite())
        }
    }
}