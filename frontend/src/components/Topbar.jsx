import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiLogIn } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import { UseAuthContext } from '../context/Auth'

const Topbar = () => {
	const routes = [
		{
			label: "Home",
			to: "/"
		},
		{
			label: "Product",
			to: "/products"
		},
		{
			label: "Orders",
			to: "/orders"
		},
		{
			label: "Contact Us",
			to: "/contact"
		},
	]
	const location = useLocation();

	const { user } = UseAuthContext()
	return (
		<>
			<nav className='relative z-0 flex justify-between items-center h-[100px] px-28 shadow-lg'>
				<div>
					<Link to={"/"} className='text-2xl font-bold'>Foodeli</Link>
				</div>
				<div className="flex gap-10 text-sm font-medium">
					{
						routes.map((item) => {
							if (location.pathname === item.to) {
								return <span className='relative marked' key={item.to}>
									<Link to={item.to}>{item.label}</Link>
								</span>
							} else {
								return <span className='relative' key={item.to}>
									<Link to={item.to}>{item.label}</Link>
								</span>
							}
						})
					}
				</div>
				<div className='flex items-center gap-8'>
					<FiSearch className='text-[22px]' />
					<HiOutlineShoppingBag className='text-[22px]' />
					{!user ? <Link to={"/login"} className='h-[40px] text-sm flex items-center text-white px-8 py-2 rounded-full bg-accent gap-2 outline-none'><BiLogIn className='text-lg' />Login</Link> : <button className='flex items-center text-white px-8 py-2 rounded-full bg-accent gap-2 outline-none text-sm h-[40px]'><BiLogIn className='text-lg' />Logout</button>}
				</div>
			</nav>
		</>
	)
}

export default Topbar