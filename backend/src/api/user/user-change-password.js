import bcrypt from "bcryptjs";
import User from "../../models/user.js";

const changePassword = async (req, res) => {
  const userId = req.userId
  if (!userId) return res.status(401).json({ message: "Not Authorized" });

  // patched for security vulnerability: paramater tampering
  // const { email, oldPassword, newPassword } = req.body;
  const { oldPassword, newPassword } = req.body;

  try {
    // const existingUser = await User.findOne({ email });
    const existingUser = await User.findOne({ _id: userId });

    if (!existingUser) {
      return res.status(404).json({ message: "User Does Not Exist" });
    }

    if (!req.userId) {
      return res.json({ message: "Unauthenticated" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      oldPassword,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    // const updatePassword = await User.findByIdAndUpdate(
    await User.findByIdAndUpdate(
      existingUser._id,
      { password: hashedPassword },
      { new: true }
    );

    res.status(200).json({});
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default changePassword;