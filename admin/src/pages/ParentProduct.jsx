import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import Input from '../components/FormFields/Input'
import Select from '../components/FormFields/Select'
import Grid from '../components/Layout/Grid'
import Layout from '../components/Layout/Layout'
import Modal from '../components/Modal/Modal'
import Table from '../components/Tables/Table'
import { data, tableConfig } from '../configs/ParentProduct'
import { UseProductContext } from '../context/ProductContext'
import addUniqueElementsToArray from '../hooks/AddUniqueElements'
import { slug, textOnly, url } from '../validators/validators'

const ParentProduct = () => {
	const options = [
		{ value: 'burger', label: 'Burger' },
		{ value: 'pizza', label: 'Pizza' },
		{ value: 'icecream', label: 'Ice-Cream' },
		{ value: 'cupcake', label: 'CupCake' },
		{ value: 'ramen', label: 'Ramen' },
	]

	const { productCategory, setProductCategory } = UseProductContext()
	const initialFormState = {
		title: "",
		slug: "",
		thumbnail: "",
		category: ""
	}
	const [formState, setFormState] = useState(initialFormState);
	const [showModal, setShowModal] = useState(false)

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.id]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios(`${process.env.REACT_APP_BASE_URL}/parent-product/`, {
			method: "POST",
			data: formState
		})
			.then((response) => {
				setProductCategory(addUniqueElementsToArray(response.data, productCategory));
				setFormState(initialFormState);
				setShowModal(false)
			})
	}

	return (
		<>
			<Modal title={"Create Parent Category"} blocking={true} show={showModal} setShow={setShowModal} height={"auto"} width={"60vw"}>
				<form onSubmit={handleSubmit}>
					<Grid col={1} gapx={"30px"} gapy={"15px"} className="px-10 mt-4">
						<Input value={formState.title} placeholder={"Enter product title"} onChange={handleChange} label={"Product Title"} id={"title"} validators={textOnly} errorMsg={"Please enter a valid title"} />
						<Input value={formState.slug} placeholder={"Enter product slug"} onChange={handleChange} label={"Product Slug"} id={"slug"} validators={slug} errorMsg={"Please enter a valid slug"} />
						<Select value={formState.category} label="Select Category" placeholder={"Select Category"} id={"category"} onChange={handleChange} options={options} errorMsg={"Please Choose the Category"}/>
						<Input value={formState.thumbnail} placeholder={"Enter thumbnail URL"} onChange={handleChange} label={"Product Thumbnail"} id={"thumbnail"} validators={url} errorMsg={"Please enter a thumbnail URL"} />
						<PrimaryButton type="submit" label="Submit" loading={false} />
					</Grid>
				</form>
			</Modal>

			<Layout sidebar={true}>
				<section className='px-20 py-10 w-full'>
					<h1 className='text-3xl font-bold col-span-2'>Product Category</h1>
					<div className='w-full'>
						<div className='w-full flex justify-between Nunito items-center mt-8'>
							<Input placeholder={"Search..."} width={"w-3/12"} className="py-1.5 text-sm h-[40px] font-semibold" />
							<PrimaryButton label="Add" className="h-max text-sm" onClick={() => { setShowModal(true) }} />
						</div>
						<div className='mt-7'>
							<Table cols={20} data={productCategory} header={["Image", "Title", "Slug", "Category"]} format={tableConfig} height="66vh" />
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}

export default ParentProduct