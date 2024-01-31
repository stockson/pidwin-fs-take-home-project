import css from './Game.module.css'
import styles from "./styles.js"
import Balance from "./Balance/Balance"
import History from "./History/History"
import Wager from "./Wager/Wager"

import { flipCoin } from "../../actions/game.js"
import { useDispatch } from "react-redux";
// import * as messages from "../../messages"

import { restart } from "../../actions/game.js"

import { useState } from "react"
import getUser from "../../util/getUser.js"

const resultInit = {
  mult: null,
  multText: null,
  delta: null,
  resultType: null
}

const Game = () => {
  const initUser = getUser()
  const [user, setUser] = useState( initUser )

  const [result, setResult] = useState(resultInit)

  const dispatch = useDispatch();

	const flipCoinHandle = async (wagerData) => {

    // couldn't get the redux action to work
    // running it manually
    const flipCoinFn = flipCoin(wagerData)
    const resp = await flipCoinFn(dispatch)
    setResult(resp)

    // awkardly forcing render
    const newUser = getUser()
    setUser(newUser)
	}


  const restartHandle = async () => {
    // dispatch({ type: actionType.RESTART });
    await dispatch(restart());
    const resetUser = getUser()
    setUser( resetUser )
  }


  return (
    <div id={css.game} style={styles.game} >
      <Balance user={user}/>
      <History user={user}/>
      <Wager
        flipCoinHandle={flipCoinHandle}
        restart={restartHandle}
        result={result}
        user={user}
      />
    </div>
  )
}

export default Game