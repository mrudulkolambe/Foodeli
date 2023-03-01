import React from 'react'
import Spinner from '../Loaders/Spinner';

const PrimaryButton = ({ label, loading, className, onClick, type }) => {
	return (
		<button type={type} onClick={onClick} className={'outline-none px-4 py-2 rounded-lg bg-accent duration-300 text-white font-bold disabled:cursor-not-allowed ' + className} disabled={loading}>{loading ? <Spinner /> : label}</button>
	)
}

export default PrimaryButton