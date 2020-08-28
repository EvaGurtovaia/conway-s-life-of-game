// Creating arr of column inside of arr of rows
const RandomGrid = (size) => {
    const rows = []
    for (let i = 0; i < size; i++) {
        rows.push(Array.from(Array(size), () => Math.round(Math.random())))
    }
    return rows
}

export default RandomGrid