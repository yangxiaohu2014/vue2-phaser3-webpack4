

class Map extends Phaser.GameObjects.Sprite {
  speed: number= 0
  constructor(scene:Phaser.Scene, x:number, y:number, key:string) {
    super(scene, x, y, key);
    scene.add.existing(this);
    this.setOrigin(0, 0);
  }

  move(): void{
    this.y++
    if(this.y>=682){
      this.y=-682;
    }
  }
}
export default Map;
