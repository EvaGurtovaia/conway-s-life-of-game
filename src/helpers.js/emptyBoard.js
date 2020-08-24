export default function emptyBoard(rows, cols) {
    let newBoard = [...Array(rows)].map((e) => Array(cols));
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            newBoard[y][x] = false;
        }
    }
    return newBoard;
}
