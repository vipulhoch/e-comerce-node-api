
const express = require('express');
const router = express.Router();
const productController = require('../controller/products.controller')

router.get(`/`, productController.getProduct)
router.get(`/:id`, productController.vewProduct)
router.post(`/`, productController.addProduct)
router.put('/:id',productController.updateProduct)

router.delete('/:id', )

// router.get(`/get/count`, async (req, res) =>{
//     const productCount = await Product.countDocuments((count) => count)

//     if(!productCount) {
//         res.status(500).json({success: false})
//     } 
//     res.send({
//         productCount: productCount
//     });
// })

// router.get(`/get/featured/:count`, async (req, res) =>{
//     const count = req.params.count ? req.params.count : 0
//     const products = await Product.find({isFeatured: true}).limit(+count);

//     if(!products) {
//         res.status(500).json({success: false})
//     } 
//     res.send(products);
// })

module.exports =router;