import {Actor, Vector, Scene, TextAlign} from 'excalibur'
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
import { Fusebox } from "./fusebox.js";
import { Button } from "./button.js";
import { Box } from "./box.js";
import { Fence } from "./fence.js";
import {HintObject} from "./hintobject.js";


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
        this.pipe6 = new Pipes(Resources.Pipe6, 1120, 705, 1.3, 1.3,0, 0, false, true);
        this.add(this.pipe6);
        this.pipe7 = new Pipes(Resources.Pipe7, 755, 345, 1.3, 1.3,0, 0, true, false);
        this.add(this.pipe7);
        this.pipe8 = new Pipes(Resources.Pipe8, 1120, 340, 1.4, 1.4,0, 0, false, true);
        this.add(this.pipe8);
        this.pipe9 = new Pipes(Resources.Pipe9, 859, 463, 1.3, 1.3,0, 0, false, false);
        this.add(this.pipe9);

        this.ground = new Platform(Resources.Floor, 601, 780, 1.02, 1.02);
        this.add(this.ground);

        this.platform = new Platform(Resources.ShortPlatform, 935, 500, 0.5, 1.02);
        this.add(this.platform);

        this.platform2 = new Platform(Resources.ShortPlatform, 640, 500, 0.8, 1.02);
        this.add(this.platform2);

        this.platform3 = new Platform(Resources.Floor, 630, 280, 0.45, 1.02);
        this.add(this.platform3);

        this.platform4 = new Platform(Resources.ShortPlatform, 105, 500, 0.75, 1.02);
        this.add(this.platform4);




    }

    onActivate(ctx) {
        this.game.currentLevel = 1

        this.tool = new Item("tool", 1, Resources.Tool, 1,  2, 250, 250, 100, 120)
        this.add(this.tool);

        this.keys = new Item("keys", 1, Resources.Keys, 1,  2, 250, 281, 700, 440)
        this.add(this.keys);

        this.barrel = new Barrel(775, 717);
        this.add(this.barrel);

        this.box = new Box(600, 200);
        this.add(this.box);

        this.button = new Button(100, 725);
        this.add(this.button);

        this.door = new Door(600, 685, 'gamewin');
        this.add(this.door);

        this.fusebox = new Fusebox(1125, 580);
        this.add(this.fusebox);

        this.enemy = new Enemy(800, 680);
        this.add(this.enemy);

        this.glint = new Glint(40, 400)
        this.add(this.glint);

        this.player = new Player(60, 430);
        this.add(this.player);

        this.fence = new Fence(515,395)
        this.add(this.fence);

        this.elevator = new Platform(Resources.MetalPlatform, 120, 50, 0.3, 0.3);
        this.add(this.elevator);

        this.hint1 = new HintObject(700, 200, "You can drag this box [E]", TextAlign.Right);
        this.add(this.hint1);

        // this.inventory = this.player.inventory;
        // this.add(this.inventory);

    }

    onDeactivate(_context) {
        super.onDeactivate(_context);
        this.keys.kill()
        this.box.kill()
        this.tool.kill()
        this.fusebox.kill()
        this.enemy.kill()
        this.barrel.kill()
        this.door.kill()
        this.glint.kill()
        this.player.kill()
        this.fence.kill()
        this.elevator.kill()
    }
}