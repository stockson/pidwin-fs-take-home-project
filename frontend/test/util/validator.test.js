import { isNumberBetween } from "../../../backend/frontend_copy/validator"


describe("validator - isNumberBetween", () => {
	it("should work with 5,1,10", () => {
		const { valid } = isNumberBetween(5,1,10)
		expect(valid).toBe(true)
	})
	it("should fail with 1,5,10", () => {
		const { valid } = isNumberBetween(1,5,10)
		expect(valid).not.toBe(true)
	})
	it("should fail with 20,5,10", () => {
		const { valid } = isNumberBetween(20,5,10)
		expect(valid).not.toBe(true)
	})
	it("should fail with 'a',5,10", () => {
		const { valid } = isNumberBetween('a',5,10)
		expect(valid).not.toBe(true)
	})
})