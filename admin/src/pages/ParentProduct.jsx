import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import Input from '../components/FormFields/Input'
import Select from '../components/FormFields/Select'
import Grid from '../components/Layout/Grid'
import Layout from '../components/Layout/Layout'
import Modal from '../components/Modal/Modal'
import Table from '../components/Tables/Table'
import { data, tableConfig } from '../configs/Products'
import { UseProductContext } from '../context/ProductContext'
import addUniqueElementsToArray from '../hooks/AddUniqueElements'
import updateElementsOfArray from '../hooks/UpdateElements'
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
		category: "",
		description: "",
		minPrice: 0,
		maxPrice: 0
	}
	const [formState, setFormState] = useState(initialFormState);
	const [showModal, setShowModal] = useState({ show: false, update: false, data: undefined });
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.id]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (showModal.update) {
			setLoading(true)
			axios(`${process.env.REACT_APP_BASE_URL}/parent-product/${formState?._id}`, {
				method: "PATCH",
				data: formState
			})
				.then((response) => {
					setProductCategory(updateElementsOfArray(response.data, showModal.data, productCategory));
					setFormState(initialFormState);
					setShowModal({ show: false, update: false })
					setLoading(false)
				})
				.catch((err) => {
					console.log(err)
					setLoading(false)
				})
		} else {
			setLoading(true)
			axios(`${process.env.REACT_APP_BASE_URL}/parent-product/`, {
				method: "POST",
				data: formState
			})
				.then((response) => {
					setProductCategory(addUniqueElementsToArray(response.data, productCategory));
					setFormState(initialFormState);
					setShowModal({ show: false, update: false })
					setLoading(false)
				})
				.catch((err) => {
					console.log(err)
					setLoading(false)
				})
		}
	}

	const handleClickOnRow = (item) => {
		setShowModal({ show: true, update: true, data: item })
		setFormState(item)
	}
	const handleCloseModal = () => {
		setFormState(initialFormState);
		setShowModal({ show: false, update: false })
	}

	return (
		<>
			<Modal title={showModal.update ? "Update Parent Category" : "Create Parent Category"} blocking={true} showModal={showModal} setShowModal={handleCloseModal} height={"86vh"} width={"60vw"}>
				<form onSubmit={handleSubmit}>
					<Grid col={1} gapx={"30px"} gapy={"15px"} className="px-10 mt-4 h-full overflow-auto">
						<Input value={formState.title} placeholder={"Enter product title"} onChange={handleChange} label={"Product Title"} id={"title"} validators={textOnly} errorMsg={"Please enter a valid title"} />
						<Input value={formState.slug} placeholder={"Enter product slug"} onChange={handleChange} label={"Product Slug"} id={"slug"} validators={slug} errorMsg={"Please enter a valid slug"} />
						<Select value={formState.category} label="Select Category" placeholder={"Select Category"} id={"category"} onChange={handleChange} options={options} errorMsg={"Please Choose the Category"} />
						<Input value={formState.thumbnail} placeholder={"Enter thumbnail URL"} onChange={handleChange} label={"Product Thumbnail"} id={"thumbnail"} validators={url} errorMsg={"Please enter a thumbnail URL"} />
						<div className='grid grid-cols-2 gap-6'>
							<Input value={formState.minPrice} placeholder={"Enter Min Price"} onChange={handleChange} label={"Product Min Price"} id={"minPrice"} errorMsg={"Please enter a thumbnail URL"} />
							<Input value={formState.maxPrice} placeholder={"Enter Max Price"} onChange={handleChange} label={"Product Max Price"} id={"maxPrice"} errorMsg={"Please enter a thumbnail URL"} />
						</div>
						<div>
							<label htmlFor="description" className='text-sm font-bold mb-1 cursor-pointer'>Description: </label>
							<textarea placeholder='Enter description' id='description' onChange={handleChange} value={formState.description} className='w-full placeholder:text-sm outline-none border-2 rounded-lg px-3 py-2 focus:border-accent duration-200 read-only:cursor-pointer disabled:cursor-not-allowed '></textarea>
						</div>
						<PrimaryButton type="submit" label={showModal.update ? "Update" : "Submit"} loading={loading} />
					</Grid>
				</form>
			</Modal>

			<Layout sidebar={true}>
				<section className='px-20 py-10 w-full'>
					<h1 className='text-3xl font-bold col-span-2'>Product Category</h1>
					<div className='w-full'>
						<div className='w-full flex justify-between Nunito items-center mt-8'>
							<Input placeholder={"Search..."} width={"w-3/12"} className="py-1.5 text-sm h-[40px] font-semibold" />
							<PrimaryButton label="Add" className="h-max text-sm" onClick={() => { setShowModal({ show: true, update: false }) }} />
						</div>
						<div className='mt-7'>
							<Table onClick={handleClickOnRow} cols={20} data={productCategory} header={["Image", "Title", "Slug", "Category"]} format={tableConfig} height="66vh" />
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}

export default ParentProduct