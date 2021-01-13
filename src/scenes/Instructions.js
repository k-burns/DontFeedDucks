import 'phaser';

let buttonEnter;

export default class StartScene extends Phaser.Scene {
    constructor() {
        super({key: 'StartScene'})
    }

    preload() {
        this.load.image('background_image', 'assets/backgrounds/pond.png')
        buttonEnter = this.input.keyboard.addKey('enter')
    }

    create() {
        let background = this.add.sprite(0, 0, 'background_image')
        background.setOrigin(0, 0)
        let title_text = this.add.text(90, 110, `Welcome to Don't Feed Ducks Bread!`, { fontFamily: 'Georgia, serif', fontSize: '40px', color: '#000000', stroke: '#fff', strokeThickness: 2 })
        let desciption_text = this.add.text(90, 110, `You've decided to vist your favorite pond and enjoy a relaxing day of feeding duck. But Oh no! You forgot to sort your bag and along with the tasty treats your duck friends love are some nasty foods that could make them sick! Choose carefully!`, { fontFamily: 'Georgia, serif', fontSize: '40px', color: '#000000', stroke: '#fff', strokeThickness: 2 })

        let instruction_text = this.add.text(90, 110, `Instructions: Press the up arrow to feed the duck, Press the down key to put away a snack, press the space bar to pull out a new snack`, { fontFamily: 'Georgia, serif', fontSize: '40px', color: '#000000', stroke: '#fff', strokeThickness: 2 })

        let last_text = this.add.text(90, 110, `Good luck, have fun, and remember: Don't Feed Ducks Bread!`, { fontFamily: 'Georgia, serif', fontSize: '40px', color: '#000000', stroke: '#fff', strokeThickness: 2 })


        let start = this.add.text(200, 350, 'Start', {
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
