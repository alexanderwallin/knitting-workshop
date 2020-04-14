const chalk = require('chalk')

const numRows = process.argv[2]
const numCols = process.argv[3]

for (let i = 0; i < numRows; i++) {
  const rowStitches = []
  for (let j = 0; j < numCols; j++) {
    const chance = Math.random()
    if (chance > 0.55) {
      rowStitches.push(chalk.bgYellow(' '))
    } else {
      rowStitches.push(chalk.bgBlue(' '))
    }
  }
  console.log(rowStitches.join(''))
}
