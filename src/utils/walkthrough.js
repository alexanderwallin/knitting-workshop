const fs = require('fs')
const chalk = require('chalk')
const getStitchesFromAnsi = require('./getStitchesFromAnsi.js')

const input = fs.readFileSync(0, 'utf8')

const rows = input.split('\n')
rows.forEach((row) => {
  const isAnsi = row.includes('[49m')
  const stitches = isAnsi ? getStitchesFromAnsi(row) : row.split('')
  // console.dir(stitches, { depth: null })

  const coloredStitches = isAnsi
    ? stitches
    : stitches.map((stitch) => {
        if (stitch === '.') {
          return chalk.bgBlue(' ')
        }
        return chalk.bgYellow(' ')
      })
  // console.log(coloredStitches.join(''))
})
