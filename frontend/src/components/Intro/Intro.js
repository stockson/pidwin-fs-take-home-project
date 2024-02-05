import style from "./Intro.module.css";
import { useSelector } from "react-redux"


const Intro = () => {
	const profile = useSelector((state) => state.profile);
	if (profile) return null

	return (
		<div id={style.intro}>
			<div className={style.top}>Welcome to</div>
			<div className={style.bottom}>
				<span>Coin</span>
				<span>Toss</span>
			</div>
		</div>
	)
}

export default Intro