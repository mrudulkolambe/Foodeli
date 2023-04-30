const express = require("express");
const router = express.Router();
const ParentProduct = require("../Models/ParentProductModel");

router.post('/', async (req, res) => {
	const parentProduct = new ParentProduct(req.body)
	try {
		const newParentProduct = await parentProduct.save();
		res.json(newParentProduct)
	} catch (err) {
		res.status(400).json(err)
	}
})

router.get('/', async (req, res) => {
	const products = await ParentProduct.find()
	if (!products) {
		return res.status(404).json({ message: "Cannot find Products!" });
	} else {
		res.json(products)
	}
})

router.get('/:id', async (req, res) => {
	const ParentProduct = await ParentProduct.findById(req.params.id)
	if (!ParentProduct) {
		return res.status(404).json({ message: "Cannot find Parent Product!" });
	} else {
		res.json(ParentProduct)
	}
})

router.get('/slug/:slug', async (req, res) => {
	const product = await ParentProduct.findOne({slug: req.params.slug})
	if (!product) {
		return res.status(404).json({ message: "Cannot find Parent Product!" });
	} else {
		res.json(product)
	}
})

router.patch('/:id', async (req, res) => {
	try {
		const ParentProductUpdate = await ParentProduct.findByIdAndUpdate(req.params.id, req.body, {
			returnOriginal: false
		})
		res.send(ParentProductUpdate)
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