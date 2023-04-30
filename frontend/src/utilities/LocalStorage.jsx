
const setLocalStorage = (key, value) => {
	window.localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorage = (key) => {
	if(window.localStorage.getItem(key)) {
		return JSON.parse(window.localStorage.getItem(key))
	}else{
		return undefined
	}
}

export { setLocalStorage, getLocalStorage }