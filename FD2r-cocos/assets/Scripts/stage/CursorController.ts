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

  public cursorPosition: cc.Vec2 = cc.v2(0, 0);

  // public onLoad() {
  // }

  // public start() {
  // }

  public update(dt: number) {
    // position
    const pos = this.cursorPosition.mul(TILE_SIZE);
    this.cursor.setPosition(pos);
  }

  /**
   * cursor move
   * @param x
   * @param y
   */
  public setCursorPosition(pos: cc.Vec2) {
    this.cursorPosition = pos;
  }
}
