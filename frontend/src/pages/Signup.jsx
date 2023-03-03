import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input'
import PrimaryButton from "../components/PrimaryButton";

const Signup = () => {
	const navigate = useNavigate();
	
	const initialFormState = {
		username: "",
		email: "",
		password: ""
	}
	const [formState, setFormState] = useState(initialFormState);

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.id]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios(`${process.env.REACT_APP_BASE_URL}/user/signup`, {
			method: "POST",
			data: formState
		})
			.then((response) => {
				if (response.status === 200)
					navigate('/');
			})
	}
	return (
		<>
			<section className='Rubik h-screen w-screen flex items-center justify-center'>
				<form onSubmit={handleSubmit} className='h-[75vh] w-[70vw] border rounded-lg shadow-xl flex items-center overflow-hidden'>
					<div className='h-full w-[50%] bg-accentlight'></div>
					<div className='p-14 flex flex-col justify-center h-full w-[50%] '>
						<div>
							<h1 className='text-3xl font-bold'>Create Account</h1>
							<p className='text-sm text-gray-500 mt-1'>Please enter your email and password for signup</p>
						</div>
						<div className='grid grid-cols-1 gap-3 mt-10'>
							<Input onChange={handleChange} label={"Username"} id="username" placeholder={"Enter your username"} />
							<Input onChange={handleChange} label={"Email Address"} id="email" placeholder={"Enter your email address..."} />
							<Input onChange={handleChange} label={"Password"} id="password" placeholder={"Enter your password"} />
							<PrimaryButton label={"Create Account"} className={"h-[45px] mt-5"} />
						</div>
						<div className='mt-6 flex items-center gap-2 text-sm justify-center'>
							<p>Already have an account?</p>
							<Link to={"/login"} className={"text-accent"}>Login</Link>
						</div>
					</div>
				</form>
			</section>
		</>
	)
}

export default Signup