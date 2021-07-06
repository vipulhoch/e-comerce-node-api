const express = require('express')
const router = express.Router()
const categoryController = require('../controller/categories.controller')

router.post('/', categoryController.AddCategories)
router.get(`/`, categoryController.getCategories)
router.get('/:id', categoryController.viewCategories)
router.put('/:id', categoryController.updateCategories)
router.delete('/:id', categoryController.deleteCategories)

module.exports = router
