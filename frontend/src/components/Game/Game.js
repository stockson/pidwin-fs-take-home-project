import css from './Game.module.css'
import styles from "./styles.js"
import Balance from "./Balance/Balance"
import History from "./History/History"
import Wager from "./Wager/Wager"

import { flipCoin } from "../../actions/game.js"
import { useDispatch, useSelector } from "react-redux";
// import * as messages from "../../messages"

import { restart } from "../../actions/game.js"

import { useState } from "react"

const resultInit = { mult: null, multText: null, delta: null, resultType: null }

const Game = () => {

  const game = useSelector((state) => state.game);

  const [result, setResult] = useState(resultInit)

  const dispatch = useDispatch();

	const flipCoinHandle = async (wagerData) => {

    // couldn't get the redux action to return a response
    // or set the state
    // running it manually
    const flipCoinFn = flipCoin(wagerData)
    const respResult = await flipCoinFn(dispatch)
    setResult(respResult)
	}

  const restartHandle = async () => {
    // dispatch({ type: actionType.RESTART });
    await dispatch(restart());
  }

  return (
    <div id={css.game} style={styles.game} >
      <Balance game={game}/>
      <History game={game}/>
      <Wager
        flipCoinHandle={flipCoinHandle}
        restart={restartHandle}
        result={result}
        game={game}
      />
    </div>
  )
}

export default Game