import {Scene, Input, Actor, Vector, Color, Text, Font, FontUnit} from "excalibur";
import {Background} from "./background.js";
import { Platform } from "./platform.js";
import {Resources} from "./resources.js";

export class LevelSelect extends Scene {

    onInitialize(_engine) {
        super.onInitialize(_engine);

        this.game =_engine

        this.background = new Background(Resources.Background0)
        this.add(this.background)

        this.ground = new Platform(Resources.Floor, 600, 780, 1.02, 1.02);
        this.add(this.ground);

        const lvl0txt = new Text({
            text: 'Level 0',
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })

        const level0 = new Actor({
            width: 100,
            height: 75
        })
        level0.graphics.use(lvl0txt);
        level0.pos = new Vector(400, 400)
        level0.enableCapturePointer = true
        level0.on('pointerup', (event) => this.game.goToScene('level0'))
        this.add(level0)

        const lvl1txt = new Text({
            text: 'Level 1',
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })

        const level1 = new Actor({
            width: 100,
            height: 75
        })
        level1.graphics.use(lvl1txt);
        level1.pos = new Vector(800, 400)
        level1.enableCapturePointer = true
        level1.on('pointerup', (event) => this.game.goToScene('level1'))
        this.add(level1)
    }
}