let noble = require('noble');

noble.on('discover', (p) => {console.log(p); console.log()})
noble.on('stateChange', state => {
  console.log(state)

  if (state === 'poweredOn') noble.startScanning(['e868e71ae7ba'])
})




