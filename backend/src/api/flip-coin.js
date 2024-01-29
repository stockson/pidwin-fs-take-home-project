import User from "../models/user.js";
import runFlip from "../game/runFlip.js"

const flipCoin = async (req, res) => {
	const userId = req.userId
	if (!userId)
		return res.status(401).json({ message: "Unauthenticated" });

  const { wagerType, amount } = req.body;

  try {
    const { tokens, history } = await User.findOne({ _id: userId });

    if (!existingUser) {
      return res.status(404).json({ message: "User Does Not Exist" });
    }

		// redundant with frontend, replaying here for security/bug-catching
		const { err } = isNumberBetween(amount, 1, tokens)
		if (err) return res.status(400).json({ message: err })

		const delta = runFlip(wagerType, amount)
		const { mult, multText } = getMultiplier(amountDelta, history)

		history.unshift({ wagerType, delta, mult: mult, createdDate: new Date() })
		history = history.slice(0, 10)
		tokens += ( delta * mult )

    const respUser = await User.findByIdAndUpdate(
      existingUser._id,
      { tokens, history },
      { new: true }
    );

    res.status(200).json({
      // may as well sync to response if it's availble:
      tokens: respUser.tokens,
      history: respUser.history,

      mult, multText, delta
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default flipCoin;