const express = require("express");
const router = express.Router();
const User = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/signup', async (req, res) => {
	const hashedPassword = await bcrypt.hash(req.body.password, 10);
	const user = await new User({ ...req.body, password: hashedPassword })
	try {
		const newUser = await user.save();
		const accessToken = jwt.sign({ id: newUser._id, username: newUser.username, email: newUser.email, role: "user" }, process.env.JWT_SECRET)
		res.send({ accessToken, user: newUser })
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

router.post('/signin', async (req, res) => {
	const user = await User.findOne({ username: req.body.username })
	if (!user) {
		return res.status(404).send("Cannot find user!");
	} else {
		try {
			if (await bcrypt.compare(req.body.password, user.password)) {
				const accessToken = jwt.sign({ id: user._id, username: user.username, email: user.email }, process.env.JWT_SECRET)
				res.send({ accessToken })
			} else {
				res.send("Not authorized!")
			}
		} catch (error) {
			res.send(error)
		}
	}
})

router.patch('/reset-password', async (req, res) => {
	const user = await User.findOne({ username: req.body.username })
	if (!user) {
		return res.status(404).send({ message: "Cannot find user!" });
	} else {
		try {
			const newHashedPassword = await bcrypt.hash(req.body.password, 10);
			await User.findByIdAndUpdate(user._id, { password: newHashedPassword }, {
				returnOriginal: false
			})
			res.send({ message: "Password Reset Successfully!" })
		} catch (error) {
			res.send(error)
		}
	}
})

router.patch('/update', async (req, res) => {
	const user = await User.findOne({ username: req.body.username })
	if (!user) {
		return res.status(404).send({ message: "Cannot find user!" });
	} else {
		try {
			const userUpdate = await User.findByIdAndUpdate(user._id, req.body, {
				returnOriginal: false
			})
			res.send(userUpdate)
		} catch (error) {
			res.send(error)
		}
	}
})

module.exports = router;