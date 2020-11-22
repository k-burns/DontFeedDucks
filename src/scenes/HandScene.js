import Snack from '../entity/Snack';
import Ground from '../entity/Ground'
import snacks from '../snacks/snack.js'

const randomIndex = Math.floor(Math.random() * snacks.length)
const snack = snacks[randomIndex]
const snackName = snack.name
const snackImg = snack.img



export default class HandScene extends Phaser.Scene {
  constructor() {
    super('HandScene');
  }

  preload() {
    // Preload Sprites
    // << LOAD SPRITES HERE >>
    this.load.image('handBase', 'assets/sprites/pondBase.png')
    this.load.spritesheet('snack', snackImg, {
      frameWidth: 64,
      frameHeight:64
    })

    // Preload Sounds
    // << LOAD SOUNDS HERE >>
    // this.load.audio('jump', 'assets/audio/jump.wav')
  }

  create() {
    // Create game entities
    // << CREATE GAME ENTITIES HERE >>

    // this.ground = new Ground(this, 400, 540, 'ground').setScale(2)
    console.log(snackImg)

    this.createGroups()
    this.snack = new Snack(this, 300, 559, 'snack').setScale(.75)
    this.add.text(10, 580, snackName, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif,', color: 'black', fontSize: '3000px', backgroundColor: 'white' })
    this.cursors = this.input.keyboard.createCursorKeys()
    this.createAnimations()

    // Create sounds
    // << CREATE SOUNDS HERE >>
    // this.jumpSound = this.sound.add('jump')

    // << CREATE COLLISIONS HERE >>
    this.physics.add.collider(this.snack, this.groundGroup)

  }


  update(time, delta) {
    // << DO UPDATE LOGIC HERE >>
    this.snack.update(this.cursors)
  }


  createGroups() {
    this.groundGroup = this.physics.add.staticGroup({ classType: Ground });
    this.createGround(300, 640);
  }
  createGround (x, y) {
    this.groundGroup.create(x, y, 'handBase')
  }
  createAnimations() {
    this.anims.create({
      key: 'onHand',
      frames: this.anims.generateFrameNumbers('snack', { start: 1, end: 3 }),
      frameRate: 3
    });

    ;
  }

  // collectGun(player, gun) {
  //   gun.disableBody(true, true)
  //   this.player.armed = true
  // }


}
