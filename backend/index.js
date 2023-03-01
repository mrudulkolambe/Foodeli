const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
app.use(cors({
	origin: "*"
}))
const port = 1000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json())

const userRouter = require('./Routes/User');
app.use("/user", userRouter)

const CategoryRouter = require('./Routes/Category');
app.use("/category", CategoryRouter)

const ParentProductRouter = require('./Routes/ParentProduct');
app.use("/parent-product", ParentProductRouter)

const ProductRouter = require('./Routes/Product');
app.use("/product", ProductRouter)


const Category = require('./Models/CategoryModel');
const Product = require('./Models/ParentProductModel');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
	.then(() => console.log("Connected to db"))
	.catch((err) => console.log(err))


app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/home', async (req, res) => {
	try {
		const categories = await Category.find();
		const products = await Product.find()
		res.json({products, categories})
	} catch (error) {
		
	}
})

app.listen(port, () => {
	console.log(`Foodeli app listening on port ${port}`)
})