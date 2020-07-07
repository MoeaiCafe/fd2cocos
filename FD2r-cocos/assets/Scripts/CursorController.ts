import { gameController } from "./GameController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CursorController extends cc.Component {

    private _enabled: boolean = false;

    public onLoad() {
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    public start() {

    }

    public update(dt) {
        // this.updateSelectable();

        // position
        const pos = gameController.stage.cursorPosition;
        this.node.setPosition(pos[0] * 24, pos[1] * 24);
    }

    // private onKeyDown() {
    // }

    private onKeyUp(e: cc.Event.EventKeyboard) {
        switch (e.keyCode) {
            case cc.macro.KEY.up:
                console.log(`key input: up`);
                gameController.stage.onInputCursorMove(1);
                break;
            case cc.macro.KEY.down:
                console.log(`key input: down`);
                gameController.stage.onInputCursorMove(3);
                break;
            case cc.macro.KEY.left:
                console.log(`key input: left`);
                gameController.stage.onInputCursorMove(2);
                break;
            case cc.macro.KEY.right:
                console.log(`key input: right`);
                gameController.stage.onInputCursorMove(0);
                break;
            case cc.macro.KEY.space:
                console.log(`key input: space`);
                gameController.stage.onInputCursorSelect();
                break;
        }
    }

    /**
     * update selectable state
     */
    private updateSelectable() {
        // this._enabled = gameGlobalController.sceneState === GameSceneState.Stage && gameGlobalController.battleState === GameBattleState.PlayerPhase;
    }

}
