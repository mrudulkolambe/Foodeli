import axios from 'axios';
import { useContext, createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utilities/LocalStorage'

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

	const [user, setUser] = useState();
	useEffect(() => {
		if (user) {
			setLocalStorage("accesstoken", user)
		} else {
			setUser(getLocalStorage("accesstoken"))
			console.log(getLocalStorage("accesstoken"))
			// setLocalStorage("accesstoken", "")
		}
	}, [user]);

	return <AuthContext.Provider value={{ user, setUser }}>
		{children}
	</AuthContext.Provider>
}

const UseAuthContext = () => {
	return useContext(AuthContext);
}

export { AuthContextProvider, UseAuthContext };