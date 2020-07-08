import StageController from '../stage/StageController';
import { GameController } from './GameController';
import { GameBattleState, GameSceneState } from './GameStates';

class GameControllerImpl implements GameController {
  public sceneState: GameSceneState = GameSceneState.Default;

  public battleState: GameBattleState = GameBattleState.Default;

  public get stage(): StageController {
    return cc.director.getScene().getComponent(StageController) as StageController;
  }

  // constructor() {
  // }

  // public startStage(id: string) {
  //   // TODO
  // }
}

const gameController = new GameControllerImpl();
export default gameController;
