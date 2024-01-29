import { jwtDecode } from "jwt-decode";
import css from "./History.module.css"


const History = () => {
  const user = localStorage.getItem("profile")
    ? jwtDecode(JSON.parse(localStorage.getItem("profile")).token)
    : "null";

	return (
		<div id={css.history}>
			<h1>Recent Tosses</h1>
			<ul>
				{/* {user.history.map( (hi) => {
					<li key={hi.createdDate.toString()}>
						{hi.wagerType}: {hi.delta} { hi > 1 ? `(x${hi.mult})` : ""}
					</li>
				})} */}
			</ul>
		</div>
	)
}

export default History