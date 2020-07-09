import { TILE_SIZE } from './StageConsts';

const { ccclass } = cc._decorator;

/**
 * Controller for stage layer scrolling.
 * host: stage
 */
@ccclass
export default class StageScrollController extends cc.Component {
  private static scrollSpeed: number = TILE_SIZE * 30;

  private scrollDir: cc.Vec2 = cc.v2(0, 0);

  // public onLoad() {
  // }

  // public start() {
  // }

  public update(dt: number) {
    if (this.scrollDir.x !== 0 && cc.winSize.width < this.node.width) {
      let x = this.node.x + StageScrollController.scrollSpeed * this.scrollDir.x * dt;
      const min = cc.winSize.width / 2 - this.node.width;
      const max = -cc.winSize.width / 2;
      x = Math.max(min, Math.min(max, x));
      this.node.x = x;
    } else {
      // stop
      this.scrollDir.x = 0;
    }

    if (this.scrollDir.y !== 0 && cc.winSize.height < this.node.height) {
      let y = this.node.y + StageScrollController.scrollSpeed * this.scrollDir.y * dt;
      const min = cc.winSize.height / 2 - this.node.height;
      const max = -cc.winSize.height / 2;
      y = Math.max(min, Math.min(max, y));
      this.node.y = y;
    } else {
      // stop
      this.scrollDir.y = 0;
    }
  }

  public setScrollDir(dirX: number, dirY: number) {
    this.scrollDir.x = dirX;
    this.scrollDir.y = dirY;
  }
}
