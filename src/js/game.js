import '../css/style.css'
import { Engine } from "excalibur"
import { ResourceLoader } from './resources.js'
import { Play } from "./play.js";
import {Level0} from "./level0.js";

export class Game extends Engine {

    constructor() {
        super({ width: 1200, height: 800 })
        // this.showDebug(true)
        // this.debug.transform.showAll = true
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene('play', new Play())
        this.addScene('level0', new Level0())

        this.goToScene('level0')
    }
}

new Game()
