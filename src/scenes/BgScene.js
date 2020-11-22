import 'phaser';

export default class BgScene extends Phaser.Scene {
  constructor() {
    super('BgScene');
  }

  preload() {
    // Preload Sprites
    // << LOAD SPRITE HERE >>
    this.load.image('background', 'assets/backgrounds/background.png')
    this.load.image('pond', 'assets/backgrounds/pond.png')

  }

  create() {
    // Create Sprites
    // << CREATE SPRITE HERE >>
    this.add.image(0, 0, 'background').setOrigin(0).setScale(13)
    this.add.image(400, 250, 'pond').setScale(13)

  }
}
