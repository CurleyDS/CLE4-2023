import { Scene, Actor, Engine, Physics, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Player } from "./player.js";
import { Glint } from "./glint.js";
import { Item } from "./item.js";
import { Background } from "./background.js";
import { Platform } from "./platform.js";
import { Enemy } from "./enemy.js";



export class Play extends Scene {
    game

    constructor() {
        super()
        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0, 8000)
    }

    onInitialize(engine) {
        this.game = engine
    }

    onActivate(ctx) {

        this.background = new Background();
        this.add(this.background);

        this.platform = new Platform();
        this.add(this.platform);

        this.player = new Player();
        this.add(this.player);

        this.glint = new Glint()
        this.add(this.glint);

        this.item = new Item("item");
        this.add(this.item);

        this.enemy = new Enemy();
        this.add(this.enemy);
    }
}
