import express from "express";
import flipCoin from "./flip-coin.js"
import restart from "./restart.js"

import auth from "../../utils/auth.js";

const router = express.Router();

router.post("/flipCoin", auth, flipCoin);
router.post("/restart", auth, restart);

export default router;
