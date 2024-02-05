import "./Result.css"


const ResultComp = ({result}) => {
	if (!result || !result.delta)
		return (<div id="result"></div>)

	const isWinner = result.delta > 0
	const winText = isWinner ? "Win" : "Lose"
	const winClass = isWinner ? "win" : "lose"
	const amountText = result.delta > 0 ? `+${result.delta}` : result.delta
	const multText = result.multText ? result.multText + ` (x${result.mult} Tokens)`  : ""

	return (
		<div id="result">
			<div className="type">{result.resultType}</div>
			<div className={ winClass }>You {winText}!</div>
			<div className="amount">{amountText} Tokens</div>
			<div className="bonus">{multText}</div>
		</div>
	)
}


export default ResultComp