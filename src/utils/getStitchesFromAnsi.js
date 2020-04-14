function getStitchesFromAnsi(ansiStiches) {
  // console.log('getStitchesFromAnsi', ansiStiches)
  console.log(ansiStiches.split(/\[49m/)[0])
  console.log(ansiStiches.split(/\[49m/).map((x) => `${x}[49m`)[0])
  return ansiStiches
    .split(/\[49m/)
    .filter((x) => x)
    .map((x) => `${x}[49m`)
}

module.exports = getStitchesFromAnsi
