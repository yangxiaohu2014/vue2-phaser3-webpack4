import Plane from './Plane'
class Bullet extends Plane {
    
    private speed: number=0;
    // private life: boolean=true;
    constructor(scene:Phaser.Scene, x:number, y:number, key:string, speed:number) {
      super(scene, x, y, key);
      scene.add.existing(this);
      this.setOrigin(0, 0);
      this.speed = speed
    }
    
    move(): void{
        this.y+=this.speed
        if( this.x > 360 || this.x < 0 || this.y < 0 || this.y > 560){
            this.life = false
        }
    }
    
  }
  export default Bullet;