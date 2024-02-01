import css from "./History.module.css"

const History = ({ game: { history }}) => {

	const displayDelta = (delta) => delta > 0 ? `+${delta}` : delta

	return (
		<div id={css.history}>
			<h1>Recent Tosses</h1>
			<ul>
				{history.map( (hi) => {
					return (
						<li key={hi.createdDate.toString()}>
							{hi.wagerType}: {displayDelta(hi.delta)} { hi > 1 ? `(x${hi.mult})` : ""}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default History