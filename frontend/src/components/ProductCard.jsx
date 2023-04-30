import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const ProductCard = ({ data, isProductPage }) => {
	return (
		<>
			<Link to={`/product/${data?.slug}`} className='cursor-pointer flex justify-end flex-col text-white p-6 layer relative rounded-2xl h-[350px] min-w-[18rem] w-72 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${data?.thumbnail})` }}>
				<h1 className='font-light text-xl relative z-20'>{data?.title}</h1>
				<h3 className='relative z-20 flex items-center font-medium text-white text-xl gap-0.5'><span className='text-yellow-300 text-sm font-medium'>$</span>{data?.minPrice}</h3>
				<p className='cursor-pointer text-white relative z-20 flex text-sm items-center'>Order Now <BiChevronRight className='text-2xl' /></p>
			</Link>
		</>
	)
}

export default ProductCard