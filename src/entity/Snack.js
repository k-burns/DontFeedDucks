import 'phaser';

export default class Snack extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);

    this.scene = scene
    this.scene.add.existing(this)
    this.scene.physics.world.enable(this)
    this.updateMovement = this.updateMovement.bind(this)
  }
  update(cursors) {
   this.updateMovement(cursors)
  }

  updateMovement(cursors){
    if(cursors.up.isDown){
      this.setVelocityY(-400)
    }else{
      this.play('onHand', true)
    }

  }
}
