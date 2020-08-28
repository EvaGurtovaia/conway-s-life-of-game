
 // Creating arr of column inside of arr of rows
const Grid = (size) => {
    const rows = []
    for (let i = 0; i < size; i++) {
        rows.push(Array.from(Array(size), () => 0))
    }
    return rows
}

export default Grid
