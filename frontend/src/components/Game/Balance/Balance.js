// import styles from './Balance.module.css'
import styles from "./styles.js"
import { jwtDecode } from "jwt-decode";


const Balance = () => {
  const user = localStorage.getItem("profile")
    ? jwtDecode(JSON.parse(localStorage.getItem("profile")).token)
    : "null";

	console.log(user)

	return (
		<div style={styles.balance}>
			<span>Tokens: </span>
			<span>{user.tokens}</span>
		</div>
	)
}

export default Balance