import Bullet from './Bullet'
import Plane from './Plane'
class Enemy extends Plane {
    static enemyShotArr = new Array();
    constructor(scene:Phaser.Scene, x:number, y:number, key:string) {
      super(scene, x, y, key);
      this.xSpeed = 5;
      this.ySpeed = 5;
      scene.add.existing(this);
    }
    
    shot(): void{
        this.shotTime++;
        if(this.shotTime>=20){
          this.shotTime=0;
          this.bullet = new Bullet(this.obj,this.x+this.width/2-9,this.y+25, 'enemybullet',10)
          Enemy.enemyShotArr.unshift(this.bullet)
        }
        
    }
    move():void{
        // this.x+=this.xSpeed;
        // console.log(this.y)
        this.y+= this.ySpeed;
        if (this.overFlg()){
            this.life = false
        }
    }
    
  }
  export default Enemy;