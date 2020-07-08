const { ccclass } = cc._decorator;

/**
 * controller for mouse input layer.
 * host: stage
 */
@ccclass
export default class StageController extends cc.Component {
  public mapSize: [number, number] = [24, 24];

  public cursorPosition: [number, number] = [0, 0];

  // public onLoad() {
  // }

  // public start() {
  // }

  /**
   * cursor move
   * @param x
   * @param y
   */
  public setCursorPosition(x: number, y: number) {
    this.cursorPosition[0] = x;
    this.cursorPosition[1] = y;
  }
}
