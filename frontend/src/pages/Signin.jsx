import React from 'react'
import { Link } from 'react-router-dom';
import Input from '../components/Input'
import PrimaryButton from "../components/PrimaryButton";

const Signin = () => {
	return (
		<>
			<section className='Rubik h-screen w-screen flex items-center justify-center'>
				<form className='h-[75vh] w-[70vw] border rounded-lg shadow-xl flex items-center overflow-hidden'>
					<div className='h-full w-[50%] bg-accentlight'></div>
					<div className='p-14 flex flex-col justify-center h-full w-[50%] '>
						<div>
							<h1 className='text-3xl font-bold'>Login</h1>
							<p className='text-sm text-gray-500 mt-1'>Please enter your email and password for login</p>
						</div>
						<div className='grid grid-cols-1 gap-3 mt-10'>
							<Input label={"Email Address"} placeholder={"Enter your email address..."} />
							<Input label={"Password"} placeholder={"Enter your password"} />
							<p className='text-xs text-gray-500 font-medium text-right mb-3'>forget your password?</p>
							<PrimaryButton label={"Login"} type="button" className={"h-[45px]"} />
						</div>
						<div className='mt-6 flex items-center gap-2 text-sm justify-center'>
							<p>Don't have an account?</p>
							<Link to={"/signup"} className={"text-accent"}>Signup</Link>
						</div>
					</div>
				</form>
			</section>
		</>
	)
}

export default Signin