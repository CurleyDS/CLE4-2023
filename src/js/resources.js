import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { TiledMapResource } from '@excaliburjs/plugin-tiled'
import fishImage from '../images/fish.png'

const Resources = {
    Fish: new ImageSource(fishImage)
}
const ResourceLoader = new Loader([Resources.Fish])

export { Resources, ResourceLoader }