const { Category } = require('../models/category.model')
const { Product } = require('../models/product.model')

const getProduct = async (req, res) => {
    try {
        let filter = {}
        if (req.query.categories) {
            filter = { category: req.query.categories.split(',') }
        }
        const productList = await Product.find(filter).populate('category')
        if (!productList) {
            res.status(500).json({ success: false })
        }
        res.send(productList)
    } catch (e) {
        res.status(400).send(e)
    }
}

const vewProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate(
            'category'
        )
        if (!product) {
            res.status(500).json({ success: false })
        }
        res.send(product)
    } catch (e) {
        res.status(400).send(e)
    }
}

const addProduct = async (req, res) => {
    try {
        const category = await Category.findById(req.body.category)
        if (!category) return res.status(400).send('Invalid Category')
        let product = new Product({
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        })
        product = await product.save()
        if (!product) {
            return res.status(500).send('The product cannot be created')
        }

        res.send(product)
    } catch (e) {
        res.status(400).send(e)
    }
}

const updateProduct = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).send('Invalid Product Id')
        }
        const category = await Category.findById(req.body.category)
        if (!category) return res.status(400).send('Invalid Category')
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                description: req.body.description,
                richDescription: req.body.richDescription,
                image: req.body.image,
                brand: req.body.brand,
                price: req.body.price,
                category: req.body.category,
                countInStock: req.body.countInStock,
                rating: req.body.rating,
                numReviews: req.body.numReviews,
                isFeatured: req.body.isFeatured,
            },
            { new: true }
        )
        if (!product) {
            return res.status(500).send('the product cannot be updated!')
        }

        res.send(product)
    } catch (e) {
        res.status(400).send(e)
    }
}

const deleteProduct = (req, res)=>{
    try{
        Product.findByIdAndRemove(req.params.id).then(product =>{
            if(product) {
                return res.status(200).json({success: true, message: 'the product is deleted!'})
            } else {
                return res.status(404).json({success: false , message: "product not found!"})
            }
        }).catch(err=>{
           return res.status(500).json({success: false, error: err}) 
        })
    }
    catch (e) {
        res.status(400).send(e)
    }
   
}

module.exports = {
    getProduct,
    vewProduct,
    addProduct,
    updateProduct,
    deleteProduct
}
