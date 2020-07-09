import CursorController from './CursorController';
import MapController from './MapController';
import { TILE_SIZE } from './StageConsts';
import StageScrollController from './StageScrollController';

const { ccclass } = cc._decorator;

const SCROLL_BORDER_SIZE = TILE_SIZE * 1.5;

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
    // const stage = this.node.getComponent(StageController);
    const map = this.node.getComponent(MapController);
    const globalPos = e.getLocation();
    const localPos = this.node.convertToNodeSpaceAR(globalPos);

    // set cursor position
    const x = Math.max(0, Math.min(map.mapSize.x, Math.floor(localPos.x / TILE_SIZE)));
    const y = Math.max(0, Math.min(map.mapSize.y, Math.floor(localPos.y / TILE_SIZE)));
    this.node.getComponent(CursorController).setCursorPosition(cc.v2(x, y));

    // map scroll
    let scrollX = 0;
    let scrollY = 0;
    if (globalPos.x > 0 && globalPos.x < SCROLL_BORDER_SIZE) {
      scrollX = 1 - globalPos.x / SCROLL_BORDER_SIZE;
    } else if (globalPos.x > cc.winSize.width - SCROLL_BORDER_SIZE && globalPos.x < cc.winSize.width) {
      scrollX = -1 + (cc.winSize.width - globalPos.x) / SCROLL_BORDER_SIZE;
    }
    if (globalPos.y > 0 && globalPos.y < SCROLL_BORDER_SIZE) {
      scrollY = 1 - globalPos.y / SCROLL_BORDER_SIZE;
    } else if (globalPos.y > cc.winSize.height - SCROLL_BORDER_SIZE && globalPos.y < cc.winSize.height) {
      scrollY = -1 + (cc.winSize.height - globalPos.y) / SCROLL_BORDER_SIZE;
    }
    this.node.getComponent(StageScrollController).setScrollDir(scrollX, scrollY);
  }
}
