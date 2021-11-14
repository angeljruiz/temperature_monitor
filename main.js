let noble = require('noble');

noble.on('discover', (p) => {
  if (p.uuid === 'e868e71ae7ba' || p.advertisement.localName === 'DFRobot_ESP32') {
    p.once('connect', () => {
      console.log('connected')

      p.discoverAllServicesAndCharacteristics((err, services) => {
        services.forEach(s => {
          s.characteristics.forEach( c => {
          if (c.uuid === '0000dfb100001000800000805f9b34fb') {
            console.log('subscribed')

            c.on('data', state => {
              console.log(state.toString());
            })

            c.subscribe()
          }
        })})
      })
    })
    
    noble.stopScanning()
    p.connect()
  }
})

noble.on('stateChange', state => {
  console.log(state)

  if (state === 'poweredOn') noble.startScanning()
})


