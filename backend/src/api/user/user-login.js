import bcrypt from "bcryptjs";
import User from "../../models/user.js";
import outUser from "../../utils/outUser.js"
import genToken from "../../utils/genToken.js"

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User Does Not Exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = genToken(existingUser)

    res.status(200).json({ token, ...outUser(existingUser) });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default login;