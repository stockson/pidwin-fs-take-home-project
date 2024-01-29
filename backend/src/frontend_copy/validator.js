
export function isNumberBetween(val, min, max) {
	if (!isPositiveInteger(val))
		return { err : "Not a number" }
	if (val < min)
		return { err: `Number must be greater than ${min}` }
	if (val > max)
		return { err: `Number must be less than ${max}` }
	return { valid: true }
}

function isPositiveInteger(n) {
	return n >>> 0 === parseFloat(n);
}