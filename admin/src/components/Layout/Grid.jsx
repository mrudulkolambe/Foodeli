import React from 'react'

const Grid = ({ children, col = 1, row = 1, gapx = 0, gapy = 0, className }) => {
	return (
		<>
			<section className={'grid ' + className} style={{ gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`, gridTemplateRows: `repeat(${row}, minmax(0, 1fr))`, rowGap: `${gapy}`, columnGap: `${gapx}` }}>{children}</section>
		</>
	)
}

export default Grid