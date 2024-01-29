import { HEADS, TAILS } from "../frontend_copy/wagerTypes.js"

export default function( wagerType, amount ) {
	const flipResult = getFlipResult()
	return wagerType == flipResult ? amount : -amount
}

function getFlipResult() {
	return Math.random() < 0.5 ? HEADS : TAILS
}