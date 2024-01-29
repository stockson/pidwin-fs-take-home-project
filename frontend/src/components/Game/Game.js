import css from './Game.module.css'
import styles from "./styles.js"
import Balance from "./Balance/Balance"
import History from "./History/History"
import Wager from "./Wager/Wager"


const Game = () => {
  return (
    <div id={css.game} style={styles.game} >
      <Balance />
      <History />
      <Wager />
    </div>
  )
}

export default Game