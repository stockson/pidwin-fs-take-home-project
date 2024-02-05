import "./History.css"

const History = ({ game: { history }}) => {

	return (
		<div id="history">
			<h1>Recent Tosses</h1>
			<ul>
				{history.map( (hi) => {
					const isWinner = hi.delta > 0
					const winText = isWinner ? "Win" : "Lose"
					const winCl = isWinner ? "win" : "lose"
					const amountText = isWinner ? `+${hi.delta}` : hi.delta
					const bonusText = hi.mult > 1 ? `(x${hi.mult})` : ""
					return (
						<li key={hi.createdDate.toString()} className={winCl}>
							<span>{winText}</span>
							<span>{hi.wagerType}</span>
							<span>{amountText}</span>
							<span>{bonusText}</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default History