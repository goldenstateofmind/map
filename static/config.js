var A = {}
A.basemaps = {
  GoldenState: {
    // started from "Outdoors jmk"
    styleUrl: 'mapbox://styles/jhnklly/ckc5h67tn0axv1jq937ov05wf',
  },
  Outdoors: {
    styleUrl: 'mapbox://styles/mapbox/outdoors-v11',
  },
  Satellite: {
    styleUrl: 'mapbox://styles/mapbox/satellite-streets-v11',
  },
}

/*  'National Map': {
    url: '',
    credit: '',
  },
  'Natural Atlas': {
    url: '',
    credit: '',
  },*/

/* 
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: {
    version: 8,
    sources: {
      'raster-tiles': {
        type: 'raster',
        tiles: [
          'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
        ],
        tileSize: 256,
        attribution:
          'Map tiles by <a target="_top" rel="noopener" href="http://stamen.com">Stamen Design</a>, under <a target="_top" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_top" rel="noopener" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>',
      },
    },
    layers: [
      {
        id: 'simple-tiles',
        type: 'raster',
        source: 'raster-tiles',
        minzoom: 0,
        maxzoom: 22,
      },
    ],
  },
  center: [-74.5, 40], // starting position
  zoom: 2, // starting zoom
})
 */

/*
https://gis.stackexchange.com/questions/211027/vector-map-multiple-local-sources-with-mapbox-gl

You can easily combine multiple tiles in your JSON GL style.

Just define more identifiers in the sources section and point them to different tiles (http or mbtiles).

"sources": {
  "osm2vectortiles": {
    "type": "vector",
    "url": "https://osm2vectortiles.tileserver.com/v2.json"
  },
  "naturalearth": {
    "type": "vector",
    "maxzoom": 7,
    "tiles": [
       "http://naturalearthtiles.org/tiles/natural_earth.vector/{z}/{x}/{y}.pbf"
    ]
  }
},
This is supported in all MapBox SDKs (JavaScript / Android / iOS / ..)

Our TileServer-GL will also rasterize such styles into raster tiles and give you sample viewers out of the box for such JSON style. See: http://blog.klokantech.com/2016/08/tileserver-gl-maps-with-gl-json-styles.html

shareimprove this answer
answered Sep 21 '16 at 6:45

Klokan Technologies
*/
