import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../components/ProductCard';
import Topbar from '../components/Topbar'
import { serve } from '../data/home';
import 'swiper/css';
import { UseProductContext } from '../context/Home';

const Home = () => {
	const [foodState, setFoodState] = useState("burger")
	const { products, productCategory} = UseProductContext()
	return (
		<>
			<main>
				<Topbar />
				<section className='screen-size w-screen px-28 flex'>
					<div className='w-1/2 screen-size py-10 flex flex-col'>
						<span className='w-max bg-red-500 px-5 py-3 rounded-full bg-opacity-20 text-accent text-sm font-semibold'>More than faster</span>
						<div className='mt-16'>
							<h1 className=' text-7xl font-bold Rubik text-blackAccent'>Claim Best Offer <br />on Fast <span className='font-medium Lobster text-accent'>Food</span> & <br /> <span className='Lobster font-medium text-accent'>Restaurants</span></h1>
							<p className='font-medium w-[70%] text-gray-700 mt-4'>Our job is to filling your tummy with delicious food and with fast and free delivery</p>
							<div className='mt-10'>
								<button className='bg-accent text-white px-8 py-4 rounded-full'>Get Started</button>
							</div>
							<div className='border-2 w-max py-4 shadow-xl px-6 rounded-lg mt-8 flex items-center gap-4'>
								<div className='flex'>
									<img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" className='object-cover border-4 border-white h-16 w-16 rounded-full' alt="" />
									<img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" className='-ml-5 object-cover border-4 border-white h-16 w-16 rounded-full' alt="" />
									<img src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60" className='-ml-5 object-cover border-4 border-white h-16 w-16 rounded-full' alt="" />
								</div>
								<div>
									<h3 className='font-bold text-lg'>Our Happy Customer</h3>
									<div className='flex gap-2 items-center font-medium'>
										<svg aria-hidden="true" className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
										<p>4.8</p>
										<p className='text-gray-500'>(12,5k Review)</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='w-1/2 screen-size py-10 flex items-center'>
						<img className='w-[95%]' src="/bg2.png" alt="" />
					</div>
				</section>
				<section className='h-screen w-screen px-28 py-16'>
					<h3 className='text-center text-xl text-accent font-semibold tracking-wider'>WHAT  WE  SERVE</h3>
					<h1 className='text-center text-5xl font-bold text-blackAccent mt-5 leading-[3.5rem]'>Your Favorite Food <br /> Delivery Partner </h1>
					<div className='grid grid-cols-3 mt-24'>
						<div className='text-center flex items-center flex-col'>
							<img src="/assets/order.svg" className='w-[60%] aspect-square' alt="" />
							<h3 className='text-3xl font-extrabold text-blackAccent mt-5'>Easy To Order</h3>
							<p className='font-normal text-gray-700 mt-2 w-3/4 text-base'>You only need a few steps in ordering food</p>
						</div>
						<div className='text-center flex items-center flex-col'>
							<img src="/assets/fast-delivery.svg" className='w-[60%] aspect-square' alt="" />
							<h3 className='text-3xl font-extrabold text-blackAccent mt-5'>Fastest Delivery</h3>
							<p className='font-normal text-gray-700 mt-2 w-3/4 text-base'>Delivery that is always ontime even faster</p>
						</div>
						<div className='text-center flex items-center flex-col'>
							<img src="/assets/waiter.svg" className='w-[60%] aspect-square' alt="" />
							<h3 className='text-3xl font-extrabold text-blackAccent mt-5'>Best Quality</h3>
							<p className='font-normal text-gray-700 mt-2 w-3/4 text-base'>Not only fast for us 	quality is also number one</p>
						</div>
					</div>
				</section>
				<section className='h-screen w-screen px-28 py-16'>
					<h3 className='tracking-wider text-xl text-accent font-semibold'>OUR MENU</h3>
					<h1 className='leading-[3.5rem] capitalize text-5xl font-bold text-blackAccent mt-5'>Menu that always <br />Makes you fall in love </h1>
					<div className='flex mt-5 items-center'>
						<div className='w-1/5 grid grid-rows-4'>
							<div className='w-full flex cursor-pointer select-none' onClick={() => { setFoodState('burger') }}>
								<div className='w-3/4 h-full py-1'>
									<div className={foodState === "burger" ? 'duration-300 bg-accent p-3 rounded-full flex items-center gap-5' : 'bg-white p-3 rounded-full flex items-center gap-5 duration-300'}>
										<img className='bg-white p-3 h-12 rounded-full ' src="/assets/burger.png" alt="" />
										<p className={foodState === "burger" ? 'duration-300 text-lg text-white' : 'duration-300  text-lg text-blackAccent'}>Burger</p>
									</div>
								</div>
								<div className='w-1/5 h-full flex justify-end'><span className={foodState == "burger" ? 'duration-300 rounded-full w-1.5 flex bg-accent' : 'rounded-t-full w-1.5 flex bg-gray-300 duration-300'}></span></div>
							</div>
							<div className='w-full flex cursor-pointer select-none' onClick={() => { setFoodState("pizza") }}>
								<div className='w-3/4 h-full py-1'>
									<div className={foodState === "pizza" ? 'duration-300 bg-accent p-3 rounded-full flex items-center gap-5' : 'bg-white p-3 rounded-full flex items-center gap-5 duration-300'}>
										<img className='bg-white p-3 h-12 rounded-full ' src="/assets/burger.png" alt="" />
										<p className={foodState === "pizza" ? 'duration-300 text-lg text-white' : 'duration-300  text-lg text-blackAccent'}>Pizza</p>
									</div>
								</div>
								<div className='w-1/5 h-full flex justify-end'><span className={foodState == "pizza" ? 'duration-300 rounded-full w-1.5 flex bg-accent' : 'w-1.5 flex bg-gray-300 duration-300'}></span></div>
							</div>
							<div className='w-full flex cursor-pointer select-none' onClick={() => { setFoodState(2) }}>
								<div className='w-3/4 h-full py-1'>
									<div className={foodState === 2 ? 'duration-300 bg-accent p-3 rounded-full flex items-center gap-5' : 'bg-white p-3 rounded-full flex items-center gap-5 duration-300'}>
										<img className='bg-white p-3 h-12 rounded-full ' src="/assets/burger.png" alt="" />
										<p className={foodState === 2 ? 'duration-300 text-lg text-white' : 'duration-300  text-lg text-blackAccent'}>Cupcake</p>
									</div>
								</div>
								<div className='w-1/5 h-full flex justify-end'><span className={foodState == 2 ? 'duration-300 rounded-full w-1.5 flex bg-accent' : ' w-1.5 flex bg-gray-300 duration-300'}></span></div>
							</div>
							<div className='w-full flex cursor-pointer select-none' onClick={() => { setFoodState(3) }}>
								<div className='w-3/4 h-full py-1'>
									<div className={foodState === 3 ? 'duration-300 bg-accent p-3 rounded-full flex items-center gap-5' : 'bg-white p-3 rounded-full flex items-center gap-5 duration-300'}>
										<img className='bg-white p-3 h-12 rounded-full ' src="/assets/burger.png" alt="" />
										<p className={foodState === 3 ? 'duration-300 text-lg text-white' : 'duration-300  text-lg text-blackAccent'}>Icecream</p>
									</div>
								</div>
								<div className='w-1/5 h-full flex justify-end'><span className={foodState == 3 ? 'duration-300 rounded-full w-1.5 flex bg-accent' : ' w-1.5 flex bg-gray-300 duration-300'}></span></div>
							</div>
							<div className='w-full flex cursor-pointer select-none' onClick={() => { setFoodState(4) }}>
								<div className='w-3/4 h-full py-1'>
									<div className={foodState === 4 ? 'duration-300 bg-accent p-3 rounded-full flex items-center gap-5' : 'bg-white p-3 rounded-full flex items-center gap-5 duration-300'}>
										<img className='bg-white p-3 h-12 rounded-full ' src="/assets/burger.png" alt="" />
										<p className={foodState === 4 ? 'duration-300 text-lg text-white' : 'duration-300  text-lg text-blackAccent'}>Ramen</p>
									</div>
								</div>
								<div className='w-1/5 h-full flex justify-end'><span className={foodState == 4 ? 'duration-300 rounded-full w-1.5 flex bg-accent' : 'rounded-b-full  w-1.5 flex bg-gray-300 duration-300'}></span></div>
							</div>
						</div>
						<div className='pl-10 w-4/5 flex'>
							<Swiper
								slidesPerView={3}
								spaceBetween={10}
							>
								{
									productCategory.filter((product) => {
										return product.category === foodState
									})?.map((item, index) => {
										return <SwiperSlide key={"item" + index} ><ProductCard data={item} isProductPage={true}/></SwiperSlide>
									})
								}
							</Swiper>
						</div>
					</div>
				</section>
				<section className='flex h-screen w-screen px-28 py-16'>
					<div className='w-1/2 h-full flex items-center justify-start'>
						<img src="/assets/cook.png" className='w-[80%] object-contain' alt="" />
					</div>
					<div className='w-1/2 h-full py-10 justify-center flex flex-col'>
						<h3 className='tracking-wider text-lg text-accent font-semibold'>WHAT THEY SAY</h3>
						<h1 className='Rubik text-5xl font-bold text-blackAccent leading-[50px] mt-5'>What Our Customers <br /> Say About Us</h1>
						<p className='mt-7 Rubix text-lg font-medium w-3/5'>"Fudo is the best. Besides the many and delicious meals, the service is also very good, especially in the very fast delivery. I highly recommend Fudo to you."</p>
						<div className='Rubik flex items-center gap-5 mt-7'>
							<img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" className='h-14 w-14 rounded-full' alt="" />
							<div className='flex flex-col'>
								<h3 className='text-lg font-bold text-blackAccent'>Theresa Jordan</h3>
								<h5 className='text-sm text-gray-600'>Food Enthusiast</h5>
							</div>
						</div>
					</div>
				</section>
			</main>

		</>
	)
}

export default Home
