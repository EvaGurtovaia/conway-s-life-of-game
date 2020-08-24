import neighbors from "./whoIsYourNeighbors";

// Return true if cell should live in the next generation.
// False if it should die.
export default function cellsFate(currentX, currentY, board, rows, cols) {
    const numNeighbors = neighbors(currentX, currentY, board, rows, cols);
    if (board[currentY][currentX]) {
        if (numNeighbors < 2) {
            return false;
        } else if (numNeighbors < 4) {
            return true;
        }
        return false;
    } else {
        if (numNeighbors === 3) {
            return true;
        }
        return false;
    }
}
