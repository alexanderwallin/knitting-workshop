const chalk = require('chalk')
const _ = require('lodash')

const numRows = Number(process.argv[2])
const numCols = Number(process.argv[3])

const sequence = [
  chalk.bgYellow(' '),
  chalk.bgYellow(' '),
  chalk.bgYellow(' '),
  chalk.bgBlue(' '),
  chalk.bgYellow(' '),
  chalk.bgBlue(' '),
  chalk.bgBlue(' '),
]

console.log(`Rows: ${numRows}`)
console.log(`Cols: ${numCols}`)
console.log(`Sequence: ${sequence.join('')}`)
console.log()

let stitches = []
const numStitches = numRows * numCols

while (stitches.length < numStitches) {
  stitches = stitches.concat(sequence)
}

const rowStitches = _.chunk(stitches, numCols)
rowStitches.forEach((row) => console.log(row.join('')))
