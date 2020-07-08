import StageController from './StageController';
import CursorController from './CursorController';
import MapController from './MapController';
import { TILE_SIZE } from './StageConsts';

const { ccclass } = cc._decorator;

/**
 * controller for stage input.
 * host: stage
 */
@ccclass
export default class StageInputController extends cc.Component {
  public onLoad() {
    // mouse move
    this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
  }

  // public start() {
  // }

  // public update(dt: number) {
  // }

  private onMouseMove(e: cc.Event.EventMouse) {
    const stage = this.node.getComponent(StageController);
    const map = this.node.getComponent(MapController);
    const globalPos = e.getLocation();
    const localPos = this.node.convertToNodeSpaceAR(globalPos);

    // set cursor position
    const x = Math.max(0, Math.min(map.mapSize.x, Math.floor(localPos.x / TILE_SIZE)));
    const y = Math.max(0, Math.min(map.mapSize.y, Math.floor(localPos.y / TILE_SIZE)));
    this.node.getComponent(CursorController).setCursorPosition(cc.v2(x, y));

    // map scroll
    const scrollX = globalPos.x < TILE_SIZE ? 1 : globalPos.x > cc.winSize.width - TILE_SIZE ? -1 : 0;
    const scrollY = globalPos.y < TILE_SIZE ? 1 : globalPos.y > cc.winSize.height - TILE_SIZE ? -1 : 0;
    stage.scroll(scrollX, scrollY);
  }
}
