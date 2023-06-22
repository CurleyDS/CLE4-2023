import { ImageSource, Sound, Resource, Loader } from 'excalibur'
//tilemap doesn't work
// import { TiledMapResource } from '@excaliburjs/plugin-tiled'
import background from '../images/background.png'
import backgroundLevel0 from '../images/background-level0.png'
import pipe1 from '../images/pipe1.png'
import floor from '../images/floor.png'
import playerCharacter from '../images/spritesheet-player-character.png'
import glint from '../images/blue-flame.png'
import itemObject from '../images/item-object.png'
import enemy from '../images/enemy-spritesheet.png'
import view from '../images/view.png'
import keys from '../images/keys-spritesheet.png'



const Resources = {
    Background: new ImageSource(background),
    Background0: new ImageSource(backgroundLevel0),
    Pipe1: new ImageSource(pipe1),
    Floor: new ImageSource(floor),
    Player: new ImageSource(playerCharacter),
    Glint: new ImageSource(glint),
    Item: new ImageSource(itemObject),
    Enemy: new ImageSource(enemy),
    View: new ImageSource(view),
    Keys: new ImageSource(keys)

}

const ResourceLoader = new Loader([
    Resources.Background,
    Resources.Background0,
    Resources.Pipe1,
    Resources.Floor,
    Resources.Player,
    Resources.Glint,
    Resources.Keys,
    Resources.Enemy,
    Resources.View
])

export { Resources, ResourceLoader }