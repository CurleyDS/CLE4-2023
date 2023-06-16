import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import {Player} from "./player.js";
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        this.player = new Player();
        this.add(this.player);
    }
}

new Game()
