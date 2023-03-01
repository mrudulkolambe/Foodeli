const express = require("express");
const router = express.Router();
const { handleAuth } = require("../Middleware/AuthMiddleware");
const Cart = require("../Models/CategoryModel");

router.post('/', handleAuth, async (req, res) => {
	const cart = new Cart(req.body)
	try {
		const newCart = await cart.save();
		res.json(newCart)
	} catch (err) {
		res.status(400).json(err)
	}
})

router.patch('/:id', async (req, res) => {
	const cart = await Cart.findById({ _id: req.params.id })
	if (!cart) {
		return res.status(404).json({ message: "Cannot find cart item!" });
	} else {
		res.json(categories)
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