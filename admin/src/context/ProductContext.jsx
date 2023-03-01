import axios from 'axios';
import { useContext, createContext, useEffect, useState } from 'react';

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

	const [productCategory, setProductCategory] = useState([])

	useEffect(() => {
		axios(`${process.env.REACT_APP_BASE_URL}/parent-product/`, {
			method: "GET"
		})
			.then((response) => {
				setProductCategory(response.data)
			})
	}, []);
	return <ProductContext.Provider value={{ productCategory, setProductCategory }}>
		{children}
	</ProductContext.Provider>
}

const UseProductContext = () => {
	return useContext(ProductContext);
}

export { ProductContextProvider, UseProductContext };