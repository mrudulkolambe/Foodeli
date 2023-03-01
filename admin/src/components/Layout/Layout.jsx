import React from 'react'
import Navbar from '../Navbars/Navbar'

const Layout = ({ children, sidebar }) => {
	return (
		<>
			<section className='flex'>
				{sidebar && <Navbar />}
				<div className={sidebar ? 'w-[80vw] h-screen' : 'w-screen h-screen'}>{children}</div>
			</section>
		</>
	)
}

export default Layout