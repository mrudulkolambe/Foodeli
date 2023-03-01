const textOnly = (e, setError, changeHandler) => {
	var regex = /^[a-zA-Z\s]*$/;
	if (e.target.value.match(regex)) {
		setError(false)
		changeHandler(e)
	}
	else {
		setError(true)
	}
}

const slug = (e, setError, changeHandler) => {
	var regex = /[a-z\-]+/;
	if (e.target.value.match(regex)) {
		setError(false)
		changeHandler(e)
	}
	else {
		setError(true)
	}
}

const url = (e, setError, changeHandler) => {
	var regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
	if (e.target.value.match(regex)) {
		setError(false)
		changeHandler(e)
	}
	else {
		setError(true)
	}
}

const select = (e, setError, changeHandler) => {
	if (e.target.value === "") {
		setError(true)
	} else {
		changeHandler(e)
		setError(false)
	}
}

export { textOnly, slug, url, select };