import "phaser";
import CONFIG from "./tool/Config";
import GameScene from "./scene/GameScene";

const config: GameConfig = {
  width: 320,
  height: 682,
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
export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}
window.onload = () => {
  new Game(config);
};
