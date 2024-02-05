import jwt from "jsonwebtoken";


// recreate token on every auth request ?

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
    if (error.name === "TokenExpiredError") {
      // switch to enum that front can use
      // instead of using 401 status
      const TOKEN_EXPIRED = "TOKEN_EXPIRED"
      return res.status(401).json({ errI: TOKEN_EXPIRED, message: "Login Token Expired" });
    }
    console.error(error)
    res.status(500).json({ message: "Something went wrong" })
  }
};

export default auth;
