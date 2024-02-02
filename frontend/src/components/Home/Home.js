import React from "react";
// import { Container, Grow, Paper, Typography } from "@mui/material";
import { Typography } from "@mui/material";
// import { jwtDecode } from "jwt-decode";
import Game from "../Game/Game";
import { useSelector } from "react-redux";


const Home = () => {

  const profile = useSelector((state) => state.profile);

  const isSingedIn = profile && profile.name;

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
