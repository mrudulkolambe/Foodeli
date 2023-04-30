import axios from 'axios';
import { useContext, createContext, useEffect, useState } from 'react';

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

	const [productCategory, setProductCategory] = useState([]);
	const [products, setProducts] = useState([])

	useEffect(() => {
		axios(`${process.env.REACT_APP_BASE_URL}/parent-product/`, {
			method: "GET"
		})
			.then((response) => {
				setProductCategory(response.data)
			})
		axios(`${process.env.REACT_APP_BASE_URL}/product/`, {
			method: "GET"
		})
			.then((response) => {
				console.log(response.data)
				setProducts(response.data)
			})
	}, []);
	return <ProductContext.Provider value={{ productCategory, setProductCategory, products, setProducts }}>
		{children}
	</ProductContext.Provider>
}

const UseProductContext = () => {
	return useContext(ProductContext);
}

export { ProductContextProvider, UseProductContext };