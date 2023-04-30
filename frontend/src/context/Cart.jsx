import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	return <CartContext.Provider value={{ cart, setCart }}>
		{children}
	</CartContext.Provider>
}

const UseCartContext = () => {
	return useContext(CartContext)
}

export { CartContextProvider, UseCartContext }