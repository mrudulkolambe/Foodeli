import React, { useState } from 'react'
import PrimaryButton from '../components/Buttons/PrimaryButton';
import Input from '../components/FormFields/Input';
import Grid from '../components/Layout/Grid';
import Layout from '../components/Layout/Layout';
import Modal from '../components/Modal/Modal';
import Table from '../components/Tables/Table';
import { tableConfig } from '../configs/ParentProduct';

const Product = () => {
	const [showModal, setShowModal] = useState(false)
	return (
		<>
			<Modal show={showModal} setShow={setShowModal} blocking={true} title="Create Product" height={"80vh"} width={"80vw"}>
				<form>
					<Grid>

					</Grid>
				</form>
			</Modal>
			<Layout sidebar={true}>
				<section className='px-20 py-10 w-full'>
					<h1 className='text-3xl font-bold col-span-2'>Products</h1>
					<div className='w-full'>
						<div className='w-full flex justify-between Nunito items-center mt-8'>
							<Input placeholder={"Search..."} width={"w-3/12"} className="py-1.5 text-sm h-[40px] font-semibold" />
							<PrimaryButton label="Add" className="h-max text-sm" onClick={() => { setShowModal(true) }} />
						</div>
						<div className='mt-7'>
							<Table cols={20} data={[]} header={["Image", "Title", "Slug", "Category"]} format={tableConfig} height="66vh" />
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}

export default Product