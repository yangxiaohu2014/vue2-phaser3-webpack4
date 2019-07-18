class ScaleManager {
  private width: number = 0; //设计稿的宽
  private height: number = 0; //设计稿的高
  private canvasW: number = 0; //canvas缩放后实际的宽
  private canvasH: number = 0; //canvas缩放后实际的高
  private pmdir: string = ""; //标记当前是横屏还是竖屏
  private ResolutionPolicy: string = "EXACT_FIT"; //缩放模式(暂时只提供EXACT_FIT、SHOW_ALL)
  private el: any = ""; //存放canvas的容器

  constructor(width: number, height: number, el: any) {
    this.width = width;
    this.height = height;
    this.el = el;
    this.el.style.position = "absolute";
    this.el.style.transformOrigin = "0 0 0";
    this.addEvent();
  }

  //获取屏幕方向
  getDir(): string {
    return this.pmdir;
  }

  //获取缩放模式
  getResolutionPolicy(): string {
    return this.ResolutionPolicy;
  }

  //设置缩放模式
  setResolutionPolicy(rp: string): void {
    this.ResolutionPolicy = rp;
    this.scaleGame(this.pmdir);
  }

  //缩放dom元素的Transform
  setTransform(angle: number, scale1: number, scale2: number): void {
    this.el.style.transform =
      "rotate(" + angle + "deg) scale(" + scale1 + "," + scale2 + ")";
  }

  //缩放画布、旋转画布
  scaleGame(dir: string): void {
    this.pmdir = dir;
    let screenW = document.documentElement.clientWidth;
    let screenH = document.documentElement.clientHeight;
    let scalebf = screenH / screenW;
    switch (dir) {
      //竖屏
      case "vertical":
        let scaleX1 = screenH / this.width;
        let scaleY1 = screenW / this.height;
        switch (this.ResolutionPolicy) {
          case "SHOW_ALL":
            let nowScale = scaleX1 > scaleY1 ? scaleY1 : scaleX1;
            this.setTransform(90, nowScale, nowScale);
            this.canvasW = this.width * nowScale;
            this.canvasH = this.height * nowScale;
            this.el.style.top = "50%";
            this.el.style.left = "50%";
            this.el.style.marginLeft = this.canvasH / 2 + "px";
            this.el.style.marginTop = -this.canvasW / 2 + "px";
            break;
          case "EXACT_FIT":
            this.setTransform(90, scaleX1, scaleY1);
            this.canvasW = this.width * scaleX1;
            this.canvasH = this.height * scaleY1;
            this.el.style.top = "50%";
            this.el.style.left = "50%";
            this.el.style.marginLeft = this.canvasH / 2 + "px";
            this.el.style.marginTop = -this.canvasW / 2 + "px";
            break;
        }
        break;
      //横屏
      case "horizontal":
        var scaleX2 = screenW / this.width;
        var scaleY2 = screenH / this.height;
        switch (this.ResolutionPolicy) {
          case "SHOW_ALL":
            let nowScale = scaleX2 > scaleY2 ? scaleY2 : scaleX2;
            this.setTransform(0, nowScale, nowScale);
            this.canvasW = this.width * nowScale;
            this.canvasH = this.height * nowScale;
            this.el.style.top = "50%";
            this.el.style.left = "50%";
            this.el.style.marginLeft = -this.canvasW / 2 + "px";
            this.el.style.marginTop = -this.canvasH / 2 + "px";
            break;
          case "EXACT_FIT":
            this.setTransform(0, scaleX2, scaleY2);
            this.canvasW = this.width * scaleX2;
            this.canvasH = this.height * scaleY2;
            this.el.style.top = "50%";
            this.el.style.left = "50%";
            this.el.style.marginLeft = -this.canvasW / 2 + "px";
            this.el.style.marginTop = -this.canvasH / 2 + "px";
            break;
        }
        break;
    }
  }

  //转换坐标
  convertPosition(x: number, y: number): any {
    switch (this.pmdir) {
      case "vertical":
        return {
          x: (this.width / this.height) * y,
          y: (this.width - x) * (this.height / this.width)
        };
        break;
      case "horizontal":
        return {
          x: x,
          y: y
        };
        break;
    }
  }

  //横竖屏事件
  checkDirect(): void {
    if (window.orientation == 90 || window.orientation == -90) {
      setTimeout(() => {
        this.scaleGame("horizontal");
      }, 300);
    } else if (window.orientation == 0 || window.orientation == 180) {
      setTimeout(() => {
        this.scaleGame("vertical");
      }, 300);
    }
  }

  //添加横竖屏事件
  addEvent(): void {
    window.addEventListener(
      "onorientationchange" in window ? "orientationchange" : "resize",
      this.checkDirect.bind(this),
      false
    );
  }
}

export default ScaleManager;
