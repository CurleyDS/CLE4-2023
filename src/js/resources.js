import {ImageSource, Sound, Resource, Loader, Color} from 'excalibur'
//tilemap doesn't work
// import { TiledMapResource } from '@excaliburjs/plugin-tiled'
import background from '../images/background.png'
import backgroundLevel0 from '../images/background-level0.png'
import backgroundLevel1 from '../images/background-level1.png'
import pipe1 from '../images/pipe1.png'
import pipe2 from '../images/pipe2.png'
import pipe3 from '../images/pipe3.png'
import pipe4 from '../images/pipe4.png'
import pipe5 from '../images/pipe5.png'
import pipe6 from '../images/pipe6.png'
import pipe7 from '../images/pipe7.png'
import pipe8 from '../images/pipe8.png'
import pipe9 from '../images/pipe9.png'
import floor from '../images/floor.png'
import shortPlatform from '../images/short-platform.png'
import playerCharacter from '../images/spritesheet-player-character.png'
import glint from '../images/blue-flame.png'
import itemObject from '../images/item-object.png'
import enemy from '../images/enemy-spritesheet.png'
import view from '../images/detection;zone.png'
import keys from '../images/keys-spritesheet.png'
import door from '../images/door-spritesheet.png'
import gameover from '../images/game-over.png'
import startgame from '../images/title;start.png'
import barrel1 from '../images/barrel-normal.png'
import logo from "../images/title;logo.png"
import box from '../images/box;standard.png'
import fusebox from '../images/fusebox.png'
import tool from '../images/watchamacallit;thingy;spritesheet.png'
import button from '../images/big;red;button;spritesheet.png'
import metalPlatform from '../images/a;grey;box;with;screws.png'
import metalFence from '../images/a;grey;bar;with;screws;on;the;side.png'




const Resources = {
    Background: new ImageSource(background),
    Background0: new ImageSource(backgroundLevel0),
    Background1: new ImageSource(backgroundLevel1),
    Pipe1: new ImageSource(pipe1),
    Pipe2: new ImageSource(pipe2),
    Pipe3: new ImageSource(pipe3),
    Pipe4: new ImageSource(pipe4),
    Pipe5: new ImageSource(pipe5),
    Pipe6: new ImageSource(pipe6),
    Pipe7: new ImageSource(pipe7),
    Pipe8: new ImageSource(pipe8),
    Pipe9: new ImageSource(pipe9),
    Floor: new ImageSource(floor),
    ShortPlatform: new ImageSource(shortPlatform),
    Player: new ImageSource(playerCharacter),
    Glint: new ImageSource(glint),
    Item: new ImageSource(itemObject),
    Enemy: new ImageSource(enemy),
    View: new ImageSource(view),
    Keys: new ImageSource(keys),
    Door: new ImageSource(door),
    GameOver: new ImageSource(gameover),
    StartGame: new ImageSource(startgame),
    Barrel1: new ImageSource(barrel1),
    Box1: new ImageSource(box),
    Fusebox: new ImageSource(fusebox),
    Tool: new ImageSource(tool),
    Button: new ImageSource(button),
    MetalPlatform: new ImageSource(metalPlatform),
    MetalFence: new ImageSource(metalFence)
}

const ResourceLoader = new Loader([
    Resources.Background,
    Resources.Background0,
    Resources.Background1,
    Resources.Pipe1,
    Resources.Pipe2,
    Resources.Pipe3,
    Resources.Pipe4,
    Resources.Pipe5,
    Resources.Pipe6,
    Resources.Pipe7,
    Resources.Pipe8,
    Resources.Pipe9,
    Resources.Floor,
    Resources.ShortPlatform,
    Resources.Player,
    Resources.Glint,
    Resources.Keys,
    Resources.Enemy,
    Resources.View,
    Resources.Door,
    Resources.GameOver,
    Resources.StartGame,
    Resources.Barrel1,
    Resources.Box1,
    Resources.Fusebox,
    Resources.Tool,
    Resources.Button,
    Resources.MetalFence,
    Resources.MetalPlatform
])

ResourceLoader.logo = logo
ResourceLoader.logoWidth = 1111
ResourceLoader.logoHeight = 459
ResourceLoader.backgroundColor = Color.Black

//exports the resources
export { Resources, ResourceLoader }
