import {Scene} from 'phaser'
import sky from '@/game/assets/sky.png';
import bomb from '@/game/assets/bomb.png';
import thud_mp3 from '@/game/assets/thud.mp3';
import thud_ogg from '@/game/assets/thud.ogg';


export default class BootScene extends Scene {
    constructor() {
        super({key: 'BootScene'})
    }

    preload() {
        this.load.image('sky', sky)
        this.load.image('bomb', bomb)
        this.load.audio('thud', [thud_mp3, thud_ogg])
    }

    create() {
        this.scene.start('PlayScene')
    }
}
