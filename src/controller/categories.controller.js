const { Category } = require('../models/category.model')

const AddCategories = async (req, res) => {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
    })
    try {
        category = await category.save()
        if (!category) {
            return res.status(400).send('the category cannot be created!')
        }
        res.status(201).send(category)
    } catch (e) {
        res.status(400).send(e)
    }
}

const getCategories = async (req, res) => {
    try {
        const categoryList = await Category.find()
        if (!categoryList) {
            res.status(500).json({ success: false })
        }
        res.status(201).send(categoryList)
    } catch (e) {
        res.status(400).send(e)
    }
}

const viewCategories = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        if (!category) {
            res.status(500).json({
                message: 'The category with the given ID was not found.',
            })
        }
        res.status(200).send(category)
    } catch (e) {
        res.status(400).send(e)
    }
}

const updateCategories = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                icon: req.body.icon || category.icon,
                color: req.body.color,
            },
            { new: true }
        )
        if (!category) {
            return res.status(400).send('the category cannot be created!')
        }
        res.send(category)
    } catch (e) {
        res.status(400).send(e)
    }
}

const deleteCategories = (req, res) => {
    try {
        Category.findByIdAndRemove(req.params.id)
            .then((category) => {
                if (category) {
                    return res.status(200).json({
                        success: true,
                        message: 'the category is deleted!',
                    })
                } else {
                    return res.status(404).json({
                        success: false,
                        message: 'category not found!',
                    })
                }
            })
            .catch((err) => {
                return res.status(500).json({ success: false, error: err })
            })
    } catch (e) {
        res.status(400).send(e)
    }
}

module.exports = {
    AddCategories,
    getCategories,
    viewCategories,
    updateCategories,
    deleteCategories,
}
