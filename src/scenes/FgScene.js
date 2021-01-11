import Hand from "../entity/Hand";
import Ground from '../entity/Ground'
import Duck from "../entity/Duck";
import Snack from '../entity/Snack';
import snacks from '../snacks/snack.js'

const randomIndex = Math.floor(Math.random() * snacks.length)
const snack = snacks[randomIndex]
const snackName = snack.name
const snackImg = snack.img


export default class FgScene extends Phaser.Scene {
  constructor() {
    super('FgScene');
  }

  preload() {
    // Preload Sprites
    // << LOAD SPRITES HERE >>
    this.randomIndex = Math.floor(Math.random() * snacks.length)
    this.snackIndex = snacks[this.randomIndex]
    this.snackName = this.snackIndex.name
    this.snackImg = this.snackIndex.img
    this.textures.remove('snack')
    this.anims.remove('onHand')
    console.log(this.textures)
    this.load.image('background', 'assets/backgrounds/background.png')
    this.load.image('pond', 'assets/backgrounds/pond.png')
    this.load.image('ground', 'assets/sprites/pondBase1.png')
    this.load.spritesheet('duck', 'assets/spriteSheets/duck.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('hand', 'assets/spriteSheets/hand.png',{
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('snack', this.snackImg, {
      frameWidth: 64,
      frameHeight:64
    })
    this.load.spritesheet('angryDuck', 'assets/spriteSheets/angryDuck.png', {
      frameWidth: 64,
      frameHeight:64
    })
    this.load.spritesheet('happyDuck', 'assets/spriteSheets/happyDuck.png', {
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
    this.add.image(0, 0, 'background').setOrigin(0).setScale(13)
    this.add.image(400, 250, 'pond').setScale(13)
    this.createGroups()
    this.hand = new Hand(this, 300, 530, 'hand').setScale(2)
    this.duck = new Duck(this, 400, 400, 'duck').setScale(2)
    // this.ground = new Ground(this, 400, 540, 'ground').setScale(2)
    this.snack = new Snack(this, 300, 538, 'snack').setScale(2)
    this.cursors = this.input.keyboard.createCursorKeys()

    this.add.text(200, 580, this.snackName, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif,', color: 'black', fontSize: '3000px', backgroundColor: 'white' })
    this.createAnimations()




    // Create sounds
    // << CREATE SOUNDS HERE >>
    // this.jumpSound = this.sound.add('jump')

    // << CREATE COLLISIONS HERE >>
    this.physics.add.collider(this.duck, this.groundGroup)
    this.physics.add.collider(this.hand, this.groundGroup)
    this.physics.add.collider(this.snack, this.groundGroup)

  }


  update(time, delta) {
    // << DO UPDATE LOGIC HERE >>
    this.hand.update(this.cursors)
    this.snack.update(this.cursors)
    if(this.cursors.up.isDown){
      if(this.snackIndex.good === false){
        // this.anims.pauseAll()
        this.duck.play('madDuck', true)
        console.log(this.duck.anims)
      }else{
        this.duck.play('eat', true)
      }
    }else if(this.cursors.down.isDown){
      if(this.snackIndex.good === false){
        this.duck.play('gladDuck', true)
      }else{
        this.duck.play('madDuck', true)
      }
    }else{
     this.duck.play('idleDuck', true)
    }
    if(this.cursors.up.isDown || this.cursors.down.isDown){
      this.add.text(500, 560, this.snackIndex.facts, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif,', color: 'black', fontSize: '3000px', backgroundColor: 'white', wordWrap: { width: 200 } })
    }
    if(this.snack.y<=450){
      this.snack.disableBody(true,true)
    }
    if(this.cursors.down.isDown){
      this.snack.disableBody(true, true)
    }

    this.resetGame()
  }

  resetGame(){
    if(this.cursors.space.isDown){
      this.snack.destroy()
      this.scene.restart()
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
      repeat: 2
    })
    this.anims.create({
      key: 'idleDuck',
      frames: this.anims.generateFrameNumbers
      ('duck', { start: 4, end: 6}),
      frameRate: 3
    })
    this.anims.create({
      key: 'idleHand',
      frames: this.anims.generateFrameNumbers
      ('hand', { start: 11, end: 14}),
      frameRate:3,
    })
    this.anims.create({
          key: 'onHand',
          frames: this.anims.generateFrameNumbers('snack', { start: 1, end: 3 }),
          frameRate: 3
    });
    this.anims.create({
      key: 'madDuck',
      frames: this.anims.generateFrameNumbers('angryDuck', {start: 1, end: 3}),
      frameRate: 3,
      repeat: -1
    })
    this.anims.create({
      key: 'gladDuck',
      frames: this.anims.generateFrameNumbers('happyDuck', {start: 1, end: 3}),
      frameRate: 3,
      repeat: -1
    })
    ;
  }
}
