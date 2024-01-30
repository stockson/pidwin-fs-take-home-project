import css from "./Wager.module.css"
import styles from "./styles.js"
import { Button, TextField, InputAdornment } from "@mui/material"
import { useState } from "react"

import * as wagerTypes from "../../../shared/wagerTypes.js"
import * as messages from "../../../messages";
import { isNumberBetween } from "../../../shared/validator.js"

import ResultComp from "./ResultComp.js"


const initWagerData = {
	wagerType: wagerTypes.HEADS,
	wagerAmount: 0,
}

const Wager = ({ flipCoinHandle, result }) => {

	const [wagerData, setWagerData] = useState(initWagerData)
	const [amountErr, setAmountErr] = useState(null)

	const clickPicker = (wagerType) => {
		setWagerData({ ...wagerData, wagerType })
	}
	const amountChange = (e) => {
		const val = e.target.value
		const { err } = isNumberBetween(val, 1, 100)
		setAmountErr(err)

		// set val even if invalid so prev value isn't locked in
		// re-validated on submit and on server
		setWagerData({ ...wagerData, wagerAmount: val })
	}

	const flipCoinWrap = (e) => {
		e.preventDefault()
		const { valid, err } = isNumberBetween(wagerData.wagerAmount, 1, 100)
		if (!valid) return messages.error(err)
		flipCoinHandle(wagerData)
	}


	return (
		<div id={css.wager}>
			<div id={css.wagerResults}>
				<ResultComp result={result}/>
			</div>

			<div className={css.inputs}>

				<div className={css.picker}>
					<Button
						variant= {wagerData.wagerType === wagerTypes.HEADS ? "contained" : "outline"}
						color="secondary"
						sx={styles.button}
						onClick={() => clickPicker(wagerTypes.HEADS)}
					>Heads</Button>

					<Button
						variant= {wagerData.wagerType === wagerTypes.TAILS ? "contained" : "outline"}
						color="secondary"
						sx={styles.button}
						onClick={() => clickPicker(wagerTypes.TAILS)}
					>Tails</Button>
				</div>

				{/* internet says I should use BaseNumberInput -- skipping */}
				<TextField
					variant="filled"
					label= {amountErr ? "Error" : "Bet Amount" }
					error= { amountErr ? true : false }
					placeholder="0"
					helperText= { amountErr ? amountErr
						// : "Enter the amount of tokens you want to bet"
						: ""
					}
					size="large"
					sx={styles.amount}
					fullWidth
					onChange={amountChange}
					InputProps={{
						startAdornment: <InputAdornment position="start">$</InputAdornment>,
					}}
				/>


				<Button
					type="submit"
					fullWidth
					sx={styles.submit}
					variant="contained"
					color="primary"
					onClick={flipCoinWrap}
				>Flip Coin</Button>

			</div>
		</div>
	)
}

export default Wager