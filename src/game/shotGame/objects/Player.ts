import Bullet from './Bullet'
import Plane from './Plane'
class Player extends Plane {
    constructor(scene:Phaser.Scene, x:number, y:number, key:string) {
      super(scene, x, y, key);
      scene.add.existing(this);
    }
    
    shot(): void{
      this.shotTime++;
      if(this.shotTime>=20){
        this.shotTime=0;
        this.bullet = new Bullet(this.obj,this.x+this.width/2-3,this.y-50, 'bullet',-5)
        this.shotArr.unshift(this.bullet)
      } 
    }
    playerMove(): void{
      
    }
    
  }
  export default Player;