import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HelloWorld extends Vue {
  msg: string = "typescript + vue + phaser3";
  say(): void {
    alert("这是一个vue + phaser3 + typescript的demo");
  }
}
