import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { TiledMapResource } from '@excaliburjs/plugin-tiled'
import fishImage from '../images/fish.png'
// import exampleCityUrl from '../assets/example-city.tmx' // Tilemap (needs to be a json to work)
// import tileset from '../assets/tilemap_packed.png' // Tileset

const tiledMapResource = new TiledMapResource(exampleCityUrl);

// Only necessary for parcel v2 rearranging assets at the root
// or if you have a build system that moves resources linked by the .tmx
tiledMapResource.convertPath = (tmxLocation, relativePath) => {
    const resourceName = relativePath.split('/').at(-1)?.split('.')[0];
    // for each linked tileset
    if (tileset.includes(resourceName)) {
        return tileset;
    }
}

const Resources = {
    Fish: new ImageSource(fishImage),
    City: tiledMapResource
}
const ResourceLoader = new Loader([Resources.Fish], Resources.City)

export { Resources, ResourceLoader }