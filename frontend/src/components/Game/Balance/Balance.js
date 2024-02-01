// import styles from './Balance.module.css'
import styles from "./styles.js"


const Balance = ({ game }) => {

	return (
		<div style={styles.balance}>
			<span>Tokens: </span>
			<span>{game.tokens}</span>
		</div>
	)
}

export default Balance