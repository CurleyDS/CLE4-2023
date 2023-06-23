import { Actor, Vector, Scene  } from 'excalibur'
import { Resources } from './resources.js'
import { Player } from "./player.js";
import { Glint } from "./glint.js";
import { Item } from "./item.js";
import { Background } from "./background.js";
import { Platform } from "./platform.js";
import { Enemy } from "./enemy.js";
import { Pipes } from "./pipes.js";
import { Barrel } from './barrel.js';
import { Door } from "./door.js";

export class Level0 extends Scene {
    game
    box

    constructor() {
        super()
    }

    onInitialize(engine) {
        this.game = engine

        this.background = new Background(Resources.Background0);
        this.add(this.background);

        this.ground = new Platform(600, 780);
        this.add(this.ground);

        this.platform = new Platform(800, 500);
        this.add(this.platform);

        this.platform2 = new Platform(330, 220);
        this.add(this.platform2);

        this.pipe1 = new Pipes(Resources.Pipe1, 600, 61, 0.27, 0.27,0, 0, true, false);
        this.add(this.pipe1);
        this.pipe2 = new Pipes(Resources.Pipe2, 48, 455, 1.3, 1.3,-35, 0, false, false);
        this.add(this.pipe2);
        this.pipe3 = new Pipes(Resources.Pipe3, 87, 700, 1.3, 1.3,0, 0, false, true);
        this.add(this.pipe3);
        this.pipe4 = new Pipes(Resources.Pipe4, 1107, 415, 1.5, 1.5,0, 0, false, true);
        this.add(this.pipe4);
    }

    onActivate(ctx) {

        this.item = new Item("keys");
        this.add(this.item);

        this.enemy = new Enemy(250, 420);
        this.add(this.enemy);

        this.barrel = new Barrel(600, 440);
        this.add(this.barrel);

        this.door = new Door(1050, 685);
        this.add(this.door);

        this.glint = new Glint()
        this.add(this.glint);

        this.player = new Player(60, 150);
        this.add(this.player);

        // this.inventory = this.player.inventory;
        // this.add(this.inventory);

    }

    onDeactivate(_context) {
        super.onDeactivate(_context);
        this.item.kill()
        this.enemy.kill()
        this.barrel.kill()
        this.door.kill()
        this.glint.kill()
        this.player.kill()
    }
}

