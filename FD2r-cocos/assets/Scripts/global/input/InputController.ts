// /**
//  * 输入处理器
//  */
// export default class InputController {
//   public start() {
//     // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
//     cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
//   }

//   private onKeyUp(e: cc.Event.EventKeyboard) {
//     switch (e.keyCode) {
//       case cc.macro.KEY.up:
//         console.log(`key input: up`);
//         gameController.stage.onInputCursorMove(1);
//         break;
//       case cc.macro.KEY.down:
//         console.log(`key input: down`);
//         gameController.stage.onInputCursorMove(3);
//         break;
//       case cc.macro.KEY.left:
//         console.log(`key input: left`);
//         gameController.stage.onInputCursorMove(2);
//         break;
//       case cc.macro.KEY.right:
//         console.log(`key input: right`);
//         gameController.stage.onInputCursorMove(0);
//         break;
//       case cc.macro.KEY.space:
//         console.log(`key input: space`);
//         gameController.stage.onInputCursorSelect();
//         break;
//     }
//   }
// }
