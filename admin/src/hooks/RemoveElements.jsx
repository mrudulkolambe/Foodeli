const removeElementsFromArray = (data, array) => {
	const set = new Set(array);
	set.delete(data);
	return [...set]
}
export default removeElementsFromArray;