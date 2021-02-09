import 'phaser';

let buttonEnter;

export default class StartScene extends Phaser.Scene {
    constructor() {
        super({key: 'StartScene'})
    }

    preload() {
        this.load.image('background', 'assets/backgrounds/background.png')
        buttonEnter = this.input.keyboard.addKey('enter')
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0).setScale(13)
        let title_text = this.add.text(90, 110, `Don't Feed Ducks Bread!`, { fontFamily: 'Georgia, serif', fontSize: '40px', color: '#000000', stroke: '#fff', strokeThickness: 2 })


        let start = this.add.text(200, 350, 'Start', {
            fontFamily: 'Georgia, serif',
            fontSize: '40px',
            color: '#000',
            stroke: '#fff',
            strokeThickness: 2
        }).setInteractive({useHandCursor: true}).on('pointerdown', () =>{
            this.scene.start('Instructions');
        })
    }

    update() {

    }
}
