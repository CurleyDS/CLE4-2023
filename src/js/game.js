import '../css/style.css'
import { Engine, Vector, Physics } from "excalibur"
import { ResourceLoader } from './resources.js'
// import { Play } from "./play.js";
import { LevelSelect } from "./levelselect.js";
import { Level0 } from "./level0.js";
import { Level1 } from "./level1.js";
import { GameOver } from "./gameover.js";
import { GameWin } from "./gamewin.js";

export class Game extends Engine {
    currentLevel

    constructor() {
        super({ width: 1200, height: 800 })
        // this.showDebug(true)
        // this.debug.transform.showAll = true
        Physics.useArcadePhysics()
        // Physics.useRealisticPhysics()
        Physics.gravity = new Vector( 0, 800)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene('levelselect', new LevelSelect())
        this.addScene('level0', new Level0())
        this.addScene('level1', new Level1())
        this.addScene('gameover', new GameOver())
        this.addScene('gamewin', new GameWin())

        this.goToScene('levelselect')
    }
}

new Game()
