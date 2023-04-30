import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Topbar from '../components/Topbar'
import { UseAuthContext } from '../context/Auth';
import { UseCartContext } from '../context/Cart';

const ProductDetails = ({ props }) => {

	const [productQTY, setProductQTY] = useState(0)
	const { slug } = useParams();
	const [parentProductData, setParentProductData] = useState();
	const [products, setProducts] = useState([])
	const [productIndex, setProductIndex] = useState(0);

	const { user } = UseAuthContext()
	const { cart, setCart } = UseCartContext()

	useEffect(() => {
		axios(`${process.env.REACT_APP_BASE_URL}/parent-product/slug/${slug}`)
			.then((response) => {
				setParentProductData(response.data)
				axios(`${process.env.REACT_APP_BASE_URL}/product/parent/${response.data._id}`)
					.then((response) => {
						setProducts(response.data)
					})
			})
	}, [slug]);

	const handleCartUpdate = () => {
		const product = products[productIndex];
		const parentProduct = parentProductData;
		let cartObj = {
			product: product._id, parent: parentProduct._id, quantity: productQTY
		}
		if (productQTY > 0) {
			axios(`${process.env.REACT_APP_BASE_URL}/cart/update-cart`, {
				method: 'POST',
				data: cartObj,
				headers: {
					'Authorization': `Bearer ${user.accessToken}`
				}
			})
				.then((response) => {
					props.setAlert("Cart Updated!");
				})
				.catch((err) => {
					console.log(err)
					props.setAlert('Something went wrong!');
				})
		}else{
			props.setAlert("Quantity Should be greater than 0!")
		}
	}
	return (
		<>
			<Topbar />
			<section className='screen-size w-screen flex py-16  px-28'>
				<div className='w-1/2 h-full gap-8 flex flex-col items-center justify-start'>
					<img className='rounded-lg shadow-xl h-3/4 w-full object-cover' src={products[productIndex]?.thumbnail || parentProductData?.thumbnail} alt="" />
					<div className='h-1/4 flex gap-4 Rubik justify-center'>
						{
							products?.map((product, index) => {
								return <div onClick={() => { setProductIndex(index) }} key={"product" + index} className='cursor-pointer flex flex-col items-center'>
									<img className={productIndex === index ? 'border-separate border-2 border-accent p-0.5 h-4/6 rounded-lg shadow-xl object-cover' : 'border-separate border-2 border-transparent p-0.5 h-4/6 rounded-lg shadow-xl object-cover'} src={product?.thumbnail} alt="" />
									<p className='mt-1 font-semibold text-sm capitalize'>{product?.displayDetails}</p>
								</div>
							})
						}
					</div>
				</div>

				<div className='w-1/2 h-full px-10'>
					<h1 className='text-4xl font-bold Rubik text-blackAccent'>{products[productIndex]?.title || parentProductData?.title}</h1>
					<span className='flex mt-3'>
						<svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
						<svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
						<svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
						<svg aria-hidden="true" className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
						<svg aria-hidden="true" className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
					</span>
					<div className='flex items-center justify-between Rubik mt-5 w-3/4'>
						<h3 className='text-accent Rubik text-4xl font-bold'>${products[productIndex]?.price - products[productIndex]?.discountAmount}</h3>
						{products[productIndex]?.discountAmount > 0 && <p className='text-accentlight line-through text-lg'>${products[productIndex]?.price}</p>}
						{products[productIndex]?.discountAmount > 0 && <p className='text-gray-400 font-semibold'>{"Save $" + `${products[productIndex]?.discountAmount}`}</p>}
					</div>
					<div className='Rubik mt-6'>
						<h4 className='font-semibold text-xl text-blackAccent'>Description</h4>
						<p className='text-gray-500 text-lg mt-4'>{parentProductData?.description}</p>
					</div>
					<div className='Rubik mt-5'>
						<h4 className='font-semibold text-xl text-blackAccent'>Quantity</h4>
						<div className='bg-gray-100 grid grid-cols-4 text-center w-32 Rubik border-2 p-2 rounded-full shadow-lg mt-3'>
							<span className='select-none col-span-1 font-bold cursor-pointer' onClick={() => { setProductQTY(Math.abs(Number(productQTY) - 1)) }}>-</span>
							<span className='col-span-2 font-bold cursor-pointer'><input className='bg-gray-100 text-center w-full outline-none' type="text" value={Number(productQTY)} onChange={(e) => { setProductQTY(Number(e.target.value)) }} /></span>
							<span className='select-none col-span-1 font-bold cursor-pointer' onClick={() => { setProductQTY(productQTY < 10 && Number(productQTY) + 1) }}>+</span>
						</div>
					</div>

					<div className='flex justify-center mt-10'>
						<button onClick={handleCartUpdate} className='outline-none w-1/2 bg-accent shadow hover:shadow-md duration-200 text-white Rubik rounded-full px-8 py-3 text-sm'>Add To Cart</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default ProductDetails