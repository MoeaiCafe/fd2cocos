import { GameBattleState, GameSceneState } from "./GameStates";
import { StageController } from "./StageController";

class GameController {

    public sceneState: GameSceneState = GameSceneState.Default;

    public battleState: GameBattleState = GameBattleState.Default;

    public stage: StageController;
    
    constructor() {
        // TODO
        this.stage = new StageController();
    }

    public startStage(id: string) {
        // TODO
    }
}

export const gameController = new GameController();
