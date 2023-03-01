import React, { useState } from 'react'

const Input = ({ width, id, label, type = "text", value, placeholder, onChange, disabled, readOnly, errorMsg, validators = (e) => { onChange(e) }, className }) => {
	const [error, setError] = useState(false)
	return (
		<>
			<div className={'flex flex-col Nunito ' + width}>
				{label && <label htmlFor={id} className="text-sm font-semibold mb-1 cursor-pointer">{label}: </label>}
				<input spellCheck={false} type={type} id={id} name={id} value={value} placeholder={placeholder} onChange={(e) => { validators(e, setError, onChange) }} readOnly={readOnly} disabled={disabled} className={"placeholder:text-sm outline-none border-2 rounded-lg px-3 py-2 focus:border-accent duration-200 read-only:cursor-pointer disabled:cursor-not-allowed h-[45px] " + className} />
				{error && <p className='text-sm font-semibold text-accent mt-1'>{errorMsg}</p>}
			</div>
		</>
	)
}

export default Input