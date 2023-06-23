import {Actor, SpriteSheet, Vector, Input, Animation, range, Label, Font, FontUnit, Color} from "excalibur";
import { Resources } from "./resources.js";

export class Glint extends Actor {

    constructor() {
        super({width: 250, height: 250})
        // de player heeft zelf de hele spritesheet omdat er maar 1 player is
        this.scale = new Vector(0.2, 0.2)
        const flySheet = SpriteSheet.fromImageSource({
            image: Resources.Glint,
            grid: {rows: 3, columns: 4, spriteWidth: 250, spriteHeight: 250},
        });

        const idle = Animation.fromSpriteSheet(flySheet, range(0, 1), 250);
        const sad1 = Animation.fromSpriteSheet(flySheet, range(2, 3), 250);
        const sad2 = Animation.fromSpriteSheet(flySheet, range(8, 9), 250);
        const shocked = Animation.fromSpriteSheet(flySheet, range(4, 5), 140);
        const thinking = Animation.fromSpriteSheet(flySheet, range(6, 7), 350);
        const angry = Animation.fromSpriteSheet(flySheet, range(10, 11), 250);

        this.graphics.add("idle", idle);
        this.graphics.add("shocked", shocked);
        this.graphics.add("sad1", sad1);
        this.graphics.add("sad2", sad2);
        this.graphics.add("thinking", thinking);
        this.graphics.add("angry", angry);
    }

    onInitialize(engine) {
        this.graphics.use("idle");
        this.pos = new Vector(engine.currentScene.player.pos.x + 50, engine.currentScene.player.pos.y + 120)
        this.anchor = new Vector(0.5,2)
        this.actions.follow(engine.currentScene.player, 100)

        this.info = new Label({
            text: "Hi I'm Glint. You need to get out of here. I'll be your guide",
            font: new Font({
                unit: FontUnit.Px,
                family: 'Arial',
                size: 15,
                color: Color.White,
            }), pos: new Vector(this.pos.x + 30, this.pos.y -75)
        })
        engine.currentScene.add(this.info)
        engine.clock.schedule(() => {
            engine.currentScene.remove(this.info)
        }, 5000)
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Input.Keys.Key1)) {
            this.graphics.use('idle')
            this.scale = new Vector(0.2, 0.2)
            this.anchor = new Vector(0.5,2)
        }
        if (engine.input.keyboard.isHeld(Input.Keys.Key2)) {
            this.graphics.use('shocked')
            this.scale = new Vector(0.2, 0.2)
            this.anchor = new Vector(0.5,2)
        }
        if (engine.input.keyboard.isHeld(Input.Keys.Key3)) {
            this.graphics.use('sad1')
            this.scale = new Vector(0.2, 0.2)
            this.anchor = new Vector(0.5,2)
        }
        if (engine.input.keyboard.isHeld(Input.Keys.Key4)) {
            this.graphics.use('thinking')
            this.scale = new Vector (0.35, 0.30);
            this.anchor = new Vector(0.5,1.5)
        }
        if (engine.input.keyboard.isHeld(Input.Keys.Key5)) {
            this.graphics.use('angry')
            this.scale = new Vector (0.2, 0.2);
            this.anchor = new Vector(0.5,2)
        }
        if (engine.input.keyboard.isHeld(Input.Keys.Key6)) {
            this.graphics.use('sad2')
            this.scale = new Vector (0.20, 0.20)
            this.anchor = new Vector(0.5,2)
        }
    }
}