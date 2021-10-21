const mongoose = require('mongoose');
const URIMONGODB = "mongodb+srv://admin:pQo82ujIYNptFBxG@cluster0.dzxo9.mongodb.net/atlantiaDev?retryWrites=true&w=majority"
//
mongoose.connect(URIMONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then((db) => console.log("Mongodb is connected to: ", process.env['URIMONGODB']))
.catch(err => console.log('Mongodb connected error in Cluster: ', err));
