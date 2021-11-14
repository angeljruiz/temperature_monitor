let noble = require('noble');

noble.on('discover', (p) => {
  console.log({ name: p.advertisement.localName, id: p.uuid })
  console.log()
  if (p.uuid === 'e868e71ae7ba' || p.advertisement.localName === 'DFRobot_ESP32') {

    p.once('connect', () => {
      p.discoverAllServicesAndCharacteristics((err, services, characteristics) => {
        console.log({err, services, characteristics});
      })
    })
    p.connect()
  }
})

noble.on('stateChange', state => {
  console.log(state)

  if (state === 'poweredOn') noble.startScanning()
})




