let noble = require('noble');

noble.on('discover', (p) => {
  console.log(p.advertisement.localName)
  console.log()
  if (p.uuid === 'e868e71ae7ba' || p.advertisement.localName === 'ESP32test') {

    p.once('connect', () => console.log('connected'))
    p.connect()
  }
})

noble.on('stateChange', state => {
  console.log(state)

  if (state === 'poweredOn') noble.startScanning()
})




