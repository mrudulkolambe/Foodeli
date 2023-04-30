const jwt = require('jsonwebtoken');

const handleAuth = (req, res, next) => {
	try {
		let accessToken = req.headers.authorization.split(" ")[1]
		let data = jwt.verify(accessToken, process.env.JWT_SECRET)
		req.user = data
		next()
	} catch (error) {
		return res.send({error: error.message})
	}
}

module.exports = { handleAuth }