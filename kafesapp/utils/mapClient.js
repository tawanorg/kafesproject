import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';

export const clientOptions = {
  accessToken:
    'pk.eyJ1IjoidHRhd2FuYyIsImEiOiJjano0NXJkbXcwYXZjM2ptYml4Z28ycDhhIn0.IN0ejAgsvYk_gLqNdLIY4A',
};
const directionsClient = MapboxDirectionsFactory(clientOptions);

export {directionsClient};
