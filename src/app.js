const express = require("express")
const app = express()

app.use(express.json())

const db = require('../src/data/database')
db.connect()

const estudioRouter = require("./routes/estudio.routes")
const tituloRouter = require('./routes/titulo.routes')
const usuariasRouter = require('./routes/usuarias.routes')


app.use('/estudios', estudioRouter)
app.use('/titulos', tituloRouter)
app.use('/usuarias', usuariasRouter)


module.exports = app