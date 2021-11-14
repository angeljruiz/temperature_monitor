let noble = require('noble');

noble.on('discover', (p) => {
  console.log({ name: p.advertisement.localName, id: p.uuid })
  console.log()

  if (p.uuid === 'e868e71ae7ba' || p.advertisement.localName === 'DFRobot_ESP32') {
    p.once('connect', () => {
      console.log('connected')

      p.discoverAllServicesAndCharacteristics((err, services, characteristics) => {
        services.forEach(s => {
          s.characteristics.forEach( c => {
          if (c.uuid === '0000dfb100001000800000805f9b34fb') {
            console.log('subscribed')

            c.on('data', state => {
              console.log(state.toString('base64'));
            })

            c.subscribe()
          }
        })})
        console.log(services.map( s => s.characteristics));
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


