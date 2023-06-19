import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { TiledMapResource } from '@excaliburjs/plugin-tiled'
import playerCharacter from '../images/spritesheet-player-character.png'
import itemObject from '../images/item-object.png'

const Resources = {
    Player: new ImageSource(playerCharacter),
    Item: new ImageSource(itemObject)
}
const ResourceLoader = new Loader([Resources.Player, Resources.Item])

export { Resources, ResourceLoader }