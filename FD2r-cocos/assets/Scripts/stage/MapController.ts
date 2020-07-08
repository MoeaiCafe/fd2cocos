import { TILE_SIZE } from "./StageConsts";
import StageController from "./StageController";

const { ccclass, property } = cc._decorator;

/**
 * controller of map layer.
 * host: stage
 */
@ccclass
export default class MapController extends cc.Component {
  public offset: [number, number] = [0, 0];

  /**
   * display object of map
   */
  @property({
    type: cc.Node,
  })
  public map: cc.Node = null;

  public update(dt: number) {
    // map position offset
    const stage = this.node.getComponent(StageController);
    const x = stage.cursorPosition[0] * TILE_SIZE;
    const y = stage.cursorPosition[1] * TILE_SIZE;
    this.map.setPosition(x, y);
  }
}
