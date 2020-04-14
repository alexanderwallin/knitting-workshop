const chalk = require('chalk')
const _ = require('lodash')

const numRows = Number(process.argv[2]) || 37
const numCols = Number(process.argv[3]) || 100

const white = chalk.bgWhite(' ')
const gray = chalk.bgGray(' ')

const patternA = [white, gray, gray, white, gray]
const patternB = [white, white, gray, white, gray, gray, gray]
const patternC = [white, gray, gray, white, gray, white, gray, white, white]
const patterns = [patternA, patternB, patternC]

console.log(`Rows: ${numRows}`)
console.log(`Cols: ${numCols}`)
console.log(
  `Sequence: ${patterns
    .reduce((acc, sequence) => [...acc, ...sequence], [])
    .join('')}`
)
console.log()

let stitches = []
let pattern = patterns[0]
while (stitches.length < numRows * numCols) {
  stitches = [...stitches, ...pattern]
  pattern = patterns[(patterns.indexOf(pattern) + 1) % patterns.length]
}
stitches = stitches.slice(0, numRows * numCols)

const output = _.chunk(stitches, numCols)
  .map((row) => row.join(''))
  .join('\n')

console.log(output)
