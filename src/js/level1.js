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

export class Level1 extends Scene {
    game
    box

    constructor() {
        super()
    }

    onInitialize(engine) {
        this.game = engine

        this.background = new Background(Resources.Background1);
        this.add(this.background);

        this.pipe5 = new Pipes(Resources.Pipe5, 425, 700, 1.3, 1.3,0, 0, false, true);
        this.add(this.pipe5);
        this.pipe6 = new Pipes(Resources.Pipe6, 1120, 700, 1.3, 1.3,-35, 0, false, true);
        this.add(this.pipe6);
        this.pipe7 = new Pipes(Resources.Pipe7, 755, 360, 1.3, 1.3,0, 0, true, false);
        this.add(this.pipe7);
        this.pipe8 = new Pipes(Resources.Pipe8, 1115, 350, 1.3, 1.5,0, 0, false, true);
        this.add(this.pipe8);
        this.pipe9 = new Pipes(Resources.Pipe9, 859, 478, 1.3, 1.3,0, 0, false, true);
        this.add(this.pipe9);

        this.ground = new Platform(Resources.Floor, 601, 780, 1.02, 1.02);
        this.add(this.ground);

        this.platform = new Platform(Resources.ShortPlatform, 945, 520, 0.5, 1.02);
        this.add(this.platform);

        this.platform2 = new Platform(Resources.ShortPlatform, 655, 520, 0.80, 1.02);
        this.add(this.platform2);

        this.platform3 = new Platform(Resources.Floor, 625, 300, 0.4, 1.02);
        this.add(this.platform3);

        this.platform4 = new Platform(Resources.ShortPlatform, 100, 520, 0.75, 1.02);
        this.add(this.platform4);

        this.platform5 = new Platform(Resources.ShortPlatform, 100, 25, 0.75, 1.02);
        this.add(this.platform5);


    }

    onActivate(ctx) {

        this.item = new Item("keys");
        this.add(this.item);

        this.barrel = new Barrel(775, 717);
        this.add(this.barrel);

        this.door = new Door(600, 685);
        this.add(this.door);

        this.enemy = new Enemy(800, 680);
        this.add(this.enemy);

        this.glint = new Glint()
        this.add(this.glint);

        this.player = new Player(60, 150);
        this.add(this.player);

        this.inventory = this.player.inventory;
        this.add(this.inventory);

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