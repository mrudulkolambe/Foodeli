import React, { useEffect } from 'react'

const Alert = ({ message, setMessage }) => {

	useEffect(() => {
		if(message?.length != 0){
			setTimeout(() => {
				setMessage("")
			}, 4000);
		}
	}, [message]);
	return (
		<>
			<div onClick={() => { setMessage("") }} className={message.length != 0 ? 'text-sm select-none z-[5000] top-10 cursor-pointer absolute left-1/2 -translate-x-1/2 w-max p-3 px-10 rounded-lg shadow-xl border duration-300 bg-white' : 'bg-white text-sm select-none z-[5000] -top-20 cursor-pointer absolute left-1/2 -translate-x-1/2 w-max p-3 px-10 rounded-lg shadow-xl border duration-300'}>{message}</div>
		</>
	)
}

export default Alert
