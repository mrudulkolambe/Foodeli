import React from 'react'
import Input from '../FormFields/Input'
import Grid from '../Layout/Grid'

const ParentCategoryModal = ({ show, setShowModal }) => {
	return (
		<>
			<div className={show ? 'h-screen w-screen bg-black top-0 left-0 fixed bg-opacity-40 z-40 opacity-100 duration-300' : 'duration-300 h-screen w-screen bg-black top-0 left-0 fixed bg-opacity-40 z-40 opacity-0 pointer-events-none'}></div>
			<div className={show ? 'fixed z-50 h-[80vh] w-[80vw] bg-white rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 duration-300' : 'fixed z-50 h-[80vh] w-[80vw] bg-white rounded-xl top-0 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none duration-300'}>
				<Grid className="" col={2} gapx={"30px"} gapy={"10px"}>
					<Input label={"Product Name"} placeholder="Enter placeholder text" />
					<Input label={"Product Name"} placeholder="Enter placeholder text" />
					<Input label={"Product Name"} placeholder="Enter placeholder text" />
					<Input label={"Product Name"} placeholder="Enter placeholder text" />
					<Input label={"Product Name"} placeholder="Enter placeholder text" />
				</Grid>
			</div>
		</>
	)
}

export default ParentCategoryModal