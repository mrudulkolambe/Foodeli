import React, { useState } from 'react'
import Topbar from '../components/Topbar'

const ProductDetails = () => {

	const [productQTY, setProductQTY] = useState(0)
	return (
		<>
			<Topbar />
			<section className='screen-size w-screen flex py-16  px-28'>
				<div className='w-1/2 h-full gap-8 flex flex-col items-center'>
					<img className='rounded-lg shadow-xl h-3/4 w-full object-cover' src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
					<div className='h-1/4 grid grid-cols-4 Rubik'>
						<div className='flex flex-col items-center'>
							<img className='border-separate border-2 border-accent p-0.5 h-4/6 rounded-lg shadow-xl object-cover' src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
							<p className='mt-1 font-semibold text-sm'>Medium</p>
						</div>
						<div className='flex flex-col items-center'>
							<img className='border-separate border-2 border-transparent p-0.5 h-4/6 rounded-lg shadow-xl object-cover' src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
							<p className='mt-1 font-semibold text-sm'>Medium</p>
						</div>
						<div className='flex flex-col items-center'>
							<img className='border-separate border-2 border-transparent p-0.5 h-4/6 rounded-lg shadow-xl object-cover' src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
							<p className='mt-1 font-semibold text-sm'>Medium</p>
						</div>
						<div className='flex flex-col items-center'>
							<img className='border-separate border-2 border-transparent p-0.5 h-4/6 rounded-lg shadow-xl object-cover' src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
							<p className='mt-1 font-semibold text-sm'>Medium</p>
						</div>
					</div>
				</div>

				<div className='w-1/2 h-full px-10'>
					<h1 className='text-4xl font-bold Rubik text-blackAccent'>Mexican Pizza</h1>
					<span className='flex mt-3'>
						<svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
						<svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
						<svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
						<svg aria-hidden="true" class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
						<svg aria-hidden="true" class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
					</span>
					<div className='flex items-center justify-between Rubik mt-5 w-3/4'>
						<h3 className='text-accent Rubik text-4xl font-bold'>$131.00</h3>
						<p className='text-accentlight line-through text-lg'>$151.00</p>
						<p className='text-gray-400 font-semibold'>Save $20</p>
					</div>
					<div className='Rubik mt-6'>
						<h4 className='font-semibold text-xl text-blackAccent'>Description</h4>
						<p className='text-gray-500 text-lg mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat qui impedit mollitia esse saepe magni quia commodi molestiae iste quaerat! Quod consequatur ad cupiditate omnis atque temporibus quo, impedit, totam, saepe quis quia voluptate culpa neque adipisci dolor exercitationem.</p>
					</div>
					<div className='Rubik mt-5'>
						<h4 className='font-semibold text-xl text-blackAccent'>Quantity</h4>
						<div className='bg-gray-100 grid grid-cols-4 text-center w-32 Rubik border-2 p-2 rounded-full shadow-lg mt-3'>
							<span className='select-none col-span-1 font-bold cursor-pointer' onClick={() => { setProductQTY(Number(productQTY) - 1) }}>-</span>
							<span className='col-span-2 font-bold cursor-pointer'><input className='bg-gray-100 text-center w-full outline-none' type="text" value={Number(productQTY)} onChange={(e) => { setProductQTY(Number(e.target.value)) }} /></span>
							<span className='select-none col-span-1 font-bold cursor-pointer' onClick={() => { setProductQTY(Number(productQTY) + 1) }}>+</span>
						</div>
					</div>

					<div className='flex justify-center mt-10'>
						<button className='outline-none w-1/2 bg-accent shadow hover:shadow-md duration-200 text-white Rubik rounded-full px-8 py-3 text-sm'>Add To Cart</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default ProductDetails