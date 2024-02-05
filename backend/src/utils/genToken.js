import jwt from "jsonwebtoken";

export default function genToken(user) {
	return jwt.sign(
		{
			// got rid of other fields to not bloat token
			_id: user._id,
		},
		process.env.JWT_SECRET,
		{ expiresIn: "1h" }
	);
}