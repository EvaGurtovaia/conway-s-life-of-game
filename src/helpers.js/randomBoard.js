export default function randomBoard(rows, cols, probability) {
    let newBoard = [...Array(rows)].map(() => Array(cols));
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (Math.random() < probability) {
                newBoard[y][x] = false;
            } else {
                newBoard[y][x] = true;
            }
        }
    }
    return newBoard;
}
