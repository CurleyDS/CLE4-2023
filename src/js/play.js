import { Scene, Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Player } from "./player.js";
import { Item } from "./item.js";

export class Play extends Scene {
    game

    constructor() {
        super()
    }

    onInitialize(engine) {
        this.game = engine
    }

    onActivate(ctx) {
        this.player = new Player();
        this.add(this.player);

        this.item = new Item("item");
        this.add(this.item);
    }
}
