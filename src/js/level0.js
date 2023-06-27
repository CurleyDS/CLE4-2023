import { Actor, Vector, Scene, TextAlign  } from 'excalibur'
import { Resources } from './resources.js'
import { Player } from "./player.js";
import { HintObject } from "./hintobject.js";
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

        this.ground = new Platform(Resources.Floor, 600, 780, 1.02, 1.02);
        this.add(this.ground);

        this.platform = new Platform(Resources.Floor, 800, 500, 1.02, 1.02);
        this.add(this.platform);

        this.platform2 = new Platform(Resources.Floor,300, 220, 1.02, 1.02);
        this.add(this.platform2);

        this.pipe1 = new Pipes(Resources.Pipe1, 600, 55, 0.27, 0.27,0, 0, true, false);
        this.add(this.pipe1);
        this.pipe2 = new Pipes(Resources.Pipe2, 45, 455, 1.3, 1.3,-35, 0, false, false);
        this.add(this.pipe2);
        this.pipe3 = new Pipes(Resources.Pipe3, 85, 700, 1.3, 1.3,0, 0, false, true);
        this.add(this.pipe3);
        this.pipe4 = new Pipes(Resources.Pipe4, 1110, 415, 1.5, 1.5,0, 0, false, true);
        this.add(this.pipe4);
    }

    onActivate(ctx) {

        this.item = new Item("keys", 1, Resources.Keys, 1,  2, 250, 281, 320, 360);
        this.add(this.item);

        this.enemy = new Enemy(250, 430);
        this.add(this.enemy);

        this.barrel = new Barrel(600, 435);
        this.add(this.barrel);

        this.door = new Door(1050, 680);
        this.add(this.door);

        this.glint = new Glint()
        this.add(this.glint);

        this.player = new Player(60, 150);
        this.add(this.player);

        this.hint1 = new HintObject(365, 150, "Looks like a narrow space.\n Try crouching [Ctrl].");
        this.add(this.hint1);

        this.hint2 = new HintObject(1050, 305, "Watch out\n for the guard!", TextAlign.Right);
        this.add(this.hint2);

        this.hint3 = new HintObject(670, 430, "Quick! Hide [E] in here.\n When he's gone jump [Space] out", TextAlign.Center);
        this.add(this.hint3);

        this.hint4 = new HintObject(365, 430, "Might need this for later...");
        this.add(this.hint4);

        this.hint5 = new HintObject(1005, 710, "Maybe it'll open [E] it with a key?", TextAlign.Right);
        this.add(this.hint5);

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

