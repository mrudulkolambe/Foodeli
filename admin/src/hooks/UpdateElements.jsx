const updateElementsOfArray = (data, oldData, array) => {
	const set = new Set(array);
	set.delete(oldData);
	set.add(data);
	console.log(oldData, data, set)
	return [...set]
}
export default updateElementsOfArray;