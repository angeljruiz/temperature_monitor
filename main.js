let noble = require('noble');

noble.on('discover', (p) => {
  if (p.uuid === 'e868e71ae7ba') {
    console.log(p)
    p.connect()
  }
})

noble.on('stateChange', state => {
  console.log(state)

  if (state === 'poweredOn') noble.startScanning()
})




