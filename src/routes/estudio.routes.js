const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudioController')

//listar todos os estudios/get/find
router.get('/', controller.getAll)
//CREATE - criar um estudio -> post - save

//criar um novo estudio/post/save
router.post('/', controller.newStudio)

//listar um estudio/get/findById

//atualizar uma informação especifica num estudio/patch/findById
router.patch('/:id', controller.updateOne)

router.delete('/:id', controller.deleteStudio)

module.exports = router