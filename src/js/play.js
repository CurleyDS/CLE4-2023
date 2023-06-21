import {Scene, Actor, Engine, Physics, Vector, Shape} from "excalibur"
import { Player } from "./player.js";
import { Glint } from "./glint.js";
import { Item } from "./item.js";
import { Platform } from "./platform.js";
import { Enemy } from "./enemy.js";

export class Play extends Scene {
    game
    box

    constructor() {
        super()
        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0, 8000)
    }

    onInitialize(engine) {
        this.game = engine
    }

    onActivate(ctx) {
        this.platform = new Platform(625, 800);
        this.add(this.platform);

        this.player = new Player(500, 600);
        this.add(this.player);

        this.glint = new Glint()
        this.add(this.glint);

        this.item = new Item("item");
        this.add(this.item);

        this.enemy = new Enemy(1000, 600);
        this.add(this.enemy);
    }
}
