import React, { useEffect, useRef, useState } from 'react'
import useOnClickOutside from '../../hooks/ClickOutside'

const Select = ({ id, label, value, placeholder, onChange, disabled, options }) => {

	const menuRef = useRef()
	const [finalOptions, setFinalOptions] = useState(options || [])
	const [selectedOption, setSelectedOption] = useState();
	const [readOnly, setReadOnly] = useState(true)
	const [show, setShow] = useState(false)
	const handleSearch = (e) => {
		setText(e.target.value)
		if (text.length === 0) {
			setFinalOptions(options)
		} else {
			setFinalOptions(
				options.filter((option) => {
					return option.label?.toLowerCase().includes(e?.target?.value?.toLowerCase())
				})
			)
		}
	}
	const [text, setText] = useState("")

	useEffect(() => {
		setFinalOptions(options)
	}, [options]);

	useEffect(() => {
		if (selectedOption) {
			setText(selectedOption.label)
			let e = {
				target: {
					value: selectedOption.value,
					id: id
				}
			}
			onChange(e)
			setShow(false)
		}
	}, [selectedOption]);

	useOnClickOutside(menuRef, () => { setShow(false) });

	return (
		<>
			<div className='flex flex-col Nunito relative'>
				<label htmlFor={id} className="text-sm font-bold mb-1 cursor-pointer">{label}: </label>
				<input id={id} onChange={handleSearch} type={"text"} onFocus={() => { setReadOnly(false); setShow(true) }} onBlur={() => { setReadOnly(true) }} name={id} value={text} placeholder={placeholder} readOnly={readOnly} disabled={disabled} className="placeholder:text-black outline-none border-2 rounded-lg px-3 py-2 focus:border-accent duration-200 read-only:cursor-pointer disabled:cursor-not-allowed" />
				<div ref={menuRef} className={show ? 'overflow-auto min-h-[24px] max-h-[180px] h-auto py-3 absolute w-full top-[110%] flex flex-col px-3 bg-white shadow-xl border rounded-lg' : 'hidden'}>
					{
						finalOptions?.length === 0 ? <span className='flex items-center text-gray-500 select-none' >{"No Options Available"}</span> :
							finalOptions?.map((option, index) => {
								return <span className='duration-300 rounded-md p-3 hover:bg-blue-50 cursor-pointer flex items-center' key={"option" + index} onClick={() => { setSelectedOption(option) }}>{option.label}</span>
							})
					}
				</div>
			</div>
		</>
	)
}

export default Select