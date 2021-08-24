require('dotenv-safe').config()
const app = require ("./src/app")
const port = 3003

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`)
})