export default function neighbors(currentX, currentY, board, rows, cols) {
    let totalAliveNeighbors = 0;
    const neighborBooleans = [];
    const neighbors = [
        [currentX - 1, currentY - 1],
        [currentX, currentY - 1],
        [currentX + 1, currentY - 1],
        [currentX - 1, currentY],
        [currentX + 1, currentY],
        [currentX - 1, currentY + 1],
        [currentX, currentY + 1],
        [currentX + 1, currentY + 1],
    ];

    // Modify neighbors for special edge cases:

    // When currentX === 0 && currentY === 0:
    if (currentX === 0 && currentY === 0) {
        neighbors[0] = [cols - 1, rows - 1];
        neighbors[1][1] = rows - 1;
        neighbors[2][1] = rows - 1;
        neighbors[3][0] = cols - 1;
        neighbors[5][0] = cols - 1;
    }
    // When currentX === 0 && currentY = rows-1
    else if (currentX === 0 && currentY === rows - 1) {
        neighbors[0][0] = cols - 1;
        neighbors[3][0] = cols - 1;
        neighbors[5] = [cols - 1, 0];
        neighbors[6][1] = 0;
        neighbors[7][1] = 0;
    }
    // When currentX === cols-1 && currentY = rows-1
    else if (currentX === cols - 1 && currentY === rows - 1) {
        neighbors[2][0] = 0;
        neighbors[4][0] = 0;
        neighbors[5][1] = 0;
        neighbors[6][1] = 0;
        neighbors[7] = [0, 0];
    }
    // When currentX === cols-1 && currentY === 0
    else if (currentX === cols - 1 && currentY === 0) {
        neighbors[0][1] = rows - 1;
        neighbors[1][1] = rows - 1;
        neighbors[2] = [0, rows - 1];
        neighbors[4][0] = 0;
        neighbors[7][0] = 0;
    }
    // When x === 0
    else if (currentX === 0) {
        neighbors[0][0] = cols - 1;
        neighbors[3][0] = cols - 1;
        neighbors[5][0] = cols - 1;
    }
    // When x === cols-1
    else if (currentX === cols - 1) {
        neighbors[2][0] = 0;
        neighbors[4][0] = 0;
        neighbors[7][0] = 0;
    }

    // When y === 0
    else if (currentY === 0) {
        neighbors[0][1] = rows - 1;
        neighbors[1][1] = rows - 1;
        neighbors[2][1] = rows - 1;
    }

    // When y === rows-1
    else if (currentY === rows - 1) {
        neighbors[5][1] = 0;
        neighbors[6][1] = 0;
        neighbors[7][1] = 0;
    }
    for (let i = 0; i < neighbors.length; i++) {
        const xToCheck = neighbors[i][0];
        const yToCheck = neighbors[i][1];
        if (board[yToCheck][xToCheck]) {
            totalAliveNeighbors++;
            neighborBooleans.push(true);
        } else {
            neighborBooleans.push(false);
        }
    }

    // console.log(totalAliveNeighbors);
    // console.log(neighborBooleans);
    return totalAliveNeighbors;
}
