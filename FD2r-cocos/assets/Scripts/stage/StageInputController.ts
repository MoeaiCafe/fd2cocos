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
    const localPos = this.node.convertToNodeSpaceAR(e.getLocation());

    // set cursor position
    const x = Math.max(0, Math.min(stage.mapSize[0], Math.floor(localPos.x / TILE_SIZE)));
    const y = Math.max(0, Math.min(stage.mapSize[1], Math.floor(localPos.y / TILE_SIZE)));
    stage.setCursorPosition(x, y);

    // map scroll
    if (localPos.x < 100) {
      // TODO
    }
    if (localPos.y < 100) {
      // TODO
    }
  }
}
