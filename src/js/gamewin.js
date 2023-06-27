import {Scene, Input} from "excalibur";
import {Background} from "./background.js";
import {Resources} from "./resources.js";

export class GameWin extends Scene {

    onInitialize(_engine) {
        super.onInitialize(_engine);

        this.game =_engine

        this.background = new Background(Resources.GameWin)
        this.add(this.background)

    }

    onPreUpdate(_engine, _delta) {
        super.onPreUpdate(_engine, _delta);

        this.keys = _engine.input.keyboard

        if (this.keys.wasPressed(Input.Keys.Enter)) {
            _engine.goToScene('levelselect')
        }
    }
}