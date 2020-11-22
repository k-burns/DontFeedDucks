import 'phaser';

export default class Duck extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);

    // << INITIALIZE PLAYER ATTRIBUTES HERE >>
    this.scene = scene
    this.scene.add.existing(this)
    this.scene.physics.world.enable(this)
  }
  update(cursors) {
   this.updateMovement(cursors)
  }

  updateMovement(cursors){
    if(cursors.up.isDown){
      this.play('eat', true)
    }else{
      this.play('idleDuck', true)
    }
  }
}

