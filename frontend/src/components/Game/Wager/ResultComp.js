


const ResultComp = ({result}) => {
	if (!result || !result.delta) return null

	const winText = result.delta > 0 ? "Win" : "Lose"
	const amountText = result.delta > 0 ? `+${result.delta}` : result.delta
	const multText = result.multText ? result.multText + ` (x${result.mult})`  : ""

	return (
		<>
			<div className="result-type">Result: {result.resultType}</div>
			<div className="result-win">You {winText}!</div>
			<div className="result-amount">{amountText}</div>
			<div className="result-bonus">{multText}</div>
		</>
	)
}


export default ResultComp