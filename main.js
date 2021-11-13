let noble = require('noble');

noble.on('discover', (p) => console.log(p))

console.log(noble.startScanning()); // any service UUID, no duplicates




