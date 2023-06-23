import '../css/style.css'
import { Engine, Vector, Physics } from "excalibur"
import { ResourceLoader } from './resources.js'
// import { Play } from "./play.js";
import {Level0} from "./level0.js";
import {GameOver} from "./gameover.js";
import {StartGame} from "./startgame.js";

export class Game extends Engine {

    constructor() {
        super({ width: 1200, height: 800 })
        // this.showDebug(true)
        // this.debug.transform.showAll = true
        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0, 800)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene('startgame', new StartGame)
        this.addScene('level0', new Level0())
        this.addScene('gameover', new GameOver())


        this.goToScene('startgame')
    }
}

new Game()
