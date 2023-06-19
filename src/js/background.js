import { Actor, Vector } from 'excalibur'
import { Resources } from './resources.js'


export class Background extends Actor {

    offset

    onInitialize(engine) {
        const backgroundImage = Resources.Background.toSprite()
        this.offset = backgroundImage.width
        this.graphics.anchor = new Vector(0, 0)
        this.graphics.use(backgroundImage);

    }
}

