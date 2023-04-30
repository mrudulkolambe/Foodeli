import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

const Modal = ({ children, blocking = true, showModal, setShowModal, title, height, width }) => {

	const handleESC = (e) => {
		if (e.code === "Escape") {
			setShowModal()
		}
	}

	useEffect(() => {
		window.addEventListener('keyup', handleESC)
		return () => {
			window.removeEventListener('keyup', handleESC)
		};
	}, []);

	return (
		<>
			{blocking && <div className={showModal.show ? 'h-screen w-screen bg-black top-0 left-0 fixed bg-opacity-40 z-40 opacity-100 duration-300' : 'duration-300 h-screen w-screen bg-black top-0 left-0 fixed bg-opacity-40 z-40 opacity-0 pointer-events-none'}></div>}
			<div className={showModal.show ? 'overflow-auto Nunito p-8 shadow-xl fixed z-50 bg-white rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 duration-300' : 'p-8 overflow-auto Nunito fixed z-50 bg-white rounded-xl top-0 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none duration-300'} style={{ height: height, width: width }}>
				<h1 className='text-center font-extrabold text-2xl'>{title}</h1>
				<span onClick={setShowModal} className='absolute top-7 right-7 p-1 rounded-lg text-gray-400 hover:text-black border-transparent hover:border-gray-300 duration-200 cursor-pointer border-2 text-xl'>
					<IoClose />
				</span>
				{children}
			</div>
		</>
	)
}

export default Modal