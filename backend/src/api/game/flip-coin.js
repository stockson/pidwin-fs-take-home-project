import User from "../../models/user.js";
import runFlip from "../../game/runFlip.js"

// import { isNumberBetween } from "../../../frontend/src/shared/validator.js"
import { isNumberBetween } from "../../copied_from_front/validator.js"
import getMultiplier from "../../game/getMultiplier.js"

import outUser from "../../utils/outUser.js"

const flipCoin = async (req, res) => {
	const userId = req.userId
	if (!userId) {
    console.error("No User ID")
		return res.status(401).json({ message: "Unauthenticated" });
  }

  let { wagerType, wagerAmount } = req.body;

  try {
    const existingUser = await User.findOne({ _id: userId });

    if (!existingUser) {
      return res.status(404).json({ message: "User Does Not Exist" });
    }

    let { tokens, history } = existingUser

		// redundant with frontend, replaying here for security/bug-catching
		const { err, result } = isNumberBetween(wagerAmount, 1, tokens)
    wagerAmount = result

    if (err) console.error(err)
		if (err) return res.status(400).json({ message: err })

		const { delta, resultType } = runFlip(wagerType, wagerAmount)
		const { mult, multText } = getMultiplier(delta, history)

		history.unshift({ wagerType, delta, mult: mult, createdDate: new Date() })
		history = history.slice(0, 10)

		tokens += ( delta * mult )

    let respUser = await User.findByIdAndUpdate(
      existingUser._id,
      { tokens, history },
      { new: true }
    );

    res.status(200).json({
      game: {
        tokens: respUser.tokens,
        history: respUser.history,
      },
      result: { mult, multText, delta, resultType },
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default flipCoin;