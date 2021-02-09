import 'phaser';

let buttonEnter;

export default class Instructions extends Phaser.Scene {
    constructor() {
        super('Instructions')
    }

    preload() {
        this.load.image('background_image', 'assets/backgrounds/background.png')
        buttonEnter = this.input.keyboard.addKey('enter')
    }

    create() {
         this.add.image(0, 0, 'background_image').setOrigin(0).setScale(13)
        let title_text = this.add.text(90, 30, `Welcome to Don't Feed Ducks Bread!`, { fontFamily: 'Georgia, serif', fontSize: '40px', color: '#000000', stroke: '#fff', strokeThickness: 2 })
        this.add.text(60, 90, `You've decided to vist your favorite pond and enjoy a relaxing day of feeding duck. But Oh no! You forgot to sort your bag and along with the tasty treats your duck friends love are some nasty foods that could make them sick! Choose carefully!`, { fontFamily: 'Georgia, serif', fontSize: '20px', color: '#000000', stroke: '#fff', strokeThickness: 2, wordWrap: {
            width: 700,
            callback: null,
            callbackScope: null,
            useAdvancedWrap: false
        },})

        let instruction_text = this.add.text(60, 200, `Instructions: Press the up arrow to feed the duck, Press the down key to put away a snack, press the space bar to pull out a new snack`, { fontFamily: 'Georgia, serif', fontSize: '20px', color: '#000000', stroke: '#fff', strokeThickness: 2, wordWrap: {
            width: 700,
            callback: null,
            callbackScope: null,
            useAdvancedWrap: false
        } })

        let last_text = this.add.text(90, 300, `Good luck, have fun, and remember: Don't Feed Ducks Bread!`, { fontFamily: 'Georgia, serif', fontSize: '40px', color: '#000000', stroke: '#fff', strokeThickness: 2, wordWrap: {
            width: 700,
            callback: null,
            callbackScope: null,
            useAdvancedWrap: false
        } })


        let start = this.add.text(200, 500, 'Start', {
            fontFamily: 'Georgia, serif',
            fontSize: '40px',
            color: '#000',
            stroke: '#fff',
            strokeThickness: 2
        }).setInteractive({useHandCursor: true}).on('pointerdown', () =>{
            this.scene.start('MainScene');
        })
    }

    update() {

    }
}
