
const express = require('express');
const router = express.Router();
const productController = require('../controller/products.controller')

router.get(`/`, productController.getProduct)
router.get(`/:id`, productController.vewProduct)
router.post(`/`, productController.addProduct)
router.put('/:id',productController.updateProduct)
router.delete('/:id', productController.deleteProduct);
router.get(`/get/count`, productController.CountProduct)
router.get(`/get/featured/:count`,productController.featuredCountProduct)
module.exports =router;