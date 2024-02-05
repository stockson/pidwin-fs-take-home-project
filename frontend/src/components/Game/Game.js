import css from './Game.module.css'
import styles from "./styles.js"
import Balance from "./Balance/Balance"
import History from "./History/History"
import Wager from "./Wager/Wager"

import { flipCoin } from "../../actions/game"
import { useDispatch, useSelector } from "react-redux";
// import * as messages from "../../messages"

import { useState } from "react"

const resultInit = { mult: null, multText: null, delta: null, resultType: null }

const Game = () => {

  const game = useSelector((state) => state.game);

  const [result, setResult] = useState(resultInit)

  const dispatch = useDispatch();

	const flipCoinHandle = async (wagerData) => {

    // couldn't get the thunk to return a response
    // state shouldn't persist, not adding it
    // running it manually
    const flipCoinFn = flipCoin(wagerData)
    const respResult = await flipCoinFn(dispatch)
    setResult(respResult)
	}

  return (
    <div id={css.game} style={styles.game} >
      <Balance game={game} result={result}/>
      <History game={game}/>
      <Wager
        flipCoinHandle={flipCoinHandle}
        result={result}
        game={game}
      />
    </div>
  )
}

export default Game