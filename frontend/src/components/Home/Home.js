import React from "react";
import { Container, Grow, Paper, Typography } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import Game from "../Game/Game";

import getUser from "../../util/getUser.js";

const Home = () => {
  const user = getUser()

  const isSingedIn = user;

  return (
    <>
      {isSingedIn !== "null" && isSingedIn !== null ? (
        <Game />
      ) : (
        <Typography variant="h4" align="center" color="primary">
          Login to Play
        </Typography>
      )}
    </>
  );
};

export default Home;
