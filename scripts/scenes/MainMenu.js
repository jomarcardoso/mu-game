export class MainMenu extends Phaser.Scene {
  /** @type {Tilemaps.Tilemap} */
  map;
  // /** @type {Tilemaps.Tileset} */
  // tileset;
  // /** @type {Tilemaps.TilDynamicTilemapLayereset} */
  // wallsLayer;
  // /** @type {Tilemaps.DynamicTilemapLayer} */
  // groundLayer;

  constructor() {
    super('MainMenu');
  }

  preload() {
    this.load.image(
      {
        key: 'tiles-tristam-ground',
        url: 'tilemaps/tiles/tristam-ground.png',
      },
      // {
      //   key: 'tiles-tristam-walls',
      //   url: 'tilemaps/tiles/tristam-walls.png',
      // },
    );
    this.load.tilemapTiledJSON('tristam', 'tilemaps/maps/tristam.json');
  }

  create() {
    this.initMap();
  }

  initMap() {
    this.map = this.make.tilemap({
      key: 'tristam',
      tileWidth: 160,
      tileHeight: 80,
    });
    // this.tileset = this.map.addTilesetImage('tristam', 'tiles-tristam-ground');
    // this.groundLayer = this.map.createDynamicLayer(
    //   'Ground',
    //   this.tileset,
    //   0,
    //   0,
    // );
    // this.wallsLayer = this.map.createDynamicLayer('Walls', this.tileset, 0, 0);
    // this.physics.world.setBounds(
    //   0,
    //   0,
    //   this.wallsLayer.width,
    //   this.wallsLayer.height,
    // );
  }
}
