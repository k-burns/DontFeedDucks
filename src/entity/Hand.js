import 'phaser';

export default class Hand extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);

    // << INITIALIZE PLAYER ATTRIBUTES HERE >>
    this.scene = scene
    this.scene.add.existing(this)
    this.scene.physics.world.enable(this)
  }

  // Check which controller button is being pushed and execute movement & animation
  update(cursors) {
    // << INSERT CODE HERE >>
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
    // if(!this.armed){
    //   this.anims.play('idleUnarmed')
    // } else {
    //   this.anims.play('idleArmed')
    // }
  }

  // updateJump(cursors, jumpSound) {
  //   if (cursors.up.isDown && this.body.touching.down){
  //     this.setVelocityY(-800)
  //     jumpSound.play()
  //   }
  // }

  // updateInAir() {
  //   if (!this.body.touching.down){
  //     this.play('jump')
  //   }
  // }
}
