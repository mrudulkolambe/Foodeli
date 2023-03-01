import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdSpaceDashboard } from 'react-icons/md';
import { BiCategoryAlt } from 'react-icons/bi';
import { FaPizzaSlice } from 'react-icons/fa';
import { AiOutlineProfile } from 'react-icons/ai';

const Navbar = () => {
	const location = useLocation()
	const routes = [
		{
			to: "/",
			label: "Dashboard",
			icon: <MdSpaceDashboard className='text-xl' />
		},
		{
			to: "/category",
			label: "Category",
			icon: <BiCategoryAlt className='text-xl' />
		},
		{
			to: "/product-category",
			label: "Product Category",
			icon: <FaPizzaSlice className='text-xl' />
		},
		{
			to: "/product",
			label: "Products",
			icon: <FaPizzaSlice className='text-xl' />
		},
		{
			to: "/order",
			label: "Orders",
			icon: <AiOutlineProfile className='text-xl' />
		}
	]
	return (
		<>
			<section className='w-[20vw] h-screen shadow-xl'>
				<Link to={"/"} className='h-[10%] w-full text-3xl font-bold flex items-center justify-center'>Foodeli</Link>
				<div className='h-[90%] w-full flex flex-col items-center'>
					<div className='w-full flex flex-col nav'>
						<h2 className='text-xl font-bold px-8'>Menu</h2>
						<div className='mt-5 flex flex-col gap-4'>
							{
								routes.map((route, index) => {
									return <Link to={route.to} key={"route" + index} className={location.pathname === route.to ? 'duration-200 py-2 pl-8 border-r-4 border-accent flex items-center gap-3 font-bold text-accent' : 'hover:text-accentlight duration-200 py-2 pl-8 border-r-4 border-transparent flex items-center gap-3 font-bold text-slate-400'}>{route.icon}{route.label}</Link>
								})
							}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Navbar