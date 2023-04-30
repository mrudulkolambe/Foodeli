const express = require("express");
const router = express.Router();
const ProductModel = require("../Models/ProductModel");

router.post('/', async (req, res) => {
	const product = new ProductModel(req.body)
	try {
		const newProduct = await product.save();
		res.json(newProduct)
	} catch (err) {
		res.status(400).json(err)
	}
})

router.get('/', async (req, res) => {
	const products = await ProductModel.find().populate("productID")
	// const products = await ProductModel.find().populate("category")
	if (!products) {
		return res.status(404).json({ message: "Cannot find Products!" });
	} else {
		res.json(products)
	}
})

router.get('/:id', async (req, res) => {
	const product = await ProductModel.findById(req.params.id)
	if (!product) {
		return res.status(404).json({ message: "Cannot find Product!" });
	} else {
		res.json(product)
	}
})
router.get('/parent/:id', async (req, res) => {
	const product = await ProductModel.find({productID: req.params.id})
	if (!product) {
		return res.status(404).json({ message: "Cannot find Product!" });
	} else {
		res.json(product)
	}
})

router.patch('/:id', async (req, res) => {
	try {
		const productUpdate = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
			returnOriginal: false
		})
		res.send(productUpdate)
	} catch (error) {
		res.send(error)
	}
})

// router.patch('/update', async (req, res) => {
// 	const user = await User.findOne({ username: req.body.username })
// 	if (!user) {
// 		return res.status(404).send({ message: "Cannot find user!" });
// 	} else {
// 		try {
// 			const userUpdate = await User.findByIdAndUpdate(user._id, req.body, {
// 				returnOriginal: false
// 			})
// 			res.send(userUpdate)
// 		} catch (error) {
// 			res.send(error)
// 		}
// 	}
// })

module.exports = router;