import StageController from './StageController';
import { TILE_SIZE } from './StageConsts';

const { ccclass, property } = cc._decorator;

/**
 * controller of cursor.
 * host: stage
 */
@ccclass
export default class CursorController extends cc.Component {
  /**
   * cursor display object
   */
  @property({
    type: cc.Node,
  })
  public cursor: cc.Node = null;

  // public onLoad() {
  // }

  // public start() {
  // }

  public update(dt: number) {
    // position
    const stage = this.node.getComponent(StageController);
    const x = stage.cursorPosition[0] * TILE_SIZE;
    const y = stage.cursorPosition[1] * TILE_SIZE;
    this.cursor.setPosition(x, y);
  }
}
