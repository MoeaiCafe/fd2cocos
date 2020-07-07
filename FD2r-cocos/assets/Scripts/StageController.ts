export class StageController {
    public cursorPosition: [number, number] = [0, 0];

    public size: [number, number] = [24, 24];

    /**
     * user input cursor move
     */
    public onInputCursorMove(dir: number) {
        const x = this.cursorPosition[0] + MOVE_DIRS[dir][0];
        const y = this.cursorPosition[1] + MOVE_DIRS[dir][1];
        
        this.cursorPosition[0] = Math.max(0, Math.min(x, this.size[0]));
        this.cursorPosition[1] = Math.max(0, Math.min(y, this.size[1]));
    }

    public onInputCursorSelect() {
        // TODO
        console.log(11111);
    }
}

const MOVE_DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]];
