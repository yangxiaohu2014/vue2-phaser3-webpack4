import Vue from "vue";
import Component from "vue-class-component";
// @ts-ignore
import Game from "@/game/index" //游戏的ts文件

@Component
export default class HelloWorld extends Vue {
  template: string = `
      <div class="hello">
       <div id="cvs"></div>
      </div>
  `;
  msg: string = "typescript + vue + phaser3";
  say(): void {
    alert("这是一个vue + phaser3 + typescript的demo");
  }
  mounted(): void {
      new Game()
  }
}
