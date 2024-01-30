
// skipping min/max validation
// normally would have used zod
// export function isNumberBetween(val, min, max) {
export const isNumberBetween = (val, min, max) => {
	const num = parseInt(val)
	if (!num)
		return { err: "Must be a number: " + val }

	if (!isPositiveInteger(num))
		return { err : "Must be positive Integer: " + val }
	if (num < min)
		return { err: `You must bet at least ${min}` }
	if (num > max)
		return { err: `You don't have enough tokens for a bet of ${val}, tokens: ${max}` }
	return { valid: true, result: num }
}

function isPositiveInteger(num) {
	return Number.isInteger(num) && num > 0
}