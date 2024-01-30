import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import outUser from "../utils/outUser.js"

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

    const token = jwt.sign(
      {
        _id: existingUser._id,
        // password: existingUser.password,
      },
      "test",
      // process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const userData = outUser(existingUser)

    res.status(200).json({ token, user: userData });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default login;