class Plane extends Phaser.GameObjects.Sprite {
    bullet: any='';
    obj: any='';
    shotTime: number=0;
    shotArr: any= new Array();
    xSpeed: number=0;
    ySpeed: number=0;
    life: boolean=true;
    constructor(scene:Phaser.Scene, x:number, y:number, key:string) {
      super(scene, x, y, key);
      scene.add.existing(this);
      this.obj = scene
      this.setOrigin(0, 0);
    }
    
    shot(): void{
        
    }
    move():void{

    }
    overFlg():boolean{
        if( this.x > 360 || this.x < 0 || this.y < 0 || this.y > 560){
            return true
        }
        return false
    }
    collision(targe:any):boolean{
        
        if(this.x+this.width<targe.x){
            // console.log(this.x+this.width,targe.x)
            return false
        } 
        if (targe.x+targe.width<this.x){
            return false
        }
        if (this.y+this.height<targe.y){
            return false
        }
        if(targe.y+targe.height<this.y){
            return false
        }
       
        return true
    }
  }
  export default Plane;