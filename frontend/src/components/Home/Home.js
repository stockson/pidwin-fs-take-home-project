import React, { useEffect } from "react";
// import { Container, Grow, Paper, Typography } from "@mui/material";
import Game from "../Game/Game";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"


const Home = () => {

  const profile = useSelector((state) => state.profile);
  const nav = useNavigate()

  useEffect( () => {
    if (!profile)
      nav("/auth")
  }, [profile, nav])

  if (!profile) {
    return null // short circuit instead of if/else
  }

  return (
    <Game />
  );
};

export default Home;
