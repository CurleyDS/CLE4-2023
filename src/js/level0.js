import { Actor, Vector, Scene  } from 'excalibur'
import { Resources } from './resources.js'
import { Player } from "./player.js";
import { Glint } from "./glint.js";
import { Item } from "./item.js";
import { Background } from "./background.js";
import { Platform } from "./platform.js";
import { Enemy } from "./enemy.js";
import { Pipes } from "./pipes.js";
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

        this.pipe1 = new Pipes(Resources.Pipe1, 600, 61);
        this.add(this.pipe1);
    }

    onActivate(ctx) {

        this.item = new Item("keys");
        this.add(this.item);

        this.enemy = new Enemy(250, 400);
        this.add(this.enemy);

        this.door = new Door();
        this.add(this.door);

        this.glint = new Glint()
        this.add(this.glint);

        this.player = new Player(50, 120);
        this.add(this.player);

        // this.inventory = this.player.inventory;
        // this.add(this.inventory);

    }

    onDeactivate(_context) {
        super.onDeactivate(_context);
        this.item.kill()
        this.enemy.kill()
        this.door.kill()
        this.glint.kill()
        this.player.kill()
    }
}

