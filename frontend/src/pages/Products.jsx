import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Topbar from '../components/Topbar'
import { UseProductContext } from '../context/Home'
import { serve } from '../data/home'

const Products = () => {
	const { productCategory } = UseProductContext();
	const [state, setState] = useState("burger")
	return (
		<>
			<section className='h-screen w-screen'>
				<Topbar />
				<main className='main-height w-screen '>
					<div className='h-[14%] flex items-center justify-center gap-7'>
						<div onClick={() => { setState("burger") }} className={state === "burger" ? 'cursor-pointer border shadow-lg h-max w-[10rem] duration-300 bg-accent p-[9px] rounded-full flex items-center gap-5' : 'cursor-pointer border shadow-lg h-max w-[10rem] bg-white p-[9px] rounded-full flex items-center gap-5 duration-300'}>
							<img className='bg-white p-[9px] h-9 rounded-full ' src="/assets/burger.png" alt="" />
							<p className={state === "burger" ? 'text-sm duration-300 text-white' : 'text-sm duration-300 text-blackAccent'}>Burger</p>
						</div>
						<div onClick={() => { setState("pizza") }} className={state === "pizza" ? 'cursor-pointer border shadow-lg h-max w-[10rem] duration-300 bg-accent p-[9px] rounded-full flex items-center gap-5' : 'cursor-pointer border shadow-lg h-max w-[10rem] bg-white p-[9px] rounded-full flex items-center gap-5 duration-300'}>
							<img className='bg-white p-[9px] h-9 rounded-full ' src="/assets/burger.png" alt="" />
							<p className={state === "pizza" ? 'text-sm duration-300 text-white' : 'text-sm duration-300 text-blackAccent'}>Pizza</p>
						</div>
						<div onClick={() => { setState("icecream") }} className={state === "icecream" ? 'cursor-pointer border shadow-lg h-max w-[10rem] duration-300 bg-accent p-[9px] rounded-full flex items-center gap-5' : 'cursor-pointer border shadow-lg h-max w-[10rem] bg-white p-[9px] rounded-full flex items-center gap-5 duration-300'}>
							<img className='bg-white p-[9px] h-9 rounded-full ' src="/assets/burger.png" alt="" />
							<p className={state === "icecream" ? 'text-sm duration-300 text-white' : 'text-sm duration-300 text-blackAccent'}>Icecream</p>
						</div>
					</div>
					<div className='grid grid-cols-4 p-4 px-20 w-max justify-items-center h-[86%] m-auto gap-8'>
						{
							productCategory.filter((product) => {
								return product.category === state
							})?.map((item, index) => {
								return <ProductCard data={item}  key={"item" + index}/> 
							})
						}
					</div>
				</main>
			</section>
		</>
	)
}

export default Products
