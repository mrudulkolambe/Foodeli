const express = require("express");
const router = express.Router();
const { handleAuth } = require("../Middleware/AuthMiddleware");
const Cart = require("../Models/CartModel");
const Category = require('../Models/CategoryModel')

router.post('/update-cart', handleAuth, async (req, res) => {
	try {
		const item = await Cart.findOne({ product: req.body.product, user: req.user.id })
		if (item) {
			Cart.findByIdAndUpdate(item?._id, req.body, {
				returnOriginal: false
			})
				.then((response) => {
					res.json({ cart: response.data, error: false, message: "Cart Updated Successfully!" })
				})
				.catch((err) => {
					res.json({ cart: undefined, error: true, message: err.message })
				})
		} else {
			if (req.user) {
				const cart = new Cart({ ...req.body, user: req.user.id })
				const newCart = await cart.save();
				res.json({ cart: newCart, error: false, message: "Cart Updated Successfully!" })
			}
		}
	} catch (error) {
		res.json({ cart: undefined, error: true, message: error.message })
	}
})

router.patch('/:id', async (req, res) => {
	const cart = await Cart.findById({ _id: req.params.id })
	if (!cart) {
		return res.json({ cart: undefined, error: true, message: "Cannot find cart item!" })
	} else {
		return res.json({ cart: cart, error: false, message: "Cart Updated Successfully!" })
	}
})
router.get('/', async (req, res) => {
	const cart = await Cart.find()
	if (!cart) {
		return res.status(404).json({cart: cart, error: true, message: "Cannot find cart item!" });
	} else {
		return res.json({ cart: cart, error: false, message: "Success" })
	}
})

router.get('/:id', async (req, res) => {
	const category = await Category.findById(req.params.id)
	if (!category) {
		return res.status(404).json({ message: "Cannot find category!" });
	} else {
		res.json(category)
	}
})

router.patch('/:id', async (req, res) => {
	try {
		const categoryUpdate = await Category.findByIdAndUpdate(req.params.id, req.body, {
			returnOriginal: false
		})
		res.send(categoryUpdate)
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