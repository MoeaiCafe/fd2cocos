import { TILE_SIZE } from "./StageConsts";
import StageController from "./StageController";

const { ccclass, property } = cc._decorator;

/**
 * controller of map layer.
 * host: stage
 */
@ccclass
export default class MapController extends cc.Component {
  /**
   * display object of map
   */
  @property({
    type: cc.Node,
  })
  public map: cc.Node = null;

  public mapSize: cc.Vec2 = cc.v2(50, 50);

  public offset: cc.Vec2 = cc.v2(0, 0);

  public update(dt: number) {
    // map position offset
    const offset = this.offset.mul(TILE_SIZE);
    this.map.setPosition(offset);
  }
}
