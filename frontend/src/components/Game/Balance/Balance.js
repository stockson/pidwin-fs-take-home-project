// import styles from './Balance.module.css'
import styles from "./styles.js"


const Balance = () => {
  const user = localStorage.getItem("profile")
    ? jwtDecode(JSON.parse(localStorage.getItem("profile")).token)
    : "null";

	return (
		<div style={styles.balance}>
			<span>Tokens: </span>
			<span>{user.tokens}</span>
		</div>
	)
}

export default Balance