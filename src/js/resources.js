import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { TiledMapResource } from '@excaliburjs/plugin-tiled'
import fishImage from '../images/fish.png'
import playerCharacter from '../images/spritesheet-player-character.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Player: new ImageSource(playerCharacter)
}
const ResourceLoader = new Loader([Resources.Fish, Resources.Player])

export { Resources, ResourceLoader }