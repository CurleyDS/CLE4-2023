import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { TiledMapResource } from '@excaliburjs/plugin-tiled'
import playerCharacter from '../images/spritesheet-player-character.png'

const Resources = {
    Player: new ImageSource(playerCharacter)
}
const ResourceLoader = new Loader([Resources.Player])

export { Resources, ResourceLoader }