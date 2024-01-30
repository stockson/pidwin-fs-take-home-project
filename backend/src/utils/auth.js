import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decodedData?._id;
    } else {
      decodedData = jwt.decode(token);

      // not sure what this is for
      // req.userId = decodedData?.sub;

      req.userId = decodedData._id
    }

    next();
  } catch (error) {
    // access URL when logged out? Untested
    console.error(error)
    res.status(500).json({ message: "Something went wrong" })
  }
};

export default auth;
