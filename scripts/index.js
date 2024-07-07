class Example extends Phaser.Scene {
  preload() {
    // this.load.setBaseURL('https://labs.phaser.io');

    // this.load.image('sky', 'assets/skies/space3.png');
    // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    // this.load.image('red', 'assets/particles/red.png');
    this.load.image(
      'tristam-ground',
      'assets/tilemaps/tiles/tristam-ground.png',
    );
    this.load.tilemapTiledJSON('tristam', 'assets/tilemaps/maps/tristam.json');
  }

  create() {
    const map = this.make.tilemap({ key: 'tristam' });
    // const terrainset = map.addTilesetImage('tristam-ground');
    // const objectsset = map.addTilesetImage('objects');
    // const collisions = map.addTilesetImage('collisions');
    // map.createStaticLayer('Tile Layer', [objectsset, terrainset]);
    // map.createStaticLayer('Tile Layer 2', [objectsset, terrainset]);
    // this.colLayer = map.createStaticLayer('Collisions Layer', [collisions]);
    // this.colLayer.visible = false;
    // map.setCollision([0, 1]);

    // this.physics.world.bounds.width = map.widthInPixels;
    // this.physics.world.bounds.height = map.heightInPixels;
    this.map = map;
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: Example,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);
