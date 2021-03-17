import 'phaser';
import StartScene from './scenes/StartScene'
import config from './config/config'

import FgScene from './scenes/FgScene'
import MainScene from './scenes/MainScene'
import Instructions from './scenes/Instructions'

class Game extends Phaser.Game {
  constructor() {
    super(config);

    this.scene.add('FgScene', FgScene)
    this.scene.add('MainScene', MainScene)
    this.scene.add('StartScene', StartScene)
    this.scene.add('Instructions', Instructions)
    this.scene.start('StartScene')
  }
}

window.onload = function () {
  window.game = new Game();
}
