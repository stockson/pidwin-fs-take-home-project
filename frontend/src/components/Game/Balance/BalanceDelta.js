import { useState, useEffect } from "react"
// import style from "./Balance.module.css"
import "./Balance.css"


const BalanceDelta = ({ result }) => {

	const [ hasAnim, setHasAnim ] = useState(false)

	useEffect(() => {
		setHasAnim(false)
		setTimeout(() => setHasAnim(true), 10)
	}, [result])

	const total = result.delta * result.mult
	const isPositive = total > 0
	const text = isPositive ? `+${total}` : total

	const cl = ["item"]
	if (hasAnim) cl.push("active")
	if (isPositive) cl.push("positive")

	if (!result || !result.delta) return null
	return (
		<div id={"balance-delta"}>
			<div className={cl.join(" ")}>
				{ text }
			</div>
		</div>
	)
}

export default BalanceDelta