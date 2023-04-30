import React, { useState } from 'react'
import PrimaryButton from '../components/Buttons/PrimaryButton';
import Input from '../components/FormFields/Input';
import Select from '../components/FormFields/Select';
import Grid from '../components/Layout/Grid';
import Layout from '../components/Layout/Layout';
import Modal from '../components/Modal/Modal';
import Table from '../components/Tables/Table';
import { productTableConfig, tableConfig } from '../configs/Products';
import { slug, textOnly, url } from '../validators/validators';
import { UseProductContext } from '../context/ProductContext';
import axios from 'axios';
import { availableOptions } from '../helpers/OptionConstants';
import addUniqueElementsToArray from '../hooks/AddUniqueElements';
import updateElementsOfArray from '../hooks/UpdateElements'

const Product = () => {
	const [showModal, setShowModal] = useState({ show: false, update: false, data: undefined });
	const { productCategory, products, setProducts } = UseProductContext()
	const initialFormState = {
		title: "",
		slug: "",
		thumbnail: "",
		productID: "",
		displayDetails: "",
		price: 0,
		available: false,
		discountAmount: 0,
	}
	const [formState, setFormState] = useState(initialFormState);

	const handleChange = (e) => {
		if (e.target.id === "price") {
			setFormState({
				...formState,
				[e.target.id]: Number(e.target.value)
			})
		} else if (e.target.id === "discountAmount") {
			setFormState({
				...formState,
				[e.target.id]: Number(e.target.value)
			})
		} else if (e.target.id === "available") {
			setFormState({
				...formState,
				[e.target.id]: Boolean(e.target.value)
			})
		} else {
			console.log(e.target.value)
			setFormState({
				...formState,
				[e.target.id]: e.target.value
			})
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (showModal.update) {
			axios(`${process.env.REACT_APP_BASE_URL}/product/${formState?._id}`, {
				method: "PATCH",
				data: formState
			})
				.then((response) => {
					setProducts(updateElementsOfArray(response.data, showModal.data, products));
					setFormState(initialFormState);
					setShowModal({ show: false, update: false, data: undefined })
				})
				.catch((err) => {
					console.log(err)
				})
		} else {
			axios(`${process.env.REACT_APP_BASE_URL}/product/`, {
				method: "POST",
				data: formState
			})
				.then((response) => {
					setProducts(addUniqueElementsToArray(response.data, products));
					setFormState(initialFormState);
					setShowModal({ show: false, update: false, data: undefined })
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}

	const handleCloseModal = () => {
		setFormState(initialFormState);
		setShowModal({ show: false, update: false })
	}

	const handleClickOnRow = (item) => {
		setShowModal({ show: true, update: true, data: item })
		setFormState(item)
	}

	return (
		<>
			<Modal showModal={showModal} setShowModal={handleCloseModal} blocking={true} title={showModal.update ? "Update Product" : "Create Product"} height={"90vh"} width={"70vw"}>
				<form onSubmit={handleSubmit}>
					<Grid col={1} gapx={"30px"} gapy={"15px"} className={"mt-4"}>
						<Input value={formState.title} placeholder={"Enter product title"} onChange={handleChange} label={"Product Title"} id={"title"} errorMsg={"Please enter a valid title"} />
						<Input value={formState.slug} placeholder={"Enter product slug"} onChange={handleChange} label={"Product Slug"} id={"slug"} validators={slug} errorMsg={"Please enter a valid slug"} />
						<Input value={formState.thumbnail} placeholder={"Enter product thumbnail"} onChange={handleChange} label={"Product Thumbnail"} id={"thumbnail"} validators={url} errorMsg={"Please enter a valid thumbnail"} />
						<Select value={formState?.productID._id} options={productCategory.map((item) => {
							return { label: `${item.title} (${item.slug})`, value: item._id }
						})} label={"Product ID"} onChange={handleChange} id={"productID"} />
						{console.log(formState.productID._id)}
						<Select options={availableOptions} value={formState.available} label={"Product Available"} onChange={handleChange} id={"available"} />
						<Input value={formState.displayDetails} placeholder={"Enter product display detail"} onChange={handleChange} label={"Product Display detail"} id={"displayDetails"} validators={textOnly} errorMsg={"Please enter a valid detail"} />
						<Input value={formState.price} type={"number"} placeholder={"Enter product price"} onChange={handleChange} label={"Product Price"} id={"price"} errorMsg={"Please enter a valid price"} />
						<Input value={formState.discountAmount} type={"number"} placeholder={"Enter product discount prize"} onChange={handleChange} label={"Product Discount Price"} id={"discountAmount"} errorMsg={"Please enter a valid discount price"} />
						<PrimaryButton label={showModal.update ? "Update" : "Submit"} type="submit" />
					</Grid>
				</form>
			</Modal>
			<Layout sidebar={true}>
				<section className='px-20 py-10 w-full'>
					<h1 className='text-3xl font-bold col-span-2'>Products</h1>
					<div className='w-full'>
						<div className='w-full flex justify-between Nunito items-center mt-8'>
							<Input placeholder={"Search..."} width={"w-3/12"} className="py-1.5 text-sm h-[40px] font-semibold" />
							<PrimaryButton label="Add" className="h-max text-sm" onClick={() => { setShowModal({ show: true, update: false, data: undefined }) }} />
						</div>
						<div className='mt-7'>
							<Table onClick={handleClickOnRow} cols={20} data={products || []} header={["Image", "Title", "Slug", "Price"]} format={productTableConfig} height="66vh" />
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}

export default Product