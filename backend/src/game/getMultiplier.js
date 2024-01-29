

export default function( delta, historyAr ) {
	const def = { mult: 1 }
	if (delta < 0) return def

	let count = 1
	for (let item of historyAr) {
		const delta = item.delta
		if (delta < 0) break
		count += 1
		if (count > 5) count = 1
	}

	switch (count) {
		case 3:
			return { mult: 3, multText: "Hot Streak!"}
		case 5:
			return { mult: 5, multText: "Jackpot!"}
		default:
			return def
	}
}
