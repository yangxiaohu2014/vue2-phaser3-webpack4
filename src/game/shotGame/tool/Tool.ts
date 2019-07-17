export default {
  //弧度转角度
  radianToAngle(angle: number): number {
    return (180 / Math.PI) * angle;
  },
  //角度转弧度
  angleToRadian(angle: number): number {
    return (Math.PI / 180) * angle;
  },
  /**
    计算两点角度
    p1 : 点1
    p2 : 点2
    返回
    distance ：斜边的长度，也是两点间距离的长度
    angle ： 两个点的角度 (弧度制)
  */
  twoPointAngle(p1: any, p2: any): any {
    let ax = p1.x - p2.x;
    let ay = p1.y - p2.y;
    let xie = Math.sqrt(Math.pow(ax, 2) + Math.pow(ay, 2));
    let cos = ax / xie;
    let angle = Math.acos(cos);
    if (p1.y < p2.y) {
      angle = -angle;
    }
    return {
      distance: xie,
      angle: angle
    };
  },

  /**
   * 功能：在没有两个点坐标的时候，获取角度，然后分解成速度的函数。前提是需要一个点坐标、角度以及半径
   * 参数 ：
   * angle ： 角度
   * point ： {x : 0,y : 0}
   * r : 半径
   * 返回 ：角度、x轴速度、y轴速度
   */
  getSpeed(angle: number, point: any, r: number): any {
    let x1 = point.x;
    let y1 = point.y;
    angle = angle + this.angleToRadian(180);
    //已知箭的x、y坐标、角度、半径，根据公式可以求出箭发射出去的坐标x2、y2
    let x2 = x1 + r * Math.cos(angle);
    let y2 = y1 + r * Math.sin(angle);
    //得出新的坐标点之后，则可以算出角速度
    let newAngle = this.twoPointAngle(
      {
        x: x2,
        y: y2
      },
      {
        x: x1,
        y: y1
      }
    );
    return {
      angle: newAngle.angle,
      xSpeed: Math.cos(newAngle.angle),
      ySpeed: Math.sin(newAngle.angle)
    };
  }
};
