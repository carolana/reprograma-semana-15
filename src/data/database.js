const MONGODB = process.env.MONGODB_URL
const mongoose = require("mongoose")

//console.log("Mongo URL", MONGODB)
//console.log(process.env)

const connect = () => {mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(console.log('Database conectada com sucesso.'))
  .catch(err => console.err)
}

module.exports = { connect }