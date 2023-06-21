import { ImageSource, Sound, Resource, Loader, Color } from 'excalibur'
//tilemap doesn't work
// import { TiledMapResource } from '@excaliburjs/plugin-tiled'
import background from '../images/background.png'
import floor from '../images/floor.png'
import playerCharacter from '../images/spritesheet-player-character.png'
import glint from '../images/blue-flame.png'
import itemObject from '../images/item-object.png'
import enemy from '../images/enemy-spritesheet.png'


const Resources = {
    Background: new ImageSource(background),
    Floor: new ImageSource(floor),
    Player: new ImageSource(playerCharacter),
    Glint: new ImageSource(glint),
    Item: new ImageSource(itemObject),
    Enemy: new ImageSource(enemy)
}

const ResourceLoader = new Loader([
    Resources.Background,
    Resources.Floor,
    Resources.Player,
    Resources.Glint,
    Resources.Item,
    Resources.Enemy
])

ResourceLoader.backgroundColor = Color.fromHex('#191919')

export { Resources, ResourceLoader }