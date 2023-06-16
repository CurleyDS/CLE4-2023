import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { TiledMapResource } from '@excaliburjs/plugin-tiled'
import exampleCityUrl from '../assets/non_solid_map.json';
import fishImage from '../images/fish.png'

const tiledMap = new TiledMapResource(exampleCityUrl);

const Resources = {
    Map: tiledMap,
    Fish: new ImageSource(fishImage)
}
const ResourceLoader = new Loader([Resources.Map, Resources.Fish])

export { Resources, ResourceLoader }