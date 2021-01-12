import 'phaser';

let buttonEnter;

export default class StartScene extends Phaser.Scene {
    constructor() {
        super({key: 'StartScene'})
    }

    preload() {
        this.load.image('background_image', 'assets/backgrounds/spriteSheets/startScene_background.png')
        buttonEnter = this.input.keyboard.addKey('enter')
    }

    create() {
        let background = this.add.sprite(0, 0, 'background_image')
        background.setOrigin(0, 0)
        let title_text = this.add.text(90, 110, `Don't Feed Ducks Bread!`, { fontFamily: 'Georgia, serif', fontSize: '40px', color: '#000000', stroke: '#fff', strokeThickness: 2 })


        let start = this.add.text(200, 350, 'Start', {
            fontFamily: 'Georgia, serif',
            fontSize: '40px',
            color: '#000',
            stroke: '#fff',
            strokeThickness: 2
        }).setInteractive({useHandCursor: true}).on('pointerdown', () =>{
            this.scene.start('MainScene');
        })
        TweenHelper.flashElement(this, start);
    }

    update() {

    }
}

export class TweenHelper {
    static flashElement(scene, element, repeat = true, easing = 'Linear', overallDuration = 1500, visiblePauseDuration = 500) {
        if (scene && element) {
            let flashDuration = overallDuration - visiblePauseDuration / 2;

            scene.tweens.timeline({
                tweens: [
                    {
                        targets: element,
                        duration: 0,
                        alpha: 0.2,
                        ease: easing
                    },
                    {
                        targets: element,
                        duration: flashDuration,
                        alpha: 1,
                        ease: easing
                    },
                    {
                        targets: element,
                        duration: visiblePauseDuration,
                        alpha: 1,
                        ease: easing
                    },
                    {
                        targets: element,
                        duration: flashDuration,
                        alpha: 0.2,
                        ease: easing,
                        onComplete: () => {
                            if (repeat === true) {
                                this.flashElement(scene, element);
                            }
                        }
                    }
                ]
            });
        }
    }
}
