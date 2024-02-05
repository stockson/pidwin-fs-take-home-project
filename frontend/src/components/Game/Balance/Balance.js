// import styles from './Balance.module.css'
import BalanceDelta from "./BalanceDelta"
import styles from "./styles.js"


const Balance = ({ game, result }) => {

	return (
		<div style={styles.balance}>
			<BalanceDelta result={result}/>
			<span>Tokens: </span>
			<span>{game.tokens}</span>
		</div>
	)
}

export default Balance