// import styles from './Balance.module.css'
import styles from "./styles.js"
import getUser from "../../../util/getUser.js"
import { useSelector } from "react-redux"


const Balance = () => {
	const user = getUser()

	return (
		<div style={styles.balance}>
			<span>Tokens: </span>
			<span>{user.tokens}</span>
		</div>
	)
}

export default Balance