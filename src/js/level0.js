import { Actor, Vector, Scene, Physics  } from 'excalibur'
import { Resources } from './resources.js'
import { Player } from "./player.js";
import { Glint } from "./glint.js";
import { Item } from "./item.js";
import { Background } from "./background.js";
import { Platform } from "./platform.js";
import { Enemy } from "./enemy.js";
import { Pipes } from "./pipes.js";



export class Level0 extends Scene {
    game
    box

    constructor() {
        super()
        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0, 8000)
    }

    onInitialize(engine) {
        this.game = engine

        this.background = new Background(Resources.Background0);
        this.add(this.background);
    }

    onActivate(ctx) {
        this.ground = new Platform(600, 780);
        this.add(this.ground);

        this.platform = new Platform(800, 500);
        this.add(this.platform);

        this.platform2 = new Platform(330, 225);
        this.add(this.platform2);

        this.player = new Player(200, 50);
        this.add(this.player);

        this.pipe1 = new Pipes(Resources.Pipe1, 600, 65);
        this.add(this.pipe1);

        this.glint = new Glint()
        this.add(this.glint);

        this.item = new Item("item");
        this.add(this.item);

        this.enemy = new Enemy();
        this.add(this.enemy);
    }
}