import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const ProductCard = ({data}) => {
	return (
		<>
			<div className='cursor-pointer flex justify-end flex-col text-white p-6 layer relative rounded-2xl h-[350px] min-w-[18rem] w-72 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${data?.image})` }}>
				<h1 className='font-light text-2xl relative z-20'>{data?.title}</h1>
				<h3 className='relative z-20 flex items-center font-semibold text-white text-2xl gap-1'><span className='text-yellow-300 text-base font-bold'>$</span>{data?.price}</h3>
				<p className='cursor-pointer text-white relative z-20 flex items-center'>Order Now <BiChevronRight className='text-2xl'/></p>
			</div>
		</>
	)
}

export default ProductCard