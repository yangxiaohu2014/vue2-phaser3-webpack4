import "phaser";
import CONFIG from "./tool/Config"
import GameScene from "./scene/GameScene"

const config: GameConfig = {
  width: CONFIG.WIDTH,
  height: CONFIG.HEIGHT,
  type: Phaser.AUTO,
  parent: "cvs",
  scene: [GameScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  }
};
export default class Index extends Phaser.Game {
  constructor() {
    super(config);
  }
}