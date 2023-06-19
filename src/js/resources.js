import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { TiledMapResource } from '@excaliburjs/plugin-tiled'
import playerCharacter from '../images/spritesheet-player-character.png'
import itemObject from '../images/item-object.png'
import background from '../images/test.png'
import glint from '../images/blue-flame.png'


const Resources = {
    Player: new ImageSource(playerCharacter),
    Item: new ImageSource(itemObject),
    Background: new ImageSource(background),
    Glint: new ImageSource(glint)
}
const ResourceLoader = new Loader([Resources.Player, Resources.Item, Resources.Background, Resources.Glint])

export { Resources, ResourceLoader }