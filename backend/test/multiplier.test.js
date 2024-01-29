import getMultiplier from '../src/game/getMultiplier';



describe("getMultiplier", () => {


	it("win on empty", () => {
		const { mult } = getMultiplier(1, [])
		expect(mult).toBe(1)
	})
	it("win on [win] (x1)", () => {
		const ar = [1].map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(1, ar)
		expect(mult).toBe(1)
	})
	it("win on [win, win] (x3)", () => {
		const ar = [1, 1].map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(1, ar)
		expect(mult).toBe(3)
	})
	it("win on [win, win, win] (x1)", () => {
		const ar = [1, 1, 1].map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(1, ar)
		expect(mult).toBe(1)
	})
	it("win on [win, win, win, win] (x5)", () => {
		const ar = [1, 1, 1, 1].map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(1, ar)
		expect(mult).toBe(5)
	})
	it("win on [win, win, win, win, win] (x1)", () => {
		const ar = [1, 1, 1, 1, 1].map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(1, ar)
		expect(mult).toBe(1)
	})
	it("win on [win, win, win, win, win, win, win] (x3)", () => {
		const ar = Array(7).fill(1).map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(1, ar)
		expect(mult).toBe(3)
	})
	it("win on [9x wins] (x5)", () => {
		const ar = Array(9).fill(1).map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(1, ar)
		expect(mult).toBe(5)
	})

	// mix in losses
	it("loss on [win win]", () => {
		const ar = [1, 1].map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(-1, ar)
		expect(mult).toBe(1)
	})

	it("win on [loss win win]", () => {
		const ar = [-1, 1, 1].map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(1, ar)
		expect(mult).toBe(1)
	})
	it("win on [win loss win win]", () => {
		const ar = [1, -1, 1, 1].map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(1, ar)
		expect(mult).toBe(1)
	})
	it("win on [win win loss win win] (x3)", () => {
		const ar = [1, 1, -1, 1, 1].map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(1, ar)
		expect(mult).toBe(3)
	})
	it("win on [win win win loss win win] (x1)", () => {
		const ar = [1, 1, 1, -1, 1, 1].map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(1, ar)
		expect(mult).toBe(1)
	})
	it("win on [win win win win loss win win] (x5)", () => {
		const ar = [1, 1, 1, 1, -1, 1, 1].map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(1, ar)
		expect(mult).toBe(5)
	})
	it("win on [win win win win win loss win win] (x1)", () => {
		const ar = [1, 1, 1, 1, 1, -1, 1, 1].map( (delta) => ({ delta }) )
		const { mult } = getMultiplier(1, ar)
		expect(mult).toBe(1)
	})


})