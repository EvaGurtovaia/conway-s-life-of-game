export default function createPattern(rows, cols, patternType) {
    let newBoard = [...Array(rows)].map((e) => Array(cols));
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            switch (patternType) {
                case "blinker":
                    if (
                        [10, 11, 12, 35, 36, 37].includes(x) &&
                        [2, 7, 12, 17, 22, 27].includes(y)
                    ) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                    break;
                case "toad":
                    if ([10, 11, 12, 30, 31, 32].includes(x) && y === 10) {
                        newBoard[y][x] = true;
                    } else if (
                        [11, 12, 13, 31, 32, 33].includes(x) &&
                        y === 11
                    ) {
                        newBoard[y][x] = true;
                    } else if ([20, 21, 22].includes(x) && y === 20) {
                        newBoard[y][x] = true;
                    } else if ([21, 22, 23].includes(x) && y === 21) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                    break;
                case "beacon":
                    if ([10, 11, 34, 35].includes(x) && [10, 11].includes(y)) {
                        newBoard[y][x] = true;
                    } else if (
                        [12, 13, 32, 33].includes(x) &&
                        [12, 13].includes(y)
                    ) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                    break;
                case "pentadecathlon":
                    if (
                        [10, 11, 12, 40, 41, 42].includes(x) &&
                        [10, 13, 18, 21].includes(y)
                    ) {
                        newBoard[y][x] = true;
                    } else if (
                        [9, 13, 39, 43].includes(x) &&
                        [11, 12, 19, 20].includes(y)
                    ) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                    break;
                case "blocks":
                    const indices = [10, 11, 15, 16, 30, 31, 34, 35, 5, 6];
                    if (indices.includes(x) && indices.includes(y)) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                    break;
                case "beehives":
                    if (
                        [10, 11, 15, 16].includes(x) &&
                        [10, 12, 15, 17].includes(y)
                    ) {
                        newBoard[y][x] = true;
                    } else if (
                        [9, 12, 14, 17].includes(x) &&
                        [11, 16].includes(y)
                    ) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                    break;
                case "loaves":
                    if ([10, 11, 28, 29].includes(x) && y === 10) {
                        newBoard[y][x] = true;
                    } else if ([9, 12, 27, 30].includes(x) && y === 11) {
                        newBoard[y][x] = true;
                    } else if ([10, 12, 28, 30].includes(x) && y === 12) {
                        newBoard[y][x] = true;
                    } else if ([11, 29].includes(x) && y === 13) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                    break;
                case "boats":
                    if (
                        [10, 11, 18, 19, 26, 27, 34, 35].includes(x) &&
                        y === 10
                    ) {
                        newBoard[y][x] = true;
                    } else if (
                        [10, 12, 18, 20, 26, 28, 34, 36].includes(x) &&
                        y === 11
                    ) {
                        newBoard[y][x] = true;
                    } else if ([11, 19, 27, 35].includes(x) && y === 12) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                    break;
                case "tubs":
                    if ([11, 19, 27, 35].includes(x) && y === 10) {
                        newBoard[y][x] = true;
                    } else if (
                        [10, 12, 18, 20, 26, 28, 34, 36].includes(x) &&
                        y === 11
                    ) {
                        newBoard[y][x] = true;
                    } else if ([11, 19, 27, 35].includes(x) && y === 12) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                    break;
                case "glider":
                    if (x === 11 && y === 10) {
                        newBoard[y][x] = true;
                    } else if (x === 12 && y === 11) {
                        newBoard[y][x] = true;
                    } else if ([10, 11, 12].includes(x) && y === 12) {
                        newBoard[y][x] = true;
                    } else if (x === 1 && y === 0) {
                        newBoard[y][x] = true;
                    } else if (x === 2 && y === 1) {
                        newBoard[y][x] = true;
                    } else if ([0, 1, 2].includes(x) && y === 2) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                    break;
                case "lwss":
                    if ([10, 11, 12, 13].includes(x) && y === 10) {
                        newBoard[y][x] = true;
                    } else if ([9, 13].includes(x) && y === 11) {
                        newBoard[y][x] = true;
                    } else if (x === 13 && y === 12) {
                        newBoard[y][x] = true;
                    } else if ([9, 12].includes(x) && y === 13) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                    break;

                case "mwss":
                    if ([10, 11, 12, 13, 14].includes(x) && y === 10) {
                        newBoard[y][x] = true;
                    } else if ([9, 14].includes(x) && y === 11) {
                        newBoard[y][x] = true;
                    } else if (x === 14 && y === 12) {
                        newBoard[y][x] = true;
                    } else if ([9, 13].includes(x) && y === 13) {
                        newBoard[y][x] = true;
                    } else if (x === 11 && y === 14) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                    break;

                case "hwss":
                    if ([10, 11, 12, 13, 14, 15].includes(x) && y === 10) {
                        newBoard[y][x] = true;
                    } else if ([9, 15].includes(x) && y === 11) {
                        newBoard[y][x] = true;
                    } else if (x === 15 && y === 12) {
                        newBoard[y][x] = true;
                    } else if ([9, 14].includes(x) && y === 13) {
                        newBoard[y][x] = true;
                    } else if ([11, 12].includes(x) && y === 14) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                    break;

                default:
                    if (
                        [
                            10,
                            11,
                            12,
                            16,
                            17,
                            18,
                            30,
                            31,
                            32,
                            36,
                            37,
                            38,
                        ].includes(x) &&
                        [10, 15, 17, 22].includes(y)
                    ) {
                        newBoard[y][x] = true;
                    } else if (
                        [8, 13, 15, 20, 28, 33, 35, 40].includes(x) &&
                        [12, 13, 14, 18, 19, 20].includes(y)
                    ) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
            }
        }
    }
    return newBoard;
}
