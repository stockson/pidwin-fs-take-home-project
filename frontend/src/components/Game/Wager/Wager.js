import css from "./Wager.module.css"
import styles from "./styles.js"
import { Button, TextField, InputAdornment } from "@mui/material"
import { useState } from "react"
import * as wagerTypes from "../../../constants/wagerTypes.js"
import { isNumberBetween } from "../../../util/validator.js"
import { flipCoin } from "../../../actions/game.js"
import { useDispatch } from "react-redux";

const initWagerData = {
	wagerType: wagerTypes.HEADS,
	wagerAmount: 0,
}


const Wager = () => {
  const dispatch = useDispatch();

	const [wagerData, setWagerData] = useState(initWagerData)
	const [amountErr, setAmountErr] = useState(null)

	const clickPicker = (wagerType) => {
		setWagerData({ ...wagerData, wagerType })
	}
	const amountChange = (e) => {
		const val = e.target.value
		const { valid, err } = isNumberBetween(val, 1, 100)
		setAmountErr(err)
		if (valid) setWagerData({ ...wagerData, wagerAmount: val })
	}
	const flipCoinHandle = () => {
		dispatch(flipCoin(wagerData))
	}


	return (
		<div id={css.wager}>
			<div id="results">

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
						: "Enter the amount of tokens you want to bet" }
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
					onClick={flipCoinHandle}
				>Flip Coin</Button>

			</div>
		</div>
	)
}

export default Wager