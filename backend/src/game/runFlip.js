
// import * as wagerTypes from '../../../frontend/src/shared/wagerTypes.js'
import * as wagerTypes from '../copied_from_front/wagerTypes.js'
const { HEADS, TAILS } = wagerTypes

export default function( wagerType, amount ) {
	const resultType = getFlipResult()
	const delta = wagerType == resultType ? amount : -amount
	return { delta, resultType }
}

function getFlipResult() {
	return Math.random() < 0.5 ? HEADS : TAILS
}