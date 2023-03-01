const addUniqueElementsToArray = (data, array) => {
	const set = new Set(array);
	set.add(data);
	return [...set]
}
export default addUniqueElementsToArray;