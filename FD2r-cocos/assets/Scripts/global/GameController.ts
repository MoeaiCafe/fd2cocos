import StageController from '../stage/StageController';
import { GameBattleState, GameSceneState } from './GameStates';

export interface GameController {
  sceneState: GameSceneState;

  battleState: GameBattleState;

  stage: StageController;
}
