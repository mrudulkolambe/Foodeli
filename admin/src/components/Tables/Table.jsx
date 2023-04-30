import React from 'react'

const Table = ({ data, header, format, cols, height, onClick }) => {
	return (
		<>
			<div className='w-full Nunito border-2 rounded-lg'>
				<div className='text-white font-bold grid py-3 bg-accent px-10 rounded-t-lg' style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
					{
						header.map((head, index) => {
							return <span className='flex items-center justify-center' style={{ gridColumn: `span ${format[index].colSpan} / span ${format[index].colSpan}` }} key={"header" + index}>{head}</span>
						})
					}
				</div>
				<div style={{ height: height }} className="overflow-auto">
					{
						data.map((item, index) => {
							return <div key={"1" + index} className={index === data.length - 1 ? 'place-items-center hover:bg-accent duration-200 hover:bg-opacity-10 cursor-pointer overflow-hidden border-t-2 grid py-2 px-10 rounded-b-lg' : 'place-items-center hover:bg-accent duration-200 hover:bg-opacity-10 cursor-pointer border-t-2 grid py-2 px-10'} style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
								{
									format.map((rowItem, index) => {
										if (rowItem?.isImage) {
											return <img onClick={() => { onClick(item) }} key={"2" + index} className='h-16 w-16 object-cover rounded-lg' style={{ gridColumn: `span ${rowItem.colSpan} / span ${rowItem.colSpan}` }} src={item[`${rowItem.label}`]} alt="" />
										} else {
											return <span onClick={() => { onClick(item) }} key={"2" + index} className='flex items-center' style={{ gridColumn: `span ${rowItem.colSpan} / span ${rowItem.colSpan}` }}>{item[`${rowItem.label}`]}</span>
										}
									})
								}
							</div>
						})
					}
				</div>
			</div>
		</>
	)
}

export default Table