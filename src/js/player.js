import { Actor, SpriteSheet, Vector, Input, Shape, Animation, CollisionType, range } from "excalibur";
import { Resources } from "./resources.js";
import { Platform } from "./platform.js";
import { Inventory } from "./inventory.js"
import { Item } from "./item.js"
import { Barrel } from "./barrel.js"
import { Enemy } from "./enemy.js"
import {StandingupCollider} from "./standingupcollider.js";
import {Pipes} from "./pipes.js";


export class Player extends Actor {
    game
    inventory
    currentGraphic
    grounded
    jumped
    box
    boxAnchor
    x
    y
    canStand
    isHiding

    constructor(x = 0, y = 0) {
        super({width: 500, height: 750});
        this.boxAnchor = new Vector(0.5,0.40)
        this.box = Shape.Box(500, 750, Vector.Half);
        this.box2 = Shape.Box(500, 590, this.boxAnchor);

        this.collider.set(this.box);

        this.addChild(new StandingupCollider())
        this.canStand = true;
        this.isHiding = false;

        this.x = x
        this.y = y

        this.body.collisionType = CollisionType.Active
        // de player heeft zelf de hele spritesheet omdat er maar 1 player is
        this.scale = new Vector(0.12, 0.12)
        const walkSheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: {rows: 8, columns: 3, spriteWidth: 500, spriteHeight: 750},
        });

        const walkRight = Animation.fromSpriteSheet(walkSheet, range(3, 4), 200);
        const walkLeft = Animation.fromSpriteSheet(walkSheet, range(15, 16), 200);
        const idleRight = Animation.fromSpriteSheet(walkSheet, range(0, 2), 150);
        const idleLeft = Animation.fromSpriteSheet(walkSheet, range(12, 14), 150);
        const crouchRight = Animation.fromSpriteSheet(walkSheet, range(6, 9), 150);
        const crouchLeft = Animation.fromSpriteSheet(walkSheet, range(18, 21), 150);
        const crouchIdleRight = Animation.fromSpriteSheet(walkSheet, range(5, 6), 150);
        const crouchIdleLeft = Animation.fromSpriteSheet(walkSheet, range(17, 18), 150);
        const jumpRight = Animation.fromSpriteSheet(walkSheet, range(10, 10), 200);
        const jumpLeft = Animation.fromSpriteSheet(walkSheet, range(22, 22), 200);

        this.graphics.add("walkright", walkRight);
        this.graphics.add("walkleft", walkLeft);
        this.graphics.add("idleright", idleRight);
        this.graphics.add("idleleft", idleLeft);
        this.graphics.add("crouchright", crouchRight);
        this.graphics.add("crouchleft", crouchLeft);
        this.graphics.add("crouchIdleright", crouchIdleRight);
        this.graphics.add("crouchIdleleft", crouchIdleLeft);
        this.graphics.add("jumpright", jumpRight);
        this.graphics.add("jumpleft", jumpLeft);
    }

    onInitialize(engine) {
        this.game = engine;
        this.inventory = new Inventory();
        this.pos = new Vector(this.x, this.y)

        this.on('collisionstart', (event) => this.hitSomething(event))
        this.on('precollision', (event) => this.touchSomething(event))
        this.on('collisionend', (event) => this.detachSomething(event))
        this.currentGraphic = 'idleright'
    }

    hitSomething(event) {
        // wanneer de speler door iets wordt geraakt
        if (event.other instanceof Platform || (event.other instanceof Pipes && event.other.platform) ) {
            this.grounded = true
            this.jumped = false
        }

        if(event.other instanceof Enemy) {
            if (!this.isHiding) {
                this.game.goToScene('gameover');
            }
        }


    }

    touchSomething(event) {
        // wanneer de speler iets aanraakt
        if (event.other instanceof Item) {
            if ((this.game.input.keyboard.isHeld(Input.Keys.E))){
                // pak item op
                this.inventory.addToInventory(event.other)
                // zorg ervoor dat item verdwijnt na oppakken
                event.other.kill()
                console.log(this.inventory);
            }
        }
        if (event.other instanceof Barrel) {
            if ((this.game.input.keyboard.isHeld(Input.Keys.E))){
                this.actions.fade(0, 100)
                this.body.collisionType = CollisionType.PreventCollision
                this.isHiding = true
            }
        }
    }

    detachSomething(event) {
        // wanneer de speler stopt met iets aanraken
        if (event.other instanceof Platform || event.other instanceof Pipes) {
            this.jumped = true
            this.game.clock.schedule(() => {
                this.grounded = false
            }, 200)
        }
    }
    
    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0

        if (this.isHiding) {
            if (this.game.input.keyboard.isHeld(Input.Keys.Space)) {
                this.actions.fade(1, 100)
                this.body.collisionType = CollisionType.Active
                this.isHiding = false
            }
        } else {
            // standing movements
            if (this.canStand){
                // walking
                if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
                    xspeed = -300
                    this.currentGraphic = 'walkleft'
                    this.collider.set(this.box);
                }
                if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
                    xspeed = 300
                    this.currentGraphic = 'walkright'
                    this.collider.set(this.box);
                }
                
                // standing
                if (engine.input.keyboard.wasReleased(Input.Keys.A) || engine.input.keyboard.wasReleased(Input.Keys.Left)) {
                    this.currentGraphic = 'idleleft'
                    this.collider.set(this.box);
                }
                if (engine.input.keyboard.wasReleased(Input.Keys.D) || engine.input.keyboard.wasReleased(Input.Keys.Right)) {
                    this.currentGraphic = 'idleright'
                    this.collider.set(this.box);
                }
            } else {
                // forced crouchwalking
                if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left) || this.currentGraphic == 'walkleft') {
                    xspeed = -100
                    this.currentGraphic = 'crouchleft'
                    this.collider.set(this.box2);
                }
                if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right) || this.currentGraphic == 'walkright') {
                    xspeed = 100
                    this.currentGraphic = 'crouchright'
                    this.collider.set(this.box2);
                }
            
                // forced crouching
                if (engine.input.keyboard.wasReleased(Input.Keys.A) || engine.input.keyboard.wasReleased(Input.Keys.Left) || this.currentGraphic == 'idleleft') {
                    this.currentGraphic = 'crouchIdleleft'
                    this.collider.set(this.box2);
                }
                if (engine.input.keyboard.wasReleased(Input.Keys.D) || engine.input.keyboard.wasReleased(Input.Keys.Right) || this.currentGraphic == 'idleright') {
                    this.currentGraphic = 'crouchIdleright'
                    this.collider.set(this.box2);
                }
            }
    
            // crouch movements
            if (engine.input.keyboard.isHeld(Input.Keys.ControlLeft)) {
                // crouchwalking
                if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
                    xspeed = -100
                    this.currentGraphic = 'crouchleft'
                    this.collider.set(this.box2);
                }
                if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
                    xspeed = 100
                    this.currentGraphic = 'crouchright'
                    this.collider.set(this.box2);
                }
    
                // crouching
                if (engine.input.keyboard.wasReleased(Input.Keys.A) || engine.input.keyboard.wasReleased(Input.Keys.Left) || this.currentGraphic == 'idleleft') {
                    this.currentGraphic = 'crouchIdleleft'
                    this.collider.set(this.box2);
                }
                if (engine.input.keyboard.wasReleased(Input.Keys.D) || engine.input.keyboard.wasReleased(Input.Keys.Right) || this.currentGraphic == 'idleright') {
                    this.currentGraphic = 'crouchIdleright'
                    this.collider.set(this.box2);
                }
            } else {
                // else is equivalent to `engine.input.keyboard.wasReleased(Input.Keys.ControlLeft)` check
                if (this.canStand) {
                    if (this.currentGraphic == 'crouchIdleleft') {
                        this.currentGraphic = 'idleleft'
                        this.collider.set(this.box);
                    }
                    if (this.currentGraphic == 'crouchIdleright') {
                        this.currentGraphic = 'idleright'
                        this.collider.set(this.box);
                    }
                }
            }
    
            // jump movements
            if (this.grounded || !this.jumped) {
                if (engine.input.keyboard.isHeld(Input.Keys.Space)) {
                    // walking jumps
                    yspeed = -650
                    if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
                        this.currentGraphic = 'jumpleft'
                        this.collider.set(this.box);
                    }
                    if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
                        this.currentGraphic = 'jumpright'
                        this.collider.set(this.box);
                    }
    
                    // standing jumps
                    if (engine.input.keyboard.wasReleased(Input.Keys.A) || engine.input.keyboard.wasReleased(Input.Keys.Left) || this.currentGraphic == 'idleleft') {
                        this.currentGraphic = 'jumpleft'
                        this.collider.set(this.box);
                    }
                    if (engine.input.keyboard.wasReleased(Input.Keys.D) || engine.input.keyboard.wasReleased(Input.Keys.Right) || this.currentGraphic == 'idleright') {
                        this.currentGraphic = 'jumpright'
                        this.collider.set(this.box);
                    }
                }
            } else {
                // else is equivalent to `engine.input.keyboard.wasReleased(Input.Keys.Space)` check
                yspeed = 700
                if (this.currentGraphic == 'jumpleft') {
                    this.currentGraphic = 'idleleft'
                    this.collider.set(this.box);
                }
                if (this.currentGraphic == 'jumpright') {
                    this.currentGraphic = 'idleright'
                    this.collider.set(this.box);
                }
            }
        }
        
        this.vel = new Vector(xspeed, yspeed)
        this.graphics.use(this.currentGraphic)
    }
}

