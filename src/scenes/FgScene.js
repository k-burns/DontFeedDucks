import Hand from "../entity/Hand";
import Ground from '../entity/Ground'
import Duck from "../entity/Duck";


export default class FgScene extends Phaser.Scene {
  constructor() {
    super('FgScene');
  }

  preload() {
    // Preload Sprites
    // << LOAD SPRITES HERE >>
    this.load.image('ground', 'assets/sprites/pondBase.png')
    this.load.spritesheet('duck', 'assets/spriteSheets/duck.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('hand', 'assets/spriteSheets/hand.png',{
      frameWidth: 64,
      frameHeight: 64
    })
    // Preload Sounds
    // << LOAD SOUNDS HERE >>
    // this.load.audio('jump', 'assets/audio/jump.wav')
  }

  create() {
    // Create game entities
    // << CREATE GAME ENTITIES HERE >>
    this.createGroups()
    this.hand = new Hand(this, 300, 559, 'hand').setScale()
    this.duck = new Duck(this, 400, 400, 'duck').setScale(2)
    // this.ground = new Ground(this, 400, 540, 'ground').setScale(2)

    this.cursors = this.input.keyboard.createCursorKeys()
    this.createAnimations()


    // Create sounds
    // << CREATE SOUNDS HERE >>
    // this.jumpSound = this.sound.add('jump')

    // << CREATE COLLISIONS HERE >>
    this.physics.add.collider(this.duck, this.groundGroup)
    this.physics.add.collider(this.hand, this.groundGroup)

  }


  update(time, delta) {
    // << DO UPDATE LOGIC HERE >>
    this.hand.update(this.cursors)
    this.duck.update(this.cursors)
    if(this.cursors.up.isDown || this.cursors.down.isDown){
      this.add.text(100, 580, 'hello', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif,', color: 'black', fontSize: '3000px', backgroundColor: 'white' })
    }
  }


  createGroups() {
    this.groundGroup = this.physics.add.staticGroup({ classType: Ground });
    this.createGround(300, 631);
    this.createGround(400, 540);
    this.createGround(50, 631)
  }
  createGround (x, y) {
    this.groundGroup.create(x, y, 'ground')
  }
  createAnimations() {
    this.anims.create({
      key: 'give',
      frames: this.anims.generateFrameNumbers('hand', { start: 7, end: 11 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'take',
      frames: this.anims.generateFrameNumbers
      ('hand', { start: 1, end: 7}),
      frameRate: 10,
    });
    this.anims.create({
      key: 'eat',
      frames: this.anims.generateFrameNumbers
      ('duck', { start: 1, end: 3}),
      frameRate: 10,
    })
    this.anims.create({
      key: 'idleDuck',
      frames: this.anims.generateFrameNumbers
      ('duck', { start: 4, end: 6}),
      frameRate: 3,
    })
    this.anims.create({
      key: 'idleHand',
      frames: this.anims.generateFrameNumbers
      ('hand', { start: 11, end: 14}),
      frameRate:3,
    })
    ;
  }

  // collectGun(player, gun) {
  //   gun.disableBody(true, true)
  //   this.player.armed = true
  // }


}
