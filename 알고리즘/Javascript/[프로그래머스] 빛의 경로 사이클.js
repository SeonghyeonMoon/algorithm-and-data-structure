const initiateVisited = (x, y, z) => {
    const result = []
    for (let i = 0; i < x; i++) {
        const x = []
        for (let j = 0; j < y; j++) {
            const y = []
            for (let k = 0; k < z; k++) {
                y.push(false)
            }
            x.push(y)
        }
        result.push(x)
    }
    return result
}

const solution = (grid) => {
    const result = [];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const width = grid[0].length;
    const height = grid.length;
    const visited = initiateVisited(height, width, directions.length);
    for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
            for (let d = 0; d < directions.length; d++) {
                let count = 0;
                while (!visited[x][y][d]) {
                    visited[x][y][d] = true;
                    count++
                    if (grid[x][y] === 'L') {
                        d = (d - 1 + directions.length) % directions.length;
                    } else if (grid[x][y] === 'R') {
                        d = (d + 1) % directions.length;
                    }
                    const [dx, dy] = directions[d];
                    x = (x + dx + height) % height;
                    y = (y + dy + width) % width;
                }
                count && result.push(count);
            }
        }
    }
    return result.sort((a, b) => a - b);
}

console.log(solution(["R", "R"]))
