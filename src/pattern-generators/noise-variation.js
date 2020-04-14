const chalk = require('chalk')

const numRows = process.argv[2]
const numCols = process.argv[3]

for (let row = 0; row < numRows; row++) {
  const rowStitches = []
  for (let col = 0; col < numCols; col++) {
    const wayDown = row / numRows
    const random = Math.random()
    if (random - wayDown > 0.15) {
      rowStitches.push(chalk.bgYellow(' '))
    } else {
      rowStitches.push(chalk.bgBlue(' '))
    }
  }
  console.log(rowStitches.join(''))
}
