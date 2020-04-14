const fs = require('fs')
const chalk = require('chalk')

const input = fs.readFileSync(0, 'utf8')

const rows = input.split('\n')
rows.forEach((row) => {
  const stitches = row.split('')
  const coloredStitches = stitches.map((stitch) => {
    if (stitch === '.') {
      return chalk.bgBlue(' ')
    }
    return chalk.bgYellow(' ')
  })
  console.log(coloredStitches.join(''))
})
