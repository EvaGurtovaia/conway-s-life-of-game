import cellsFate from "./cellsFate";

export default function updateBoard(rows, cols, board) {
    let newBoard = [...Array(rows)].map(() => Array(cols));
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (cellsFate(x, y, board, rows, cols)) {
                newBoard[y][x] = true;
            } else {
                newBoard[y][x] = false;
            }
        }
    }
    return newBoard;
}
