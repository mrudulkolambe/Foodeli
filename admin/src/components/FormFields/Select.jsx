import React, { useState } from 'react'
import { select } from '../../validators/validators'

const Select = ({ width, id, label, value, placeholder, onChange, disabled, readOnly, className, options, errorMsg }) => {
	const [error, setError] = useState(false)
	return (
		<>
			<div className={'flex flex-col Nunito ' + width}>
				{label && <label htmlFor={id} className="text-sm font-bold mb-1 cursor-pointer">{label}: </label>}
				<select id={id} name={id} value={value} placeholder={placeholder} onChange={(e) => { select(e, setError, onChange) }} readOnly={readOnly} disabled={disabled} className={"placeholder:text-sm outline-none border-2 rounded-lg px-3 py-2 focus:border-accent duration-200 read-only:cursor-pointer disabled:cursor-not-allowed " + className} >
					<option value={""}>{"Select Category"}</option>
					{
						options.map((option, index) => {
							return <option key={"option" + index} value={option.value}>{option.label}</option>
						})
					}
				</select>
				{error && <p className='text-sm font-semibold text-accent mt-1'>{errorMsg}</p>}
			</div>
		</>
	)
}

export default Select