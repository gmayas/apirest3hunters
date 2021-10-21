const mongoose = require('mongoose');
console.log("Mongodb URL: ", process.env['URIMONGODB'])

mongoose.connect(process.env['URIMONGODB'], {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then((db) => console.log("Mongodb is connected to: ", process.env['URIMONGODB']))
.catch(err => console.log('Mongodb connected error in Cluster: ', err));
