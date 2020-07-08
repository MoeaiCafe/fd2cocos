const { ccclass } = cc._decorator;

/**
 * controller for mouse input layer.
 * host: stage
 */
@ccclass
export default class StageController extends cc.Component {
  private static scrollSpeed: number = 18;

  private scrollDir: cc.Vec2 = cc.v2(0, 0);

  // public onLoad() {
  // }

  // public start() {
  // }

  public update(dt: number) {
    if (this.scrollDir.x !== 0) {
      let x = this.node.x + this.scrollDir.x * StageController.scrollSpeed * dt;
      // space width = 1/4 of screen width
      const min = cc.winSize.width * 3 / 4 - this.node.width * 3 / 2;
      const max = cc.winSize.width / 4 - this.node.width / 2;
      x = Math.max(min, Math.min(max, x));
      this.node.x = x;
    }
    if (this.scrollDir.y !== 0) {
      let y = this.node.y + this.scrollDir.y * StageController.scrollSpeed * dt;
      const min = cc.winSize.height * 3 / 4 - this.node.height * 3 / 2;
      const max = cc.winSize.height / 4 - this.node.height / 2;
      y = Math.max(min, Math.min(max, y));
      this.node.y = y;
    }
  }

  public scroll(dirX: number, dirY: number) {
    this.scrollDir.x = dirX;
    this.scrollDir.y = dirY;
  }
}
