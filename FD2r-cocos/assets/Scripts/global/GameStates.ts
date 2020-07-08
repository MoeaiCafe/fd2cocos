export enum GameSceneState {
  Default,
  /** opening */
  Opening,
  /** ending */
  Ending,
  /** village */
  Village,
  /** stage map */
  Stage
}

/**
 * battle state
 */
export enum GameBattleState {
  Default,
  /** initializing */
  Initializing,
  /** scenario playing */
  Scenario,
  /** enemy acting */
  EnemyPhase,
  /** player acting */
  PlayerPhase,
  /** combat animation */
  CombatAnimation,
}
