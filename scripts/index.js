class Example extends Phaser.Scene {
  preload() {
    this.load.image(
      'tristam-ground',
      'assets/spritesheets/tiles/tristam-ground.png',
    );
    this.load.tilemapTiledJSON('tristam', 'assets/maps/tristam.json');

    this.load.spritesheet('druid', 'assets/spritesheets/characters/druid.gif', {
      frameWidth: 48,
      frameHeight: 80,
    });
  }

  createMap() {
    this.map = this.add.tilemap('tristam');
    const ground = this.map.addTilesetImage('tristam-ground', 'tristam-ground');
    const layer1 = this.map.createLayer('ground', ground);

    // this.physics.world.bounds.width = this.map.widthInPixels;
    // this.physics.world.bounds.height = this.map.heightInPixels;
  }

  create() {
    this.createMap();
    this.createPlayer();
  }

  createPlayer() {
    const playerSprite = this.add.sprite(0, 0, 'druid');
    playerSprite.setDepth(2);
    playerSprite.scale = 3;
    this.cameras.main.startFollow(playerSprite);
    this.cameras.main.roundPixels = true;
    // const player = new Phaser.Player(
    //   playerSprite,
    //   new Phaser.Math.Vector2(6, 6),
    // );

    const offsetX = 80;
    const offsetY = 80;
    const tilePos = new Phaser.Math.Vector2(6, 6);

    playerSprite.setOrigin(0.5, 1);
    playerSprite.setPosition(
      tilePos.x * 80 + offsetX,
      tilePos.y * 80 + offsetY,
    );
    playerSprite.setFrame(55);
  }

  updateCamera() {
    // limit camera to map
    this.cameras.main.setBounds(
      0,
      0,
      this.map.widthInPixels,
      this.map.heightInPixels,
    );
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true; // avoid tile bleed
  }

  update(_time, delta) {
    console.log(delta);

    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
      this.movePlayer('left');
    } else if (cursors.right.isDown) {
      this.movePlayer('right');
    } else if (cursors.up.isDown) {
      this.movePlayer('up');
    } else if (cursors.down.isDown) {
      this.movePlayer('down');
    }
  }

  movePlayer(direction) {
    console.log(direction);

    if (!this.isMoving()) {
      this.startMoving(direction);
    }
  }

  isMoving() {
    return this.movementDirection != 'none';
  }

  startMoving(direction) {
    this.movementDirection = direction;
  }
}

/**
 * @type {Phaser.Types.Core.GameConfig}
 */
const config = {
  type: Phaser.AUTO,
  // type: Phaser.WEBGL,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: Example,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {},
};

const game = new Phaser.Game(config);
