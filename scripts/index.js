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

    this.load.image('tiles', 'assets/tilemaps/tiles/tristam-ground.png');
    this.load.json('map', 'assets/tilemaps/maps/tristam.json');
  }

  create() {
    // this.make
    //   .tilemap({ key: 'tristam' })
    //   .createLayer('ground', 'tristam-ground');
    // const objectsset = map.addTilesetImage('objects');
    // const collisions = map.addTilesetImage('collisions');
    // map.createStaticLayer('Tile Layer', [objectsset, terrainset]);
    // map.createStaticLayer('Tile Layer 2', [objectsset, terrainset]);
    // this.colLayer = map.createStaticLayer('Collisions Layer', [collisions]);
    // this.colLayer.visible = false;
    // map.setCollision([0, 1]);

    // this.physics.world.bounds.width = map.widthInPixels;
    // this.physics.world.bounds.height = map.heightInPixels;

    // this.map = this.make.tilemap({ key: 'tristam' });
    // const terrainset = this.map.addTilesetImage('tristam-ground');
    // const ground = this.map.createLayer('ground', terrainset);

    //  Parse the data out of the map
    const data = this.cache.json.get('map');

    console.log(data);

    const tilewidth = data.tilewidth;
    const tileheight = data.tileheight;

    const tileWidthHalf = tilewidth / 2;
    const tileHeightHalf = tileheight / 2;

    const layer = data.layers[0].data;

    const mapwidth = data.layers[0].width;
    const mapheight = data.layers[0].height;

    const centerX = mapwidth * tileWidthHalf;
    const centerY = 80;

    let i = 0;

    for (let y = 0; y < mapheight; y++) {
      for (let x = 0; x < mapwidth; x++) {
        const id = layer[i] - 1;

        console.log(x, y);

        const tx = (x - y) * tileWidthHalf;
        const ty = (x + y) * tileHeightHalf;

        const tile = this.add.image(centerX + tx, centerY + ty, 'tiles', id);

        tile.depth = centerY + ty;

        i++;
      }
    }

    // const map = this.add.tilemap('tristam');
    // const ground = map.addTilesetImage('tristam-ground', 'tristam-ground');
    // const layer1 = map.createLayer('ground', ground);
  }
}

const config = {
  type: Phaser.AUTO,
  // type: Phaser.WEBGL,
  width: 800,
  height: 600,
  scene: Example,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);
