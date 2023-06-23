import {ImageSource, Sound, Resource, Loader, Color} from 'excalibur'
//tilemap doesn't work
// import { TiledMapResource } from '@excaliburjs/plugin-tiled'
import background from '../images/background.png'
import backgroundLevel0 from '../images/background-level0.png'
import pipe1 from '../images/pipe1.png'
import pipe2 from '../images/pipe2.png'
import pipe3 from '../images/pipe3.png'
import pipe4 from '../images/pipe4.png'
import floor from '../images/floor.png'
import playerCharacter from '../images/spritesheet-player-character.png'
import glint from '../images/blue-flame.png'
import itemObject from '../images/item-object.png'
import enemy from '../images/enemy-spritesheet.png'
import view from '../images/view.png'
import keys from '../images/keys-spritesheet.png'
import door from '../images/door-spritesheet.png'
import gameover from '../images/game-over.png'
import startgame from '../images/title;start.png'
import barrel1 from '../images/barrel-normal.png'
import logo from "../images/title;logo.png";



const Resources = {
    Background: new ImageSource(background),
    Background0: new ImageSource(backgroundLevel0),
    Pipe1: new ImageSource(pipe1),
    Pipe2: new ImageSource(pipe2),
    Pipe3: new ImageSource(pipe3),
    Pipe4: new ImageSource(pipe4),
    Floor: new ImageSource(floor),
    Player: new ImageSource(playerCharacter),
    Glint: new ImageSource(glint),
    Item: new ImageSource(itemObject),
    Enemy: new ImageSource(enemy),
    View: new ImageSource(view),
    Keys: new ImageSource(keys),
    Door: new ImageSource(door),
    GameOver: new ImageSource(gameover),
    StartGame: new ImageSource(startgame),
    Barrel1: new ImageSource(barrel1)

}

const ResourceLoader = new Loader([
    Resources.Background,
    Resources.Background0,
    Resources.Pipe1,
    Resources.Pipe2,
    Resources.Pipe3,
    Resources.Pipe4,
    Resources.Floor,
    Resources.Player,
    Resources.Glint,
    Resources.Keys,
    Resources.Enemy,
    Resources.View,
    Resources.Door,
    Resources.GameOver,
    Resources.StartGame,
    Resources.Barrel1
])

ResourceLoader.logo = logo
ResourceLoader.logoWidth = 1111
ResourceLoader.logoHeight = 459
ResourceLoader.backgroundColor = Color.Black

//exports the resources
export { Resources, ResourceLoader }
