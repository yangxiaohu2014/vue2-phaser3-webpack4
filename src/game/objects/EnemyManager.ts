import Enemy from './Enemy';
let EnmyManager :any = {
    addSpeed: 0,
    enemyArr: [],
    addEnemy: function (obj:any){
        this.addSpeed++;
        if (this.addSpeed>20){
            this.addSpeed=0
            let enemyX = Math.random()*320
            enemyX = enemyX>64?enemyX-64:enemyX
            this.enemy = new Enemy(obj, enemyX, 5,'enemy')
            this.enemyArr.unshift(this.enemy)
        }
    },
    enemyMove: function(){
        for(let i=0; i<this.enemyArr.length; i++){
            let enemy = this.enemyArr[i];
            if (!enemy.life){
                this.enemyArr.splice(i,1)
                enemy.destroy()
            } else {
                enemy.move();
                enemy.shot();
            }
        }
    },
    enemyBulletMove: function() {
        for(let i=0; i<Enemy.enemyShotArr.length; i++){
        let bullet = Enemy.enemyShotArr[i];
        if (!bullet.life){
            Enemy.enemyShotArr.splice(i,1)
            bullet.destroy()
        } else {
            bullet.move();
        }
        }
    }
}
export default EnmyManager;