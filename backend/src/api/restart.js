import User from "../models/user.js";

import outUser from "../utils/outUser.js"

const restart = async (req, res) => {
	const userId = req.userId
	if (!userId) {
		return res.status(401).json({ message: "Unauthenticated" });
  }

  try {
    const existingUser = await User.findOne({ _id: userId });
    if (!existingUser) {
      return res.status(404).json({ message: "User Does Not Exist" });
    }

    const respUser = await User.findByIdAndUpdate(
      existingUser._id,
      { tokens: 100, history: [] },
      { new: true }
    );

    res.status(200).json({
      user: outUser(respUser)
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default restart;