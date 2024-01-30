import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionType from "../../constants/actionTypes";
import { styles } from "./styles";
import getUser from "../../util/getUser.js"
import { restart } from "../../actions/game.js"

const Navbar = () => {
  const initUser = getUser()
  const [user, setUser] = useState( initUser );
  const dispatch = useDispatch();
  let location = useLocation();
  const history = useNavigate();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history("/auth");
    setUser("null");
  };

  const restartHandle = () => {
    // dispatch({ type: actionType.RESTART });
    dispatch(restart());
    history("/")
  }

  useEffect(() => {
    if (user !== "null" && user !== null) {
      if (user.exp * 1000 < new Date().getTime()) logout();
    }
    const defUser = getUser()
    setUser(defUser);
  }, [location]);

  return (
    <div style={styles.appBarWrap}>
      <AppBar sx={styles.appBar} position="static" color="inherit">
        <div style={styles.brandContainer}>
          <Typography
            component={Link}
            to="/"
            sx={styles.heading}
            variant="h5"
            align="center"
          >
            CoinToss
          </Typography>
        </div>
        <Toolbar sx={styles.toolbar}>
          {user !== "null" && user !== null ? (
            <div style={styles.profile}>
              <Avatar sx={styles.purple} alt={user.name} src={user.picture}>
                {user.name.charAt(0)}
              </Avatar>
              <Typography sx={styles.userName} variant="h6">
                {user.name}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  history("/password");
                }}
              >
                Set Password
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={restartHandle}
              >
                Restart
              </Button>
              <Button
                variant="contained"
                sx={styles.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
