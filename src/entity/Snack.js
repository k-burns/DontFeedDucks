import 'phaser';

export default class Snack extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);

    // << INITIALIZE PLAYER ATTRIBUTES HERE >>
    this.scene = scene
    this.scene.add.existing(this)
    this.scene.physics.world.enable(this)
    this.updateMovement = this.updateMovement.bind(this)
  }
  update(cursors) {
   this.updateMovement(cursors)
  }

  updateMovement(cursors){
    if(cursors.right.isDown){
      this.setVelocityY(800)
    }else{
      this.play('onHand', true)
    }

  }
}
