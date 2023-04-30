import React from 'react'

const CategoryButton = () => {
	return (
		<div className={true ? 'cursor-pointer border shadow-lg h-max w-[9rem] duration-300 bg-accent p-[9px] rounded-full flex items-center gap-5' : 'cursor-pointer border shadow-lg h-max w-[9rem] bg-white p-[9px] rounded-full flex items-center gap-5 duration-300'}>
			<img className='bg-white p-[9px] h-9 rounded-full ' src="/assets/burger.png" alt="" />
			<p className={true ? 'duration-300 text-white' : 'duration-300 text-blackAccent'}>Pizza</p>
		</div>
	)
}

export default CategoryButton
