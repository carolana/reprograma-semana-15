const express = require("express")
const router = express.Router()
const controller = require('../controllers/tituloController')


//listar todos os titulos
router.get('/', controller.todosTitulos)

//listar todos os titulos da Pixar
router.get('/pixar', controller.getAllPixar)

//listar todos os titulos da Marvel
router.get('/marvel', controller.getAllMarvel)

//listar todos os titulos da Ghibli
router.get('/ghibli', controller.getAllGhibli)

router.patch('/:id', controller.updateTitle)

router.put('/:id', controller.updateAnything)
//criar novo titulo
router.post('/', controller.criarTitulo)

router.delete('/:id', controller.deleteTitulo)

module.exports = router