import 'phaser';

export default class Hand extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);

    this.scene = scene
    this.scene.add.existing(this)
    this.scene.physics.world.enable(this)
  }

  update(cursors) {
    this.updateMovement(cursors)
  }
  updateMovement(cursors) {
    if(cursors.up.isDown) {
        this.play('give', true)
    }else if (cursors.down.isDown) {
      this.play('take', true)
    }else{
      this.play('idleHand', true)
    }
  }
}
